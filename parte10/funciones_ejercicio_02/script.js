function masGrande(primero, segundo) {
    if(primero > segundo){
        return true;
    }else{
        return false;
    }
}


let primerNumero = prompt("Introduce el primer número a comparar");
let segundoNumero = prompt("Introduce el segundo número a comparar");


if(masGrande(primerNumero, segundoNumero))
    console.log("El primer número es más grande");
else
    console.log("El primer número no es más grande");