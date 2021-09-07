import { Express } from "express";
import data from "../data";
import User from "../models/userModel";

const userRouter = Express.Router();

userRouter.get("/seed", async(req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
}); 

export default userRouter;