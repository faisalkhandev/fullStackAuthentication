import express from 'express';
import { google, signin, signup } from '../controllers/authController.js';


const authRoute = express.Router();


authRoute.post('/signup', signup)

authRoute.post('/signin', signin)

authRoute.post('/googlelogin', google)

export default authRoute