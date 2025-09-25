import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String
    }, 

    status: {
        type: String,
        enum: ["to-do", "in progress", "blocked", "done"],
        default: "to-do"
    },

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    finishedAt: {
        type: Date
    }

}, { collection: "tasks", timestamps: true });

export default mongoose.model("Task", TaskSchema);