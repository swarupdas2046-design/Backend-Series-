const app = require("./src/app");
const database = require("./src/config/db");
database()
app.listen(5000,()=>{
    console.log('server run successfully on port 5000');
    
})