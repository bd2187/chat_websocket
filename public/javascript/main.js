"use strict";

// Create websocket connection
var socket = io();

var chatContainerEl = document.getElementById('chatContainer');
var message = document.getElementById('m');
var messages = document.getElementById('messages');

var Messenger = {

    init: function() {
        socket.on('connect', function() {
            console.log('Connected to server');
        });
        
        socket.on('disconnect', function() {
            console.log('Disconnected from server');
        });

        this.handleNewMessage();
    },

    handleNewMessage: function() {
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
    }

};

Messenger.init();