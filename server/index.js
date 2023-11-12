import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";




const app = express();

dotenv.config();

//connect mongodb. 

mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
    console.log('the Mongodb is connected')
})
    .catch((err) => {
        console.log('error ', err)
    })


app.listen(3000, () => [
    console.log('the port is listeningg at 3k!')
])


app.use('/api/user', userRoute)