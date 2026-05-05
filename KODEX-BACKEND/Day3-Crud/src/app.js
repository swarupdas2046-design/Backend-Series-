let express = require('express')

let app = express()

// middle ware for accepting json data in express  
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('This is The first page of this website')
})





module.exports = app