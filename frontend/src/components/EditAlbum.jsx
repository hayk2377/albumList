import { useSelector, useDispatch } from "react-redux";
import {
  updateAlbumStart,
  deleteAlbumStart,
  selectAllalbums,
} from "../slices/albumSlice";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const EditFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 20px;
  width: 500px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
`;

const FormField = styled.div`
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
`;

const FormButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

const DeleteButton = styled.button`
  background-color: #f00;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #d00;
  }
`;
const albumSchema = Yup.object().shape({
  artist: Yup.string().required("Artist is required"),
  title: Yup.string().required("Title is required"),
  releaseYear: Yup.number()
    .required("Release year is required")
    .min(1900, "Release year must be at least 1900"),
  genre: Yup.string().required("Genre is required"),
});
const EditForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const albums = useSelector(selectAllalbums);
  const history = useNavigate();
  const selectedAlbum = albums.find((album) => album.id === id);

  // Initial values for Formik based on selected album
  const initialValues = {
    id: selectedAlbum?.id,
    artist: selectedAlbum?.artist || "",
    title: selectedAlbum?.title || "",
    releaseYear: selectedAlbum?.releaseYear || "",
    genre: selectedAlbum?.genre || "",
  };

  const handleSubmit = (values) => {
    dispatch(updateAlbumStart({ id, values })); // Dispatch update action with form values
  };

  const handleDeleteClick = () => {
    dispatch(deleteAlbumStart(id)); // Dispatch delete action with ID
    history("/");
  };

  return (
    <EditFormContainer>
      <FormTitle>Edit Album</FormTitle>
      {selectedAlbum ? (
        <Formik
          initialValues={initialValues}
          validationSchema={albumSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FormField>
                <FormLabel>Artist</FormLabel>
                <FormInput
                  name="artist"
                  value={values.artist}
                  onChange={handleChange}
                />
              </FormField>
              <FormField>
                <FormLabel>Title</FormLabel>
                <FormInput
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                />
              </FormField>
              <FormField>
                <FormLabel>Release Year</FormLabel>
                <FormInput
                  type="number"
                  name="releaseYear"
                  value={values.releaseYear}
                  onChange={handleChange}
                />
              </FormField>
              <FormField>
                <FormLabel>Genre</FormLabel>
                <FormInput
                  name="genre"
                  value={values.genre}
                  onChange={handleChange}
                />
              </FormField>
              <div>
                <FormButton type="submit">Update</FormButton>
                <DeleteButton type="button" onClick={handleDeleteClick}>
                  Delete
                </DeleteButton>
              </div>
            </form>
          )}
        </Formik>
      ) : (
        <p>Album not found.</p>
      )}
    </EditFormContainer>
  );
};
export default EditForm;
