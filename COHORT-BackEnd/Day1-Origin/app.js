// let CatMe = require('cat-me')

// console.log(CatMe())

// let express = require('express')

// let app = express((req,res)=>{
//     res.end('okkay ji ')
    
// })

// app.listen(3000,()=>{
//     console.log('server run on port 3000');
    
// })

let http = require('http')

let app = http.createServer((req,res)=>{
    res.end('hello i am here for you')
})

app.listen(5000,()=>{
    console.log('server run on port 5000')
})