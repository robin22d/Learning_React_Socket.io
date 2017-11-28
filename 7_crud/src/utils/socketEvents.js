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

function updateName(newAllNames){
    socket.emit('updatingName', newAllNames);
}

function deleteName(newAllNames){
    socket.emit('deleteName', newAllNames);
}

export {connected, sendNames, getNames, updateName, deleteName}