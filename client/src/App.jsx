import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import PlaylistAgregadas from "./components/Playlist/PlaylistAgregadas";
import AddSong from "./components/AddSong/AddSong";
import AddPlaylist from "./components/AddPlaylist/AddPlaylist";
import Songs from "./components/Songs/Songs";
import axios from "axios";
import { useState, useEffect } from "react";
import PlaylistDetails from "./components/Playlist/PlaylistDetails";
import EditPlaylist from "./components/AddPlaylist/EditPlaylist";
import { server } from "./constants/config";

const App = () => {
  const [lista, setLista] = useState([]);

  const fetchLista = async () => {
    try {
      const response = await axios.get(`${server}/api/playlist`);
      setLista(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePlaylist = (playlistId) => {
    setLista(lista.filter((playlist) => playlist._id !== playlistId));
  };

  useEffect(() => {
    fetchLista();
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column justify-content-start align-items-center mt-5">
        <div
          className="card p-4 shadow rounded w-100"
          style={{ maxWidth: "900px", minHeight: "50vh" }}
        >
          <Nav />
          <div className="mt-4">
            <Routes>
              <Route path="/" element={<Songs />} />
              <Route
                path="/playlist"
                element={
                  <PlaylistAgregadas
                    playlist={lista}
                    onDeletePlaylist={handleDeletePlaylist}
                  />
                }
              />
              <Route path="/playlist/:id" element={<PlaylistDetails />} />
              <Route path="/add-musicas" element={<AddSong />} />
              <Route
                path="/add-playlist"
                element={<AddPlaylist onPlaylistCreated={fetchLista} />}
              />
              <Route path="/edit-playlist/:id" element={<EditPlaylist />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
