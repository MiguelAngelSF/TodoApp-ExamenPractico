import mongoose from "mongoose"
import { DB } from "./config.js";

export const dataBase = async () => {
    try {
        await mongoose.connect(DB)
        console.log("//// Base de datos Conectada ////")
    } catch (error) {
        console.log(error)
    }
};
