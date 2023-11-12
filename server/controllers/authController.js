import user from "../model/userModel.js";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new user({ username, email, password });

    try {
        await newUser.save();
        res.status(201).json({ messsage: 'Data created sucessfully' })

    } catch (error) {

        res.status(500).json("it might have duplicate or error")
    }

}