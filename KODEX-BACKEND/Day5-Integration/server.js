let app = require('./src/app');
const DataBase = require('./src/config/db');
DataBase()
app.listen(5000,()=>{
    console.log('Server running Successfully on port 5000');
})