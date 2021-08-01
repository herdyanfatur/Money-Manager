import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


import dotenv from "dotenv";
dotenv.config();


import authRoute from './routers/authRoute.js';
// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/auth', authRoute);

const connection = mongoose.connect;

const uri = process.env.ATLAS_URI;
connection(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    () =>
        console.log("Database Connected"));
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    console.log('set-up successed');
});