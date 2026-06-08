import { Server } from 'socket.io'

const voteCount = {
    yes: 0,
    no: 0
}


const initSocket = (httpServer)=>{
    
    const io = new Server(httpServer)

    io.on('connection', (socket)=>{
        console.log('a user connected 🥰')

        socket.on('vote_yes', ()=>{
            voteCount.yes+=1
            io.emit('Vote_Update', voteCount)
        })

        socket.on('vote_no', ()=>{
            voteCount.no+=1
            io.emit('Vote_Update', voteCount)
        })


    
        socket.on('disconnect', ()=>{
            console.log('user disconnected 😭')
        })
    })
    
}

export default initSocket