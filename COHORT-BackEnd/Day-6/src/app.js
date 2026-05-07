let server = require('express')

let app = server()

app.get('/',(req,res)=>{
    res.send("Ab hoga Comeback")
})

module.exports = app
        