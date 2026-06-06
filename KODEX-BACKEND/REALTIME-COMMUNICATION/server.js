import express from 'express'

const app = express()

app.use(express.json())

app.get("/sse",(req,res)=>{
    
    res.setHeader("Content-Type","text/event-stream")
    res.setHeader("Cache-Control","no-cache")
    res.setHeader("Connection","keep-alive")

    const IntervalId = setInterval(()=>{
        res.write(`data: some data in Json format \n\n`)
    },1000)

setTimeout(() => {
    clearInterval(IntervalId)
    res.end()
}, 10000);


})



app.listen(3000,()=>{
    console.log("Server Running Successfully on Port 3000");
})