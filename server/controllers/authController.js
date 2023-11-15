
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';
import user from "../model/userModel.js";

export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const salt = bcryptjs.genSaltSync(10);
        const hashedPassword = bcryptjs.hashSync(password, salt)
        const newUser = new user({ username, email, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ messsage: 'Data created sucessfully' })

    } catch (error) {
        next(error)
    }

}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {

        const validUser = await user.findOne({ email })
        if (!validUser) return next(errorHandler(404, 'User Not Found'))

        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(401, 'User not found,pass'));

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: hashedPassword, ...rest } = validUser._doc
        //cookies expires after 1 hours 
        const expireDate = new Date(Date.now() + 3600000)
        res.cookie('access_token', token, { httpOnly: true, expires: expireDate }).status(200).json(rest)


    } catch (error) {
        next(error)
    }
}



export const google = async (req, res, next) => {
    try {
        const googleUser = await user.findOne({
            email: req.body.email,
        })

        if (googleUser) {
            const token = jwt.sign(
                { id: googleUser._id },
                process.env.JWT_SECRET
            )
            const { password: hashedPassword, ...rest } = googleUser._doc;
            const expireDate = new Date(Date.now() + 3600000)
            res.cookie('access_token', token, { httpOnly: true, expires: expireDate }).status(200).json(rest)
        }
        else {
            const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
            console.log(generatePassword)
            const salt = bcryptjs.genSaltSync(10);
            const hashedPassword = bcryptjs.hashSync(generatePassword, salt)
            const newUser = new user({
                username: req.body.name.split(" ").join("").toLowerCase() + Math.floor(Math.random() * 10000),
                email: req.body.email,
                profilePicture: req.body.photo,
                password: hashedPassword,
            })
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password: hashedPassword2, ...rest } = newUser._doc;
            const expireDate = new Date(Date.now() + 3600000)
            res.cookie('access_token', token, {
                httpOnly: true,
                expires: expireDate
            }).status(200).json(rest)

        }

    } catch (error) {
        next(error)
    }

}