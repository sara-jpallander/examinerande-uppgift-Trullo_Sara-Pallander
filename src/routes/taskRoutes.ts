/* ///////////// IMPORTS ///////////////// */
import express from "express";
import type { Request, Response } from "express";
import Task  from "../models/Task.js"
import User from "../models/User.js"
import taskValidation from "../validation/task.schema.js";
import mongoose from "mongoose";

const router = express.Router();

export default router


/* ///////////// ROUTES ///////////////// */
router.post("/create", createTask);
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTaskById);
router.delete("/:id", deleteTaskById);

// CEATE TASK 
async function createTask(req: Request, res: Response) {
    try {
        // Validera task input
        const parsed = taskValidation.safeParse(req.body);
        
        if (!parsed.success) {
            return res.status(400).json({ error: "Validation failed. ", details: parsed.error });
        };

        // Skapa och spara task i db
        const task = await Task.create(req.body);
        res.status(201).json({ message: "Task created: ", data: task });
    } catch (error) {
        res.status(500).json({ message: `Internal server error. Failed to create task. ${error}` });
    }
};

// GET ALL TASKS
async function getTasks(req: Request, res: Response) {
    try {
        const tasks = await Task.find();

        if (!tasks) {
            return res.status(404).json({ message: "The tasks you're trying to fetch could not be found" })
        };

        res.status(200).json({ message: "Fetched all tasks: ", data: tasks });
    } catch (error) {
        res.status(500).json({ error: `Internal server error. Failed to get task. ${error}` });        
    };
}


// GET TASK BY ID
async function getTaskById(req: Request, res: Response) {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task could not be found" })
        };

        res.status(200).json({ message: "Fetched task: ", data: task });
    } catch (error) {
        res.status(500).json({ error: `Internal server error. Failed to fetch tasks. ${error}` });        
    };
}

async function updateTaskById(req: Request, res: Response) {
    try {
        let { title, description, status, assignedTo } = req.body;
        const input: any = { title, description, status, assignedTo };

        // Lägg till finishedAt om status ändras till "done"
        if (status === "done") {
            input.finishedAt = Date();
        }

        // Assigna använda till task
        if (assignedTo) {

            //const convertedID = new mongoose.Types.ObjectId(req.body.assignedTo)

            if (!mongoose.Types.ObjectId.isValid(assignedTo)) {
                return res.status(400).json({ message: "Invalid user ID format" });
            }

            const user = await User.findById(assignedTo);

            if (!user) {
                return res.status(404).json({ error: "User could not be found." })
            }

        };

        // Validera input från body, partial ifall bara vissa fält anges
        const parsed = taskValidation.partial().safeParse(input);
        
        if (!parsed.success) {
            return res.status(400).json({ error: "Validation failed. ", details: parsed.error });
        };
        
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, input, { new: true })

        res.status(200).json({ message: "Updated task: ", data: updatedTask })
    } catch (error) {
        res.status(500).json({ error: `Internal server error. Failed to update task. ${error}` });        
    }
};


// DELETE TASK
async function deleteTaskById(req: Request, res: Response) {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({ error: "The task you're trying to delete does not exist." })
        };

        res.status(200).json({ message: "Task deleted: ", data: task });
    } catch (error) {
        res.status(500).json({ error: `Internal server error. Failed to delete task. ${error}` });
    };
};