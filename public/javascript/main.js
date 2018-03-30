var socket = io();

var chatContainerEl = document.getElementById('chatContainer');
var message = document.getElementById('m');

chatContainerEl.addEventListener('submit', function(e) {
    e.preventDefault();
    socket.emit('chat message', message.value);
    message.value = '';
    return false;
});
