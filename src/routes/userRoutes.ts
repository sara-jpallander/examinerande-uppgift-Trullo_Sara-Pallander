/* ///////////// IMPORTS ///////////////// */
import express from "express";
import type { Request, Response } from "express";
import User from "../models/User.js"

const router = express.Router()


/* ///////////// ROUTES ///////////////// */
router.post("/register", createUser); /* Kryptering och validering */
// router.post("/login", userLogin); /* Avkryptering och auth middleware */
// router.get("/:id", getUserById); /* Behöver passera auth för att komma till denna sida? */
// router.get("/", getUsers);
// router.put("/:id", updateUserById); /* Ny kryptering om nytt lösen, validering */
// router.delete("/:id", deleteUserById);


// CREATE USER
async function createUser(req: Request, res: Response) {
    try {
        
    } catch (error) {
    	res.status(500).json({ message: `Internal server error. Failed to create user. ${error}` });
    }
}

export default router;