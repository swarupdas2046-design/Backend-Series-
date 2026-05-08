import express from "express";
import { getverifyControllers, registerControllers } from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/getData", registerControllers);
router.get('/get',getverifyControllers)


export default router;
