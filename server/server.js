import express from "express";
import cors from "cors";
import router from "./routes/music.routes.js";
import conectarDB from "./config/music.config.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

conectarDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})