import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        /* Lägga till minimum längd? */
    },

    name: {
        type: String,
        required: true
        /* Minimum längd. */
    },

/*     tasks: {
        type: [Task],
        ref: "Task"
    } */
}, { collection: "users" });

export default mongoose.model("User", UserSchema)