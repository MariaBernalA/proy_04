const Maths = {}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function add(a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b){
    if (b==0 && a ==0){
        return 'Error: N/A :: valores a = ${a} y b = ${b}'
    } 
    else if (b == 0) {
        return 'N/A'
    }
    else {
        return a / b;
    }
}

Maths.add = add;
Maths.substract = substract;
Maths.multiply = multiply;
Maths.divide = divide;

Maths.getRandomInt = getRandomInt

module.exports = Maths;