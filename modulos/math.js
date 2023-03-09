// Declaro un objeto llamado "Math" el cual exportará las funciones (operaciones matemáticas)
const Math = {};

// Declaración de las funciones para realizar las operaciones matemáticas
function add(n1, n2){
    return n1 + n2;
}

function substract(n1, n2){
    return n1 - n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    if (n2 == 0){
        return "Error: No se puede dividir entre 0.";
    }else {
        return n1 / n2;
    }
}

// Exporto las funciones de este archivo (operaciones matemáticas) a través del objeto "Math" declarado al inicio del archivo
Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math; // Esto nos permite exportar objetos, funciones, variables y cualquier propiedas JS

// Exporto las funciones de este archivo (operaciones matemáticas)
/*
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
*/