import user from "../model/userModel.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt)
    const newUser = new user({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json({ messsage: 'Data created sucessfully' })

    } catch (error) {
        next(error)
    }

}