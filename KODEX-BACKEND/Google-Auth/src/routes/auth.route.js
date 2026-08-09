import express from "express";
import passport from "passport";
import jwt from 'jsonwebtoken'

const authRouter = express.Router();

authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  }),
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }),
  (req, res) => {
    console.log("client data:---->", req.user);

    const Token = jwt.sign({id:req.user},process.env.JWT_SECRET,{
        expiresIn:"1H"
    })

    res.cookie("token",Token)
    


    return res.send("OKAY DATA ARRIVED SUCCESSFULLY");
  },
);

export default authRouter;
