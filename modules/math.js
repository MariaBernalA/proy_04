const Maths = {}//variable vacia que  se utiliza para agrupar las funciones relacionadas con operaciones matemáticas.

function getRandomInt(max) {//función llamada getRandomInt que toma un parámetro max y devuelve un número entero aleatorio entre 0 
    return Math.floor(Math.random() * max);//funciones que se utilzan para realizar la operacion Math.random() y Math.floor().
}

function add(a,b) {//función llamada add que toma dos parámetros para sumar
    return a + b;
}

function substract(a,b) {//función llamada substract que toma dos parámetros para restar
    return a - b;
}

function multiply(a,b) {//función llamada multiply que toma dos parámetros para multiplicar
    return a * b;
}

function divide(a,b){//función llamada divide que toma dos parámetros para dividir
    if (b==0 && a ==0){//incluye una verificación para evitar la división por cero
        return 'Error: N/A :: valores a = ${a} y b = ${b}'// Si tanto a como b son cero, devuelve un mensaje de error.
    } 
    else if (b == 0) {// Si solo b es cero, devuelve 'N/A'.
        return 'N/A'
    }
    else {
        return a / b;
    }
}

Maths.add = add;//estas funciones se asignan como propiedades al objeto Math.
Maths.substract = substract;
Maths.multiply = multiply;
Maths.divide = divide;

Maths.getRandomInt = getRandomInt

module.exports = Maths;//Se exporta Maths para importarla en el archivo app.js