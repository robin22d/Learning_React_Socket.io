const io = require('socket.io')();

let messages = [];

io.on('connection', (client) => {

    client.on('connected', () => {
        console.log("Connected!");
    });

});

const port = 8000;
io.listen(port);
console.log('Listening on port ' + port);