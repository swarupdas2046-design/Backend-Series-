import app from "./src/app.js";
import dotenv from 'dotenv'
import Database from "./src/Config/Db.js";
dotenv.config()
Database()
const port = process.env.PORT

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})