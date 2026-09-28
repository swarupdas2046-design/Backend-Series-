import express from "express";
import cookie from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import postRouter from "./routes/post.route.js";

const app = express();
app.use(express.json());
app.use(cookie());

app.use(express.urlencoded({extended:true}))

app.use("/api/auth",authRouter)
app.use("/api/posts",postRouter)


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        message,
    })
})



export default app