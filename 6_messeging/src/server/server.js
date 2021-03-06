const io = require('socket.io')();

var AllNames = [{id: '1', name: 'robin'}, {id: '2', name: 'james'}];

io.on('connection', (client) => {

    client.on('connected', () => {
        console.log("Connected!");
    });

    client.on('sendingNames', (id, name) => {
        console.log("id: ", id);
        console.log("name: ", name);
        AllNames.push({id: id, name: name});
        console.log("all names: ", AllNames);
    });

    client.on('checkingNames', (interval) => {
        setInterval(() => {
            console.log(AllNames);
            client.emit('returningNames', AllNames);
        }, interval)
    })

});

const port = 8000;
io.listen(port);
console.log('Listening on port ' + port);