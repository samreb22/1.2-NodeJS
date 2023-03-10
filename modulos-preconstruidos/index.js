// Importación del módulo preconstruido en Nodejs "os"
const os = require('os');

// Utilizo algunos de los métodos que el módulo "os" tiene ya definidos y creados por defecto
console.log("Sistema utilizado: " + os.platform());
console.log("Versión del sistema: " + os.release());
console.log("Memoria disponible: " + os.freemem() + " bytes");
console.log("Memoria total: " + os.totalmem() + " bytes");