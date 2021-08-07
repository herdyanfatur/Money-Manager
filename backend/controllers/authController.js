import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();


const authController = {};

authController.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const dataUser = await User.findOne({$or:[{email: email}, {username: email}]})

        if(dataUser) {
            // email found
            const passwordUser = await bcrypt.compare(password, dataUser.password)
            if(passwordUser) {
                // password correct
                const data = {
                    id: dataUser._id,
                    username: dataUser.username
                }
                console.log(data);
                const token = await Jwt.sign(data, process.env.SECRET);
                return res.status(200).json({
                message: `Hello ${data.username}`,
                token: token
                })
            } else{
                return res.status(404).json({
                    status: false,
                    message: 'Password salah!!'
                })
            }
        } else {
            return res.status(404).json({
                status: false,
                message: 'Email atau Password Salah!!'
            })
        }
    } catch (error) {
        
    }
}


authController.register = async (req, res) => {
    const {username, email, password} = req.body;

    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(password, salt);
    const newUser = new User ({
        username: username,
        email: email,
        password: hashPassword,
    })
    newUser.save()
    return res.status(201).json({
        position: 'controller',
        status: true,
        message : 'User Registered Successfully!',
    })

}

export default authController;