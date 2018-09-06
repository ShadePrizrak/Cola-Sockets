//Establecer la conexion
var socket = io();

var barLabel = $('small')

var SearchParams = new URLSearchParams(window.location.search);

console.log(SearchParams);

if (!SearchParams.has('escritorio')) {
    windows.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = SearchParams.get('escritorio');
console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    console.log("Hola");
    socket.emit('atenderTicket', { escritorio: escritorio }, function(err, resp) {
        if (err) {
            barLabel.text('...');
        }
        console.log(resp);
        barLabel.text(resp.numero || resp);


    });
});