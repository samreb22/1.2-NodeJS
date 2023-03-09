/***
 * Los módulos en NodeJS son archivos que nos permiten dividir una aplicación en múltiples partes
 * para poder mantenerla por separado.
***/

// Importación del archivo "math.js" con las operaciones matemáticas que voy a utilizar
const math = require('./math.js');

console.log("Funciones exportadas del objeto Math (módulo personalizado): ");
console.log(math);

// Implemento las funciones de las operaciones matemáticas que he exportado del archivo "math.js"
console.log("\nOperaciones exportadas: ");
console.log("\tSuma (math.add(1, 2)): " + math.add(1, 2));
console.log("\tResta (math.substract(1, 2)): " + math.substract(1, 2));
console.log("\tMultiplicación (math.multiply(1, 2)): " + math.multiply(1, 2));
console.log("\tDivisión (math.divide(1, 2)): " + math.divide(1, 2));
console.log("\tDivisión (math.divide(1, 0)): " + math.divide(1, 0));