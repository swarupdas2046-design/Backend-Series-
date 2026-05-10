import app from "./src/app.js";
import DataBase from "./src/Config/database.js";
DataBase()
app.listen(5000,(req,res)=>{
    console.log("Server created successfully on port 5000");
})