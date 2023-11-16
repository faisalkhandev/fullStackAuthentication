import express from "express";
import userController, { updateUser } from "../controllers/userControllere.js";
import { verifyToken } from "../utils/verifyToken.js";


const userRoute = express.Router()


userRoute.get('/', userController)

userRoute.post('/update/:id', verifyToken, updateUser)


export default userRoute