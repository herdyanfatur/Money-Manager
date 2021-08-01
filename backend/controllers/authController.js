import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
// import { Jwt } from 'jsonwebtoken';

const authController = {};

authController.register = async (req, res) => {
    const {username, email, password} = req.body;

    const userName = await User.findOne({username: username})
    if(userName) {
        return res.status(404).json({
            status: false,
            message: "Username is Already Registered!",
        })
    }
    const emailUser = await User.findOne({email: email})
    if(emailUser) {
        return res.status(404).json({
            status: false,
            message:"Email is Already Registered!"
        })
    }
    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(password, salt);
    const user = new User ({
        username: username,
        email: email,
        password: hashPassword,
    })
    User.create()
    return res.status(201).json({
        status: true,
        message : 'User Registered Successfully!',
    })

}

export default authController;