import  openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function connected() {
    socket.emit('connected');
}

function sendNames(id, name) {
    socket.emit('sendingNames', id, name);
}

function getNames(callback){
    socket.emit('checkingNames', 1000);
    socket.on('returningNames', allNames => callback(null, allNames));
}
export {connected, sendNames, getNames}