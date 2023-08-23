require("colors");

const math = require('./modules/math.js')

console.clear();
console.log(math);

const main = async() => {
    let f= (math.getRandomInt(10))
    let m= (math.getRandomInt(10))
    console.log(':::::::::::::::::::::::::::::::::::::::::::::::::'.bgCyan);
    console.log('::'.bgCyan + 'Funciones matematicas'.bgBlue + ':::'.bgCyan);
    console.log(':::::::::::::::::::::::::::::::::::::::::::::::::'.bgCyan);
    console.log(':::::::::::::::::::::::::::::::::::::::::::::::::'.bgCyan);
    console.log('numeros randoms:'+' '+f+' '+m);
    console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::'.bgCyan);

    console.log('::::::::::::::::::::::::::::::::::::::::::::::::::.'.bgBlue);
    console.log(':::'.bgBlue + '       '+':::'.bgBlue);
    console.log(':::'.bgBlue + 'Suma =>' + math.add(f,m) +'     '+ ':::'.bgBlue);
    console.log(':::'.bgBlue + 'Resta =>' + math.substract(f,m) +'    '+ ':::'.bgBlue);
    console.log(':::'.bgBlue + 'Multiplicacion =>' + math.multiply(f,m) +'    '+ ':::'.bgBlue);
    console.log(':::'.bgBlue + 'Division =>' + math.divide(f,m) +'    '+ ':::'.bgBlue);
    console.log(':::::::::::::::::::::::::::::::::::::::::::'.bgBlue);

}

main();