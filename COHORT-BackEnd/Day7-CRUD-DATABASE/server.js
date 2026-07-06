const app = require("./src/app");
const Database = require("./src/config/db");
require("dotenv").config()

await Database()

const port = Number(process.env.PORT) || 5000

app.listen(port,()=>{
    console.log(`server running successfully on port`,port);
})