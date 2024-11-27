import Playlist from "../models/playlist.models.js";


const crearPlaylist =  async (req, res) => {
    try {
        const playlist = new Playlist(req.body);
        await playlist.save();
        res.status(201).json({ message: 'Playlist creada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la Playlist' });
    }
}

const obtenerTodasLasPlaylists = async (req, res) => {
    try {
      const playlist = await Playlist.find();
      res.status(200).json(playlist);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener Musicas' });
    }
  }

const eliminarPlaylist = async (req, res) => {
    try {
        const playlist = await Playlist.findByIdAndDelete(req.params.id);
        if (!playlist) {
            return res.status(404).json({ message: 'Playlist no encontrada' });
        }
        res.status(200).json({ message: 'Playlist eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la Playlist' });
    }
}   

const obtenerPlaylistPorId = async (req, res) => {
    try {
        const playlist = await Playlist.findById(req.params.id).populate('artist');
        if (!playlist) {
            return res.status(404).json({ message: 'Playlist no encontrada' });
        }
        res.status(200).json(playlist);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la Playlist' });
    }
}

const editarPlaylist = async (req, res) => {
    try {
      const updatedPlaylist = await Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedPlaylist);
    } catch (error) {
      res.status(500).send("Error al actualizar la playlist");
    }
  };

export { crearPlaylist, obtenerTodasLasPlaylists, eliminarPlaylist, obtenerPlaylistPorId, editarPlaylist };