require("colors");//Se importa el módulo colors para agregar color

const math = require('./modules/math.js')//Se importa el módulo math que contiene las funciones matemáticas

console.clear();//Se utiliza console.clear() para limpiar la consola 
console.log(math);//se imprime el objeto para ayudar a verificar que la importación y asignación de math se haya realizado correctamente.

const main = async() => {//unción llamada main que utiliza async para admitir operaciones asíncronas 
    let f= (math.getRandomInt(10))//Se generan dos números aleatorios utilizando la función getRandomInt del módulo math. Estos números se almacenan en las variables f y m
    let m= (math.getRandomInt(10))
    console.log(':::::::::::::::::::::::::::::::::::::::::::::::::'.bgCyan);
    console.log('::'.bgCyan + 'Funciones matematicas'.bgBlue + ':::'.bgCyan);
    console.log(':::::::::::::::::::::::::::::::::::::::::::::::::'.bgCyan);
    console.log(':::::::::::::::::::::::::::::::::::::::::::::::::'.bgCyan);
    console.log('numeros randoms:'+' '+f+' '+m);
    console.log(':::::::::::::::::::::::::::::::::::::::::::::::::::'.bgCyan);

    console.log('::::::::::::::::::::::::::::::::::::::::::::::::::.'.bgBlue);
    console.log(':::'.bgBlue + '       '+':::'.bgBlue);
    console.log(':::'.bgBlue + 'Suma =>' + math.add(f,m) +'     '+ ':::'.bgBlue);//Se imprime las operaciones matematicas
    console.log(':::'.bgBlue + 'Resta =>' + math.substract(f,m) +'    '+ ':::'.bgBlue);
    console.log(':::'.bgBlue + 'Multiplicacion =>' + math.multiply(f,m) +'    '+ ':::'.bgBlue);
    console.log(':::'.bgBlue + 'Division =>' + math.divide(f,m) +'    '+ ':::'.bgBlue);
    console.log(':::::::::::::::::::::::::::::::::::::::::::'.bgBlue);

}

main();//se cierra main para ejecutar la funcion en ella