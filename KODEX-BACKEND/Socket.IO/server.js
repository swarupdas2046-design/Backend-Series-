import express from 'express'
import {Server} from 'socket.io'
import {createServer} from 'http'



const app = express()

const HttpServer = createServer(app)

const iO = new Server(HttpServer)


iO.on("connection",(socket)=>{
    console.log("a User Connected 🥰");
    // console.log("Socket ----->",socket);
    
    console.log("Socket ----->",socket.id);

    socket.on("tesla",(msg)=>{
        console.log("Tesla Event Receive 🚘");
        console.log("message from Client",msg);
        
        // iO.emit("musk",{
        //     confirmation:"satisfied",
        //     ...msg,
        //     timestamp: new Date()
        // })
        socket.broadcast.emit("musk",{
            confirmation:"satisfied",
            ...msg,
            timestamp: new Date()
        })
    })
    
    socket.on("disconnect",()=>{
        console.log("a User Disconnected 🥲");
    
    })
})



HttpServer.listen(3000,()=>{
    console.log("Server Connected Successfully ✅");
})