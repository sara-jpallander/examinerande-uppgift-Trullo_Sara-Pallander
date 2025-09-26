import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        trim: true
    }, 

    status: {
        type: String,
        enum: ["to-do", "in progress", "blocked", "done"],
        default: "to-do"
    },

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },

    finishedAt: {
        type: Date,
        default: null
    }

}, { collection: "tasks", timestamps: true });

export default mongoose.model("Task", TaskSchema);