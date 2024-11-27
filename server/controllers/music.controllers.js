import Musica from "../models/music.models.js";

const crearMusicas =  async (req, res) => {

    try {
        const musica = new Musica(req.body);
        await musica.save();
        res.status(201).json({ message: 'Musica creada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la Musica' });
    }
}

const obtenerTodasLasMusicas = async (req, res) => {
    try {
      const musicas = await Musica.find();
      res.status(200).json(musicas);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener Musicas' });
    }
  }

const eliminarMusicas = async (req, res) => {
    try {
        const musica = await Musica.findByIdAndDelete(req.params.id);
        if (!musica) {
            return res.status(404).json({ message: 'Musica no encontrada' });
        }
        res.status(200).json({ message: 'Musica eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la musica' });
    }
}


export { crearMusicas, obtenerTodasLasMusicas, eliminarMusicas };