import user from "../model/userModel.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

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