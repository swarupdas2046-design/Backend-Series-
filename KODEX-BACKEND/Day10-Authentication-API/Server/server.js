import app from "./src/app.js";
import { Database } from "./src/Config/database.js";
import dotenv from 'dotenv'

dotenv.config()
Database()
app.listen(3000,()=>{
    console.log("Server running successfully on port 3000");
})