import app from "./app.js";
import {dataBase} from "./db.js";

dataBase();
app.listen(3000)
console.log('Servidor corriendo sobre el puerto', 3000);