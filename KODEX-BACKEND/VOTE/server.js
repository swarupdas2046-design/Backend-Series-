import app from "./src/app.js";
import initSocket from "./src/sockets/socket.server.js";
import { createServer } from 'http'
initSocket()

const httpServer = createServer(app)

initSocket(httpServer)


httpServer.listen(5000, () => {
    console.log("server created on port 5000");
});