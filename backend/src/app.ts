import "dotenv/config";
import express from "express";
import cors from "cors";
import {router} from "./routes"
import db from "./config/mongo"
import {pool} from "./config/mysql"
import path from "path";
import morgan, {Morgan} from 'morgan'

const app = express();

//Settings
const PORT = process.env.PORT || 3003;

//Middelwares
app.use(cors());
app.use(express.json());
app.use(router);
app.use(morgan('dev'))

//Carpeta donde se guardaran archivos publicos (imagenes)
app.use('/uploads',express.static(path.resolve('uploads')))

db().then(() => console.log("***BDD CONECTADA***"))
app.listen(PORT , () => {
    console.log(`***APLICACION CORRIENDO EN PUERTO ${PORT}`);
    
})
