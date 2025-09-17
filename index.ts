/* ///////////// IMPORTS ///////////////// */
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"


/* ///////////// CONFIGS ///////////////// */
const app = express();
app.use(express.json())

dotenv.config();




/* /////////// KOPPLA TILL DB //////////// */
async function connectDB() {
    if (!process.env.MONGODB_URI) throw new Error(`❌ Can't find 'MONGODB_URI'`);
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: "Trullo_DB"
    });

    console.log(`✅ Connected to MongoDB`);
};

connectDB().then(() => {
    const PORT = process.env.PORT || 3001;

    app.listen(PORT, () => {
        console.log(`🔵 Server is running on http://localhost:${PORT}`)
    });
}).catch(console.error)