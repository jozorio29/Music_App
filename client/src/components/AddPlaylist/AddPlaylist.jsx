import axios from "axios";
import React, { useEffect, useState } from "react";
import SongListWithCheck from "./SongListWithCheck";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { server } from "../../constants/config";

const AddPlaylist = ({ onPlaylistCreated }) => {
  const [songs, setSongs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const { data } = await axios.get(`${server}/api/musicas`, {
          withCredentials: true,
        });
        setSongs(data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("Playlist name is required"),
    artist: Yup.array()
      .of(Yup.string())
      .min(1, "At least one artist is required"), // Validación para un array de nombres de canciones
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      artist: [], // Campo para almacenar un array de nombres de canciones
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(`${server}/api/add-playlist`, values, {
          withCredentials: true,
        });
        onPlaylistCreated();
        navigate("/playlist");
      } catch (error) {
        console.error("Error creating playlist:", error);
      }
    },
  });

  const handleSongSelect = (selected) => {
    const selectedSongNames = selected.map((song) => song.title); // Mapea las canciones seleccionadas a sus nombres
    formik.setFieldValue("artist", selectedSongNames); // Actualiza Formik con el array de nombres de canciones
  };

  return (
    <div>
      <h1 className="text-center mt-3 mb-3">Create New Playlist</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name" className="d-block text-center mb-3">
          Playlist Name:
        </label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-danger text-center">{formik.errors.name}</div>
        )}

        <SongListWithCheck songs={songs} handleSongSelect={handleSongSelect} />

        {formik.touched.artist && formik.errors.artist && (
          <div className="text-danger text-center mt-3">
            {formik.errors.artist}
          </div>
        )}

        <div className="text-center mt-3">
          <button type="submit" className="btn btn-success btn-lg">
            Create Playlist
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlaylist;
