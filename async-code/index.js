/***
 * El código asíncrono lo utilizaremos cuando las tareas que se tienen que realizar las tiene que realizar el propio sistema,
 * de manera que Node espera de forma asíncrona a que se realiza esa tarea hasta obtener el resultado, pero todo esto sin 
 * detener la ejecución del resto de código.
***/

// Importación del módulo preconstruido en Nodejs "fs"
const fs = require('fs');

// Utilizo algunos de los métodos que el módulo "fs" tiene ya definidos y creados por defecto
fs.writeFile('./texto.txt', 'Linea uno', function(err) { // Callback es una función que se ejecuta cuando ha terminado el proceso anterior (en este caso, cuando termina de crear el archivo)
    if (err){
        console.log(err);
    }
    console.log("El archivo ha sido creado correctamente.");
});

fs.readFile('./texto.txt', function(err, data) {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log("Última línea de código\n");