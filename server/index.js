import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";


const app = express();
dotenv.config();


//connect mongodb. 

mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
    console.log('the Mongodb is connected')
})
    .catch((err) => {
        console.log('error ', err)
    })



app.use(express.json());

app.listen(3000, () => [
    console.log('the port is listeningg at 3k!')
])


app.use('/api/user', userRoute);

app.use('/api/auth', authRoute)

app.use('/api/auth', authRoute)

app.use('/api/auth/', authRoute)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        error: message,
        statusCode: statusCode

    })
})