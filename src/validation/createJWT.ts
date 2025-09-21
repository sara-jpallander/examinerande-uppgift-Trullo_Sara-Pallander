import jwt from "jsonwebtoken"
import type { Types } from "mongoose";

interface UserInput {
  name: string,
  email: string,
  password: string,
  _id: Types.ObjectId
}

const createJWT = (user: UserInput): string => {
  return jwt.sign(
    { id: user._id.toString() }, process.env.JWT_SECRET as string, { expiresIn: "48h" }
  );
};

export default createJWT;