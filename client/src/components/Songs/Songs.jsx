import axios from "axios";
import React, { useEffect, useState } from "react";
import SongList from "./SongList";
import { server } from "../../constants/config";

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(`${server}/api/musicas`, {
          withCredentials: true,
        });
        setSongs(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSongs();
  }, []);

  const eliminarCancion = async (id) => {
    try {
      await axios.delete(`${server}/api/musicas/${id}`, {
        withCredentials: true,
      });
      setSongs(songs.filter((song) => song._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center mt-3 mb-3">All Songs</h1>
      <SongList songs={songs} eliminarCancion={eliminarCancion} />
    </div>
  );
};

export default Songs;
