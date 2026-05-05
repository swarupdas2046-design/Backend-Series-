let server = require('express');
let app = server()
app.use(server.json())
let data = [];

app.post('/data',(req,res)=>{
    console.log(req.body);
    data.push(req.body)
    res.send('Successful Shivani')
})

app.get('/getData',(req,res)=>{
    res.send(data)
    // res.send('server created successfully on port 3000');
 
})

app.listen(3000,()=>{
    console.log('server created successfully on port 3000');
})