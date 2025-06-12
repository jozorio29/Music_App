import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../constants/config";

const PlaylistDetails = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(`${server}/api/playlist/${id}`);
        setPlaylist(response.data);
        setError(null);
      } catch (error) {
        setError("No se pudo cargar la playlist. Intenta de nuevo más tarde.");
      }
    };

    fetchPlaylist();
  }, [id]);

  if (error) {
    return <p className="text-center text-danger">{error}</p>;
  }

  if (!playlist) {
    return <p className="text-center">Cargando...</p>;
  }

  const handleEdit = () => {
    navigate(`/edit-playlist/${id}`);
  };

  const artists = Array.isArray(playlist.artist) ? playlist.artist : [];

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="card-title">
              {"Album: " + (playlist.name || "Nombre de la playlist")}
            </h1>
            <button className="btn btn-warning" onClick={handleEdit}>
              Editar
            </button>
          </div>
          <div className="card-text">
            <p>
              <strong>Canciones:</strong>
            </p>
            <ul>
              {artists.length > 0 ? (
                artists.map((artist, index) => <li key={index}>{artist}</li>)
              ) : (
                <li>No hay artistas en esta playlist</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetails;
