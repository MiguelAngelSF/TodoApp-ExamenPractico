import mongoose from "mongoose"

export const dataBase = async () => {
    try {
        await mongoose.connect('mongodb://localhost/todoapp')
        console.log("//// Base de datos Conectada ////")
    } catch (error) {
        console.log(error)
    }
};
