import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt"
import userModel from "./userModel";

const createUser = async (
    req: Request,
     res: Response,
      next: NextFunction
    ) => {

        const {name, email, password} = req.body;

        if (!name || !email || !password) {
            const error = createHttpError(400, "All Fields are required");
            return next(error);

        }

        const user = await userModel.findOne({email})

        if(user) {
            const error = createHttpError(400, "user already exist.")
            return next(error);
        }

   
const hashedPassword = await bcrypt.hash(password,10);

res.json({ message: "user created"})
}


export { createUser };