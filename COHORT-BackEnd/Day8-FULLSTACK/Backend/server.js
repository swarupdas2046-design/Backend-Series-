import app from "./src/app.js";
import DataBase from "./src/Config/db.js";
const port = Number(process.env.PORT) || 5000
await DataBase()
app.listen(port,()=>{
    console.log("Server running successfully on port",port);
})