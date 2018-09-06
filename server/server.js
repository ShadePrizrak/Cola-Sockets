const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

<<<<<<< HEAD
=======


>>>>>>> a9cfbe6446f9fde7767debad46d919cbac75ee61
const path = require('path');

const app = express();
let server = http.createServer(app);

<<<<<<< HEAD
=======

>>>>>>> a9cfbe6446f9fde7767debad46d919cbac75ee61
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

<<<<<<< HEAD
// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');





=======
//IO = Esta es la comunicación del BackEnd
module.exports.io = socketIO(server);
require('./sockets/socket');

>>>>>>> a9cfbe6446f9fde7767debad46d919cbac75ee61
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});