
console.log('rodo')
const webSocket = require('ws');
const server = new webSocket.Server({port: 8080});

server.on('connection', (socket) => {
    console.log("Client connected")

    socket.on('message', ( (data, isBinary) => {

        server.clients.forEach((clients) => {
            if (clients.readyState === webSocket.OPEN) {
                clients.send(JSON.stringify(isBinary ? data : data.toString()));
            }
        })
    }))

    socket.on('close', () => {
        console.log('Client disconnected')
    })
})
