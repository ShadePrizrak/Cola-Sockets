var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

socket.emit('Actual', null, function(resp) {
    console.log('Ultimo ticket', resp.Actual);
    label.text(resp.Actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(resp) {
        console.log('Siguiente ticket', resp.Siguiente);
        label.text(resp.Siguiente);
    });
});