import express from "express";
import cookieParser from "cookie-parser";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import authRouter from "./routes/auth.route.js";
import { authModel } from "./models/auth.model.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async(accessToken, refreshToken, profile, cb) => {
      console.log("profile from Google :--->", profile);

        const name = profile.name.givenName
        const email = profile.emails[0].value

        const isExisted = await authModel.findOne({email})

        if (isExisted) {
            return cb(null,isExisted)
        }

        const newUser = await authModel.create({
            name,
            email,
            provider:"google",
            provider_id:profile.id 
        })


      return cb(null, newUser);
    },
  ),
);

app.get("/",(req,res)=>{
    return res.send("Failed")
})

app.use("/api/auth",authRouter)


export default app;
