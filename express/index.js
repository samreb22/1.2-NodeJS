// Importación del módulo "express"
const express = require('express');
// Importación del módulo preconstruido en Nodejs "colors"
const colors = require('colors');

const server = express();

// Gestiono una ruta del servidor para recibir peticiones y enviar respuestas al cliente
server.get('/', (req, res) => {
    res.send("<h1>Hola mundo con Node.js y Express.</h1>");
})

// Servidor escuchando por puerto 3000
server.listen(3000, () => {
    console.log("Servidor escuchando por el puerto 3000.".blue);
})
