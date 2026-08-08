import express from "express";
import passport from "passport";

const authRouter = express.Router();

authRouter.get(
    "/google",
    passport.authenticate("google", { scope: ["profile","email"], session: false }),
);

authRouter.get("/google/callback", passport.authenticate("google", {failureRedirect:"/" , session:false}) ,(req,res)=>{
    console.log("from google:-->",req.user);
    
    return res.send("ok agaya User Data")
})

export default authRouter;
