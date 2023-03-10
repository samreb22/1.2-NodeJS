/*** Módulos instalados con npm:
   * --> npm install colors
***/

// Importación del módulo preconstruido en Nodejs "http"
const http = require('http');
// Importación del módulo preconstruido en Nodejs "colors"
const colors = require('colors');

// Función que devolverá un mensaje en HTML
const handleServer = function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html' });
    res.write('<h1>Hola mundo</h1>');
    res.end();
}

const server = http.createServer(handleServer);

// Servidor escuchando por el puerto 3000
server.listen(3000, function() {
    console.log("Servidor escuchando por el puerto 3000.".yellow);
});