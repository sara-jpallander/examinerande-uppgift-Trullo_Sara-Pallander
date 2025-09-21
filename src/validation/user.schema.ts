import { z } from "zod";

const userValidation = z.object({
    name: z
        .string()
        .min(1, "Name cannot be empty")
        .max(20, "Name cannot exceed 20 characters" ),

    email: z
        .email(),
    
    password: z
        .string()
        .min(8, "Password must contain at least 8 characters")
});

export default userValidation;