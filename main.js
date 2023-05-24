console.log("Hello World! ");
alert("Bienvenido a Javascript");
/*
Comentario multilinea
*/
let nombre = prompt("Cual es tu nombre?");

console.log(nombre)
console.log(typeof (nombre) )

let numeroUno = prompt("Ingresa un numero");
let numeroDos = prompt("Ingresa otro numero");

let resultadoSuma = parseInt(numeroUno) + parseInt (numeroDos);

let resultado = parseInt(numeroUno) + parseInt (numeroDos);

console.log(`El resultado de la suma es: ${resultadoSuma} `); 

        let resultadoResta=parseInt(numerouno)- parseInt(numerodos);
        let resultadoMulti= parseInt(numerouno)*parseInt(numerodos);
        let resultadodiv= parseInt(numerouno)/parseInt(numerodos);
        console.log(`el resultado de la suma es: ${resultadoSuma}`);
        console.log(`el resultado de la resta es: ${resultadoResta}`);
        console.log(`el resultado de la multiplicacion es: ${resultadoMulti}`);
        console.log(`el resultado de la division es: ${resultadodiv}`);

        //Dados dos numeros identificar cual numero es mayor ,
        //cual es menor o si son iguales.
        let primerNumero = prompt ("Ingresa un numero");
        let segundoNumero = prompt ("Ingresa otro numero");
        if(primerNumero > segundoNumero){
console.log (`El ${primerNumero} es mayor que ${segundoNumero}`);
        }else if(primerNumero >  segundoNumero){
        console.log(`El numero ${segundoNumero} es mayor que ${primerNumero}`);
        }else{
                console.log(`El numero ${primerNumero} es igual a ${segundoNumero}`);
        }

//Dado un numero,identificar si es numero par o impar.
        
