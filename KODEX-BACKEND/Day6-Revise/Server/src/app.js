import express from "express";
import cors from "cors";
import { UserModel } from "./model/login.model.js";
import router from "./routes/user.routes.js";
let app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use("/api/users",router)



export default app;
