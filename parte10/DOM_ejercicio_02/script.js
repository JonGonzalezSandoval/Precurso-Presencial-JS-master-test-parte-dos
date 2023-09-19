let verdadero = false;

p = document.querySelector("#texto");

p.innerHTML = "La variable está en false";

boton = document.querySelector("#btn");

boton.addEventListener("click", function () {
  cambiaEstado();
});

function cambiaEstado() {
  if (verdadero) {
    p.innerHTML = "La variable está en false";
  } else {
    p.innerHTML = "La variable está en verdadero";
  }
  verdadero = !verdadero;
}
