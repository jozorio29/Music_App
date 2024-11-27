import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    artist: Yup.string().required("Artist is required"),
    genre: Yup.string().required("Genero is required"),
    album: Yup.string().required("Album is required"),
  });

const AddSong = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      artist: "",
      genre: "",
      album: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:8080/api/add-musicas", values);
        navigate("/musicas");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="text-center mt-3 mb-3">New Song</h1>
      <div className="form-group">
        <label htmlFor="title" className="d-block text-center mb-3">
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="artist" className="d-block text-center mb-3 mt-3">
          Artist:
        </label>
        <input
          type="text"
          name="artist"
          value={formik.values.artist}
          onChange={formik.handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="genro" className="d-block text-center mb-3 mt-3">
          Genero:
        </label>
        <input
          type="text"
          name="genre"
          value={formik.values.genre}
          onChange={formik.handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="album" className="d-block text-center mb-3 mt-3">
          Album:
        </label>
        <input
          type="text"
          name="album"
          value={formik.values.album}
          onChange={formik.handleChange}
          className="form-control"
        />
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button type="submit" className="btn btn-success btn-lg">
          Add Song
        </button>
      </div>
    </form>
  );
};

export default AddSong;
