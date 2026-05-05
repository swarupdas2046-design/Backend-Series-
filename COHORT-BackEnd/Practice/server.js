// let server = require('http')

// let app = server.createServer((req,res)=>{
//     res.end('Server created')
// })

// app.listen(3000,()=>{
//     console.log('server run successfully on port 3000');
// })

let express = require('express')

let app = express()

app.get('/',(req,res)=>{
    res.send('Hello i am Swarup Das and You know me Perfectly')
})
app.get('/home',(req,res)=>{
    res.send('This is my home page of this Website')
})
app.get('/about',(req,res)=>{
    res.send('This is about page of this Website')
})

app.listen(3000,()=>{
    console.log('Server Run Successfully on Port 3000');
})
