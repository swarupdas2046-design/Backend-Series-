import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthModel } from "../Models/auth.model.js";
import { UserLogin, UserRegister } from "../Controllers/auth.controller.js";
const Routes = express.Router();


// ----- User register API ----
Routes.post("/register", UserRegister);

// ----- User Login Api -----
Routes.post("/login", UserLogin);



export default Routes;
