function division(dividendo, divisor) {

    let resultado = dividendo/divisor;
    return resultado;
}



alert("Introduce una pareja de numeros para dividir el primero con el segundo, para terminar introduce un 0 en cualquiera de las dos opciones")
let primerNumero = parseInt(prompt("Introduce el dividendo"));
let segundoNumero = parseInt(prompt("Introduce el divisor"));

while(primerNumero != 0 && segundoNumero != 0){

    alert("El resultado es: " + division(primerNumero, segundoNumero));



    primerNumero = parseInt(prompt("Vuelve a introducir el dividendo"));
    segundoNumero = parseInt(prompt("Vuelve a introducir el divisor"));
}