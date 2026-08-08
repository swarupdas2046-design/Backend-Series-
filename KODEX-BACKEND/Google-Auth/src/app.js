import express from 'express'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import authRouter from './routes/auth.route.js';

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())



passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
},(accessToken, refreshToken, profile, cb)=>{
    console.log("profile from Google: ----->",profile);

    return cb(null,profile)
    
}))

app.get("/",(req,res)=>{
return  res.send("This is response")
})

app.use("/api/auth",authRouter)

export default app