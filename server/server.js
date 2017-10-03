const path = require('path');
const http = require('http'); // needed for using socket io
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    var createdAt = Date.now();
    socket.emit('newMessage', {
        from: 'server',
        text: 'Hi everybody',
        createdAt
    });

    // newMessage (server to client) from, text, createdAt
    // createMessage (client to server) from, text

    socket.on('createMessage', (newMessage) => {
        console.log(newMessage);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
