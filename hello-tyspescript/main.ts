var minhaVar = 'minha variavel';


function minhaFunction(x, y){
    return x + y;
}

//ES 6 OU ES 2015 es6-features.org
let num = 2;
const PI = 3.14;

var numeros = [1,2,3,4,5,6];
numeros.map(function(valor){
    return valor * 2;
});

numeros.map( valor => valor * 2 ); //ES 2015 babeljs.io
