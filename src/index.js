// require('dotenv').config({path: './env'})
// import crypto from "crypto"
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import app from './app.js'

 // Generate a random accessToken and refresh token secret (key) with 64 characters
// const accessSecret = crypto.randomBytes(32).toString('base64');
// console.log(accessSecret);

// const refreshSecret = crypto.randomBytes(32).toString('base64');
// console.log(refreshSecret);

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log('MONGO db connection failed', err);
})