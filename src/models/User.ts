import mongoose, { type InferSchemaType, type ObjectId } from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        /* Lägga till minimum längd i validering?*/
    },

    name: {
        type: String,
        required: true,
        trim: true
        /* Minimum längd. */
    }

}, { collection: "users" });

export default mongoose.model("User", UserSchema)
export type UserType = InferSchemaType<typeof UserSchema> & {_id: ObjectId}