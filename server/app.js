const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const publicPath = path.join(__dirname, '..', '/public');

// Static Files Middleware
app.use(express.static(publicPath));

// View Engine Middleware
app.set('views', path.join(__dirname, '..', '/views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

// Listen to Server
const port = 3000;

io.on('connection', (socket) => {
    console.log('User Connected');

    socket.on('chat message', (msg) => {
        console.log(`Message: ${msg}`);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(port, () => { console.log('now listening to port 3000') });