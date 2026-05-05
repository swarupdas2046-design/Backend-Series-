let express = require('express')

let server = express()

server.get('/',(req,res)=>{
    res.send('Okay Now things are working correctly')
})

server.get('/about',(req,res)=>{
    res.send('This is About Page')
})

server.get('/home',(req,res)=>{
    res.send('This is Home Page')
})

server.listen(3000,()=>{
    console.log('server has created successfully on port 3000');
})