package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)
var id int = 21
// album represents data about a record album.
type album struct {
	ID     string  `json:"id"`
	Title  string  `json:"title"`
	ReleaseYear   string  `json:"releaseYear"`
	Artist string  `json:"artist"`
	Genre  string `json:"genre"`
}

func main() {
	router := gin.Default()
	config:=cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173"}
	router.Use(cors.New(config))
	router.GET("/albums", getAlbums)
	router.PUT("/album/:id", getAlbumByID)
	router.POST("/album", postAlbums)
	router.DELETE("/album/:id", deleteAlbumByID)
	router.Run("localhost:8000")
}
// albums slice to seed record album data.
var albums = []album{
    {ID: "1", Title: "Blue Train", Artist: "John Coltrane",ReleaseYear:"2002", Genre:"Country" },
    {ID: "2", Title: "Jeru", Artist: "Gerry Mulligan",ReleaseYear:"2002", Genre: "Country"},
    {ID: "3", Title: "Sarah Vaughan and Clifford Brown",ReleaseYear:"2022", Artist: "Sarah Vaughan", Genre: "Reggae"},
    {ID: "4", Title: "Kind of Blue", Artist: "Miles Davis",ReleaseYear:"2012", Genre: "Reggae"},
    {ID: "5", Title: "A Love Supreme", Artist: "John Coltrane",ReleaseYear:"2007", Genre:"Hip Hop" },
    {ID: "6", Title: "Time Out", Artist: "Dave Brubeck Quartet",ReleaseYear:"2006", Genre: "Jazz"},
    {ID: "7", Title: "Moanin'", Artist: "Art Blakey and the Jazz Messengers",ReleaseYear:"2002", Genre: "Jazz"},
    {ID: "8", Title: "Out to Lunch!", Artist: "Eric Dolphy",ReleaseYear:"2002", Genre: "Blues"}}

// getAlbums responds with the list of all albums as JSON.
func getAlbums(c *gin.Context) {
	log.Println("getAlbums")
	c.IndentedJSON(http.StatusOK, albums)
}

// postAlbums adds an album from JSON received in the request body.
func postAlbums(c *gin.Context) {
	var newAlbum album
	id++
	newAlbum.ID = fmt.Sprint(id)

	// Call BindJSON to bind the received JSON to
	// newAlbum.
	
	if err := c.BindJSON(&newAlbum); err != nil {
		log.Println(err)
		return 
	}

	// Add the new album to the slice.
	albums = append([]album{newAlbum}, albums...)
	c.IndentedJSON(http.StatusCreated, newAlbum)
}

func getAlbumByID(c *gin.Context) {
    fmt.Println("updateAlbumByID")
    id := c.Param("id")

    var newAlbum album

    // Call BindJSON to bind the received JSON to newAlbum.
    if err := c.BindJSON(&newAlbum); err != nil {
        return
    }

    // Loop over the list of albums, looking for
    // an album whose ID value matches the parameter.
    for i, a := range albums {
        if a.ID == id {
            albums[i] = newAlbum
            c.IndentedJSON(http.StatusOK, newAlbum)
            return
        }
    }
    c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found"})
}
func deleteAlbumByID(c *gin.Context) {
	id := c.Param("id")
	n:=len(albums)
	for i, a := range albums {
		if a.ID == id {
			if i!=n-1{
			albums = append(albums[:i], albums[i+1:]...)
			}else{
				albums = albums[:i]}
			c.IndentedJSON(http.StatusOK, gin.H{"message": "album deleted"})
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "album not found"})
}
