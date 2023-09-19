carta = document.querySelector("#carta");

// carta.addEventListener("click", function () {
//   cambioCarta();
// });

carta.addEventListener("click", function () {
  cambioCarta();
});

function cambioCarta() {
  imagen = document.querySelector("img");
  foto = imagen.src;
  lado = imagen.getAttribute("lado");
  if (lado === "reverso") {
    imagen.src = "./anverso.jpg";
    imagen.setAttribute("lado", "anverso");
  } else {
    imagen.src = "./reverso.png";
    imagen.setAttribute("lado", "reverso");
  }
}
