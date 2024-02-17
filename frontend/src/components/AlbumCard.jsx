import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AlbumCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 20px;
  width: 60%;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3); /* Enhance shadow on hover */
  }
`;

const AlbumCoverWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 5px; /* Match card corners */
`;

const AlbumCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1; /* Use remaining space */
`;

const AlbumTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const AlbumDetails = styled.p`
  font-size: 14px;
  color: #777;
  margin: 0;
`;

const AlbumCard = ({ album }) => {
  const { id, artist, title, releaseYear, genre } = album;

  return (
    <Link to={`/edit/${id}`}>
      <AlbumCardContainer>
        <AlbumCoverWrapper>
          <AlbumCover src={"/musicicon.jpg"} alt={`${artist} - ${title}`} />
        </AlbumCoverWrapper>
        <AlbumInfo>
          <AlbumTitle>
            {artist} - {title}
          </AlbumTitle>
          <AlbumDetails>
            Released: {releaseYear} &nbsp; | &nbsp; Genre: {genre}
          </AlbumDetails>
        </AlbumInfo>
      </AlbumCardContainer>
    </Link>
  );
};

AlbumCard.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.string, // Optional
    genre: PropTypes.string, // Optional
  }).isRequired,
};

export default AlbumCard;
