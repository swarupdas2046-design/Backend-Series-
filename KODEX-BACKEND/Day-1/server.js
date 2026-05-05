let root = require('http')

let server = root.createServer((req,res)=>{
    res.end('Yes now i understand Completely')
})

server.listen(3000,()=>{
    console.log('Server Run Successfully on Port 5000');
})
