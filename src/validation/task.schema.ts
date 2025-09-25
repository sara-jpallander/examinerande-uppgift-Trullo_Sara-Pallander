import { z } from "zod";

const taskValidation = z.object({
    title: z
    .string()
    .trim(),

    description: z
    .string()
    .trim()
    .optional(),

    status: z
    .enum(["to-do", "in progress", "blocked", "done"]).default("to-do"),

    assignedTo: z
    .string()
    .optional(),

    finsihedAt: z
    .date()
    .optional()
    
})

export default taskValidation;