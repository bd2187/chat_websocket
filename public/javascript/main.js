var socket = io();

var chatContainerEl = document.getElementById('chatContainer');
var message = document.getElementById('m');
var messages = document.getElementById('messages');

chatContainerEl.addEventListener('submit', function(e) {
    e.preventDefault();
    socket.emit('chat message', message.value);
    message.value = '';
    return false;
});

socket.on('chat message', function(msg) {
    var chatMessage = document.createElement('li');
    var textNode = document.createTextNode(msg);

    chatMessage.appendChild(textNode);
    messages.appendChild(chatMessage);    
});
