import React from "react";

const SongList = ({ songs, eliminarCancion }) => {
  return (
    <div>
      <ul className="list-group card p-3 mt-3 shadow rounded">
        {songs.map((song, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <p className="mb-0">
              <span className="text-primary me-1"> {song.title} </span> 
              by {song.artist} 
              <span className="ms-1">({song.genre})</span>
            </p>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => eliminarCancion(song._id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
