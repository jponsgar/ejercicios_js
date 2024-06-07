function cambiarColor() {
    var texto = document.getElementById("texto");
    var boton = document.getElementById("botonColor");
    if (texto.style.color !== "red") {
        colorOriginal = texto.style.color;
        texto.style.color = "red";
        boton.textContent = "Restaurar Color Original";
    } else {
        texto.style.color = colorOriginal;
        boton.textContent = "Cambiar a Rojo Título";
    }
}