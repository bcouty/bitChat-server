var io = require('socket.io'),
    http = require('http'),
    server = http.createServer(),
    io = io.listen(server);

io.on('connection', function (socket) {
    console.log('User connected');
    socket.on('message', function(response){
        io.emit(response.destination+'message', response.data);
    });
    socket.on('userentered', function(user){
        console.log('entered',user);
        io.emit(user.destination+'userentered', user.user);
    });
    socket.on('userleave', function(user){
        console.log('leave',user);
        io.emit(user.destination+'userleave', user.user);
    });
});

server.listen(3000, function () {
    console.log('Server Started');
});