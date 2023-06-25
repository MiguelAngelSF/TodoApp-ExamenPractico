import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
},  {
    timestamps: true
});

export default mongoose.model("Task", taskSchema);