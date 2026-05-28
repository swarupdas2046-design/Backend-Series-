import app from "./src/app.js";
import dotenv from 'dotenv'
import Database from "./src/Config/Database.js";
// ----- dotenv ----
dotenv.config()
Database()
// ----- port ----
const port = process.env.PORT

// ----- server run ----
app.listen(port,()=>{
    console.log(`Server running SuccessFully on port ${port}`);
})