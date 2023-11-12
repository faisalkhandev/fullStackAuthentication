import express from "express";
import userController from "../controllers/userControllere.js";


const userRoute = express.Router()


userRoute.get('/', userController)


export default userRoute