// server ko start kana 
// database se connect karna


let app = require('./src/app')
let mongoose = require('mongoose')

function ConnectToDb() {
    mongoose.connect("mongodb+srv://Swarup:nA8BJAsj3NzdKNDY@cluster0.1bc9dus.mongodb.net/cohort")
    .then(()=>{
        console.log("Connected to Database");
    })
    
}
ConnectToDb()
app.listen(3000,()=>{
    console.log('Server running on port 3000');
})