import express from 'express';
import { google, signin, signup, signout } from '../controllers/authController.js';


const authRoute = express.Router();


authRoute.post('/signup', signup)

authRoute.post('/signin', signin)

authRoute.post('/googlelogin', google)
authRoute.get('/signout', signout)

export default authRoute