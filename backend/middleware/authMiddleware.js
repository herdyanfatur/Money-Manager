import User from '../models/userModel.js';
import Jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

const authMiddleware = {};

authMiddleware.authorize = async (req, res, next) => {
    try {
        const token = req.header('Authorization');

        if (!token) {
            return res.status(401).json({
                status: false,
                message: 'Anda Harus Login Terlebih Dahulu'
            })
        }

        const decode = Jwt.verify(token, process.env.SECRET)
        req.id = decode.id
        console.log(req.id);
        next()
    } catch (error) {
        console.error(error.stack)
    }
}

authMiddleware.register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        const userName = await User.findOne({ username: username })
        if (userName) {
            return res.status(404).json({
                position: "middleware",
                status: false,
                message: "Username is Already Registered!",
            })
        }
        const emailUser = await User.findOne({ email: email })
        // console.log(isValidEmail(email));
        if (!isValidEmail(email)) {
            return res.status(404).json({
                position: "middleware",
                status: false,
                message: "Email is Invalid!"
            });
        } else if (emailUser) {
            return res.status(404).json({
                position: "middleware",
                status: false,
                message: "Email is Already Registered!"
            });
        } else if (!passValidator(password)) {
            return res.status(404).json({
                        position: "middleware",
                        status: false,
                        message: "A minimum 8 characters password contains a combination of letter and number are required.!"
                    });
        } else {
            next()
        }
    } catch (error) {
        console.error(error.stack)
    }
}

// validator email
function isValidEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!!email && typeof email === 'string'
        && email.match(emailRegex)) {
        console.log('valid bro');
        return true;
    } else {
        console.log('ínvalid bro');
        return false;
    }
}

function passValidator(password) {
    // minial 8 karakter, 1 huruf dan 1 angka
    const passRegex = /^(?=.*[0-9])(?=.*[a-z]).{8,32}$/;

    if(password.match(passRegex)) {
        console.log('Password Ok !');
        return true;
    } else {
        console.log(`Password not Oke ! ${password}`);
        return false;
    }
    
}


export default authMiddleware;