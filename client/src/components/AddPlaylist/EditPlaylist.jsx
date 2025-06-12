import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../constants/config";

const EditPlaylist = () => {
  const { id } = useParams(); // Obtiene el id de la playlist desde la URL
  const [playlist, setPlaylist] = useState({ name: "", artist: [] });
  const [newSong, setNewSong] = useState(""); // Para agregar nuevas canciones
  const [editingSongIndex, setEditingSongIndex] = useState(null); // Para editar una canción existente
  const [editingSongName, setEditingSongName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(`${server}/api/playlist/${id}`, {
          withCredentials: true,
        });
        setPlaylist(response.data);
      } catch (error) {
        console.log("Error al cargar la playlist:", error);
      }
    };

    fetchPlaylist();
  }, [id]);

  const handleChange = (e) => {
    setPlaylist({ ...playlist, [e.target.name]: e.target.value });
  };

  const handleAddSong = () => {
    setPlaylist({ ...playlist, artist: [...playlist.artist, newSong] });
    setNewSong(""); // Limpiar el input después de agregar la canción
  };

  const handleEditSong = (index) => {
    const updatedArtist = [...playlist.artist];
    updatedArtist[index] = editingSongName;
    setPlaylist({ ...playlist, artist: updatedArtist });
    setEditingSongIndex(null);
    setEditingSongName("");
  };

  const handleDeleteSong = (index) => {
    const updatedArtist = playlist.artist.filter((_, i) => i !== index);
    setPlaylist({ ...playlist, artist: updatedArtist });
  };

  const handleSave = async () => {
    try {
      await axios.put(`${server}/api/playlist/${id}`, playlist, {
        withCredentials: true,
      });
      navigate(`/playlist/${id}`); // Redirige a la página de detalles de la playlist después de guardar
    } catch (error) {
      console.log("Error al guardar la playlist:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow rounded">
        <h1 className="text-center">Editar Playlist</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre de la Playlist
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={playlist.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newSong" className="form-label">
            Agregar Canción
          </label>
          <input
            type="text"
            className="form-control"
            id="newSong"
            value={newSong}
            onChange={(e) => setNewSong(e.target.value)}
          />
          <button className="btn btn-primary mt-2" onClick={handleAddSong}>
            Agregar Canción
          </button>
        </div>
        <ul className="list-group mb-3">
          {playlist.artist.map((song, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {editingSongIndex === index ? (
                <>
                  <input
                    type="text"
                    className="form-control"
                    value={editingSongName}
                    onChange={(e) => setEditingSongName(e.target.value)}
                  />
                  <button
                    className="btn btn-success ms-2"
                    onClick={() => handleEditSong(index)}
                  >
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  <span>{song}</span>
                  <div>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => {
                        setEditingSongIndex(index);
                        setEditingSongName(song);
                      }}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteSong(index)}
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <button
          className="btn btn-success w-30 d-block mx-auto mt-3"
          onClick={handleSave}
        >
          Guardar Cambios
        </button>
      </div>
    </div>
  );
};

export default EditPlaylist;
