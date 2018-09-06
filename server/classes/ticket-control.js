const fs = require('fs');

//Declaracion de clases
class Ticket {
    constructor(numero, escritorio) {
        this.numero = numero;
        this.escritorio = escritorio;
    }
};


class TicketControl {
    constructor() {
        let data = require('../data/data.json');
        this.ultimo = 0;
        this.hoy = new Date().getDate();
        this.tickets = [];
        this.Ultimos4 = [];

        if (data.hoy === this.hoy) {
            this.ultimo = data.ultimo;
            this.tickets = data.tickets;
            this.Ultimos4 = data.Ultimos4;
        } else {
            this.ReiniciarConteo();
        }

    };

    Siguiente() {
        this.ultimo = this.ultimo + 1;
        //Creamos un nuevo ticket con el ultimo ticket
        let ticket = new Ticket(this.ultimo, null);
        this.tickets.push(ticket);

        this.GrabarArchivo();
        return `Ticket ${this.ultimo}`;
    };

    ReiniciarConteo() {
        this.ultimo = 0;
        this.tickets = [];
        this.Ultimos4 = [];
        this.GrabarArchivo();
        console.log('Se ha inicializado el sistema');
    };

    GrabarArchivo() {
        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets,
            Ultimos4: this.Ultimos4
        };

        let jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./server/data/data.json', jsonDataString);
    };

    UltimoTicket() {
        return `Ticket ${this.ultimo}`;
    };

    Ultimos() {
        return this.Ultimos4;
    };

    AtenderTicket(NumeroEscritorio) {
        if (this.tickets.length === 0) {
            return 'No hay tickets'
        }
        let numeroTicket = this.tickets[0].numero;
        this.tickets.shift(); //Elimina primera posicion del arreglo

        let atenderTicket = new Ticket(numeroTicket, NumeroEscritorio);

        this.Ultimos4.unshift(atenderTicket); //El ticket se agrega al inicio

        if (this.Ultimos4.length > 4) {
            this.Ultimos4.splice(-1, 1); //bora el ultimo
        }

        //console.log('Ultimos 4');
        //console.log(this.Ultimos4);
        this.GrabarArchivo();

        return atenderTicket;
    };
};

module.exports = {
    TicketControl
}