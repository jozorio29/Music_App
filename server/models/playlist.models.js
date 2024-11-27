import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    artist: [{ type: String, required: true }],
    
});

const Playlist = mongoose.model('Playlist', playlistSchema);

export default Playlist;