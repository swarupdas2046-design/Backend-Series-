import app from "./src/app.js";
import Database from "./src/Config/Database.js";
Database()
app.listen(3000,()=>{
    console.log("Server running Successfully on port 3000");
})