import express from "express";
import cookie from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import postRouter from "./routes/post.route.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import errorMiddleware from "./middlewares/error.middleware.js";
import { GoogleService } from "./services/auth.service.js";

const app = express();
app.use(express.json());
app.use(cookie());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL,
    },
    async(accessToken, refreshToken, profile, cb) => {
        
        console.log("From App.js:----->",profile);

        const user = await GoogleService(profile)
        
        cb(null,user)
    },
),
);

app.get("/", (req, res) => {
    res.render("index.ejs",{data:[{title:"Polo"},{title:"Kalua"},{title:"LOLO"}]})
})

app.get("/api/forget", (req, res) => {
    res.render("forget.ejs")
})


app.use("/api/auth", authRouter);

app.use("/api/posts", postRouter);

app.use("/fail",(req,res)=>{
    return res.send("Failure...... hua hai")
})



app.use(errorMiddleware);

export default app;
