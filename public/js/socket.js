var socket = io(); //Importamos el socket

//escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdio conexión con el servidor');
});

//enviar información
socket.emit('enviarMensaje', {
    usuario: 'César',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});