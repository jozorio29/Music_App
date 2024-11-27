import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PlaylistAgregadas = ({ playlist, onDeletePlaylist }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para manejar el término de búsqueda

  const handleDeletePlaylist = async (playlistId) => {
    try {
      await axios.delete(`http://localhost:8080/api/playlist/${playlistId}`);
      onDeletePlaylist(playlistId); // Llama a la función para actualizar la lista de playlists
    } catch (error) {
      console.log("Error al eliminar la playlist:", error);
    }
  };

  // Función para filtrar playlists basado en el término de búsqueda
  const filteredPlaylists = playlist.filter((pl) =>
    pl.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-center">Playlists</h1>

      {/* Input para buscar playlists */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Serch playlist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        <ul className="list-group card p-3 mt-3 shadow rounded">
          {filteredPlaylists.length === 0 ? (
            <p className="text-center">No hay playlists creadas.</p>
          ) : (
            filteredPlaylists.map((playlist) => (
              <li
                key={playlist._id}
                className="list-group-item d-flex justify-content-between align-items-center"
                style={{ cursor: "pointer" }}
              >
                <Link
                  to={`/playlist/${playlist._id}`}
                  className="text-primary me-1"
                >
                  {playlist.name}
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeletePlaylist(playlist._id)}
                >
                  Eliminar
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default PlaylistAgregadas;
