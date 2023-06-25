import app from "./app.js";
import {dataBase} from "./db.js";
import { PORT } from "./config.js";

dataBase();
app.listen(PORT)
console.log('Servidor corriendo sobre el puerto', PORT);