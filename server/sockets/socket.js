const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control')

const ticketControl = new TicketControl();

io.on('connection', (cliente) => {

    cliente.on('siguienteTicket', (data, callback) => {
        let Siguiente = ticketControl.Siguiente();
        console.log('Enviando siguiente ticket', Siguiente);
        callback({ Siguiente });
    });

    //Emitir un evento Estado Actual

    cliente.on('Actual', (data, callback) => {
        let Actual = ticketControl.UltimoTicket();
        let Ultimos = ticketControl.Ultimos();
        console.log('Enviando ultimo ticket');
        callback({ Actual, Ultimos });
    });

    cliente.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'El escritorio es necesario'
            })
        };
        let atenderTicket = ticketControl.AtenderTicket(data.escritorio);

        let Ultimos = ticketControl.Ultimos();
        cliente.broadcast.emit('NuevaAtencion', Ultimos);
        console.log("Nuevo");
        callback(null, atenderTicket);

    });

});