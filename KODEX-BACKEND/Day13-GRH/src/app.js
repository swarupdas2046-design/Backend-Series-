import express from "express";
import cookie from "cookie-parser";
import Router from "./Routes/auth.routes.js";
import errorMiddleware from "./Middleware/error.middleware.js";
const app = express();
app.use(express.json());
app.use(cookie());

app.use("/api/auth", Router);

app.use(errorMiddleware);
export default app;
