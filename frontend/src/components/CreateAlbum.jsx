import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createAlbumStart } from "../slices/albumSlice";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const AlbumCreateFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 500px;
  padding: 20px;
  border: 3px solid goldenrod;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: #333;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    background-color: #45aa;
  }

  .error-message {
    color: red;
    font-size: 12px;
    margin-bottom: 5px;
  }

  .success-message {
    color: green;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const AlbumCreateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    artist: "",
    title: "",
    releaseYear: "",
    genre: "",
  };

  const validationSchema = Yup.object({
    artist: Yup.string().required("Artist is required"),
    title: Yup.string().required("Title is required"),
    releaseYear: Yup.string().required("Release year is required"),
    genre: Yup.string().required("Genre is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(createAlbumStart(values));
    setSubmitting(false);
    // Show success message and redirect to album list
    alert("Album created successfully!");
    navigate("/");
  };

  return (
    <AlbumCreateFormContainer>
      <h2>Create Album</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="artist">Artist:</label>
            <Field type="text" id="artist" name="artist" />
            {errors.artist && touched.artist && (
              <ErrorMessage>{errors.artist}</ErrorMessage>
            )}
            <label htmlFor="title">Title:</label>
            <Field type="text" id="title" name="title" />
            {errors.title && touched.title && (
              <ErrorMessage>{errors.title}</ErrorMessage>
            )}
            <label htmlFor="releaseYear">Release Year:</label>
            <Field type="text" id="releaseYear" name="releaseYear" />
            {errors.releaseYear && touched.releaseYear && (
              <ErrorMessage>{errors.releaseYear}</ErrorMessage>
            )}
            <label htmlFor="genre">Genre:</label>
            <Field type="text" id="genre" name="genre" />
            {errors.genre && touched.genre && (
              <ErrorMessage>{errors.genre}</ErrorMessage>
            )}
            <button type="submit" disabled={errors.length > 0}>
              Create Album
            </button>
          </Form>
        )}
      </Formik>
    </AlbumCreateFormContainer>
  );
};

export default AlbumCreateForm;
