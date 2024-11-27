import express from 'express';
import { crearMusicas, obtenerTodasLasMusicas, eliminarMusicas } from '../controllers/music.controllers.js';
import { crearPlaylist, obtenerTodasLasPlaylists, eliminarPlaylist, obtenerPlaylistPorId, editarPlaylist } from '../controllers/playlist.controllers.js';


const router = express.Router();


router.get('/musicas', obtenerTodasLasMusicas);
router.get('/playlist', obtenerTodasLasPlaylists);
router.get('/playlist/:id', obtenerPlaylistPorId);
router.post('/add-playlist', crearPlaylist);
router.post('/add-musicas', crearMusicas);
router.delete('/musicas/:id', eliminarMusicas);
router.delete('/playlist/:id', eliminarPlaylist);
router.put('/playlist/:id', editarPlaylist);


export default router;