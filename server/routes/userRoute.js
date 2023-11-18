import express from "express";
import userController, { deleteUser, updateUser } from "../controllers/userControllere.js";
import { verifyToken } from "../utils/verifyToken.js";


const userRoute = express.Router()


userRoute.get('/', userController)

userRoute.post('/update/:id', verifyToken, updateUser)

userRoute.post('/delete/:id', verifyToken, deleteUser)


export default userRoute