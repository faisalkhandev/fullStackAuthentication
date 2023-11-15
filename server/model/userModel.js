import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    },
    profilePicture: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/20/20698.png",
    }
}, { timestamps: true })


const user = mongoose.model('User', userSchema)

export default user;