let numeroIntroducido = parseInt(prompt("Introduce un numero!"));
//let numeroIntroducido = 6;

document.querySelector("#num").innerHTML = numeroIntroducido;

boton = document.querySelector("#btn");

boton.addEventListener("click", function () {
  sumaNumero(numeroIntroducido);
});

function sumaNumero(numero) {
  p = document.querySelector("#num");

  p.innerHTML = parseInt(p.innerHTML) + numero;
}
