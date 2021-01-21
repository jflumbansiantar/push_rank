const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.render('chat.ejs');
})

io.sockets.on('connection', function (socket) {
    socket.on('name', function (name) {
        socket.name = name;
        io.emit('is_online', 'blue <i>' + socket.name + ' came in. </i>')
    })
    socket.on('disconnect', function (name) {
        io.emit('is_online', 'red <i>' + socket.name + ' left. </i>')
    })
    socket.on('chat_message', function (message) {
        io.emit('chat_message', '<strong>' + socket.name + '</strong> : ' + message);
    })
})

const PORT = 3000;
app.listen(PORT, () =>
    console.log(`Listening to ${PORT}`)
)

