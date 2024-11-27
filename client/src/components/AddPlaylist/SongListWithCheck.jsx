import React, { useState } from "react";

const SongListWithCheck = ({ songs, handleSongSelect }) => {
  const [selectedSongs, setSelectedSongs] = useState([]);

  const handleCheckboxChange = (song, isChecked) => {
    let updatedSelectedSongs;
    if (isChecked) {
      updatedSelectedSongs = [...selectedSongs, song];
    } else {
      updatedSelectedSongs = selectedSongs.filter(
        (selectedSong) => selectedSong._id !== song._id
      );
    }
    setSelectedSongs(updatedSelectedSongs);
    handleSongSelect(updatedSelectedSongs); // Envía las canciones seleccionadas al padre
  };

  const eliminarCancion = (songId) => {
    const updatedSelectedSongs = selectedSongs.filter(
      (song) => song._id !== songId
    );
    setSelectedSongs(updatedSelectedSongs);
    handleSongSelect(updatedSelectedSongs); // Actualiza las canciones seleccionadas
  };

  return (
    <div>
      <ul className="list-group card p-3 mt-3 shadow rounded">
        {songs.map((song) => (
          <li
            key={song._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className="form-check-input me-2"
                onChange={(e) => handleCheckboxChange(song, e.target.checked)}
              />
              <span className="text-primary me-1"> {song.title} </span>
              by {song.artist}
              <span className="ms-1">({song.genre})</span>
            </div>
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

export default SongListWithCheck;
