
import { errorHandler } from '../utils/error.js';
import user from './../model/userModel.js';
import bcryptjs from 'bcryptjs'

const userController = (req, res) => {
    res.json({
        message: 'hello userSaab'
    })
}

//update user

export const updateUser = async (req, res, next) => {

    if (req.user.id !== req.params.id) {

        return next(errorHandler(401, 'You can update your account only'))
    }

    try {
        if (req.body.password) {
            req.body.passwrod = bcryptjs.hashSync(req.body.password, 10)
        }

        const updatedUser = await user.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    profilePicture: req.body.profilePicture,

                },
            },
            { new: true }
        );

        const { password, ...rest } = updatedUser._doc
        res.status(200).json(rest)

    } catch (error) {
        next(error)
    }

}

export default userController