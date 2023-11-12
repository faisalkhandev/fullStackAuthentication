import user from "../model/userModel.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new user({ username, email, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json({ messsage: 'Data created sucessfully' })

    } catch (error) {

        res.status(500).json("it might have duplicate or error")
    }

}