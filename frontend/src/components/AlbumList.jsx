import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllalbums,
  selectLoading,
  selectError,
  fetchAlbumsStart, // Import this action
} from "../slices/albumSlice";
import AlbumCard from "./AlbumCard";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddAlbumButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  margin: 0 auto;
  display: block;
`;

const AlbumListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const AlbumListUL = styled.ul`
  width: 80%;
  margin: 0 auto;
`;
const AlbumList = () => {
  const navigate = useNavigate();
  const albums = useSelector(selectAllalbums);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch(); // Add this line

  useEffect(() => {
    dispatch(fetchAlbumsStart());
  }, [dispatch]); // Add dispatch to the dependency array

  const handleAddAlbum = () => {
    navigate("/create");
  };

  return (
    <AlbumListContainer>
      {loading ? (
        <p>Loading albums...</p>
      ) : error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <AlbumListUL>
          <AddAlbumButton onClick={handleAddAlbum}>Add Album</AddAlbumButton>
          {albums.map((album) => (
            <AlbumCard key={parseInt(album.id)} album={album} />
          ))}
        </AlbumListUL>
      )}
    </AlbumListContainer>
  );
};

export default AlbumList;
