import  openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function connected() {
    socket.emit('connected');
}


export {connected}