function cambioMoneda(cantidad, tipo) {
    return cantidad * valorMonedas[tipo];
}

let valorMonedas = {
    libras : 0.86,
    dolar: 1.28611,
    yen: 129.852
}

let dinero = parseInt(prompt("Cuantos € quieres cambiar?"));
let tipoMoneda = prompt("A que moneda quieres cambiar?(libras, dolar, yen)")


console.log(cambioMoneda(dinero, tipoMoneda) + " " + tipoMoneda);


