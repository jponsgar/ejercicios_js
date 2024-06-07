function cambiarColor() {
    let fondo = document.getElementById("fondo");
    let colores = ["#FFFFFF", "#f5f3f3", "#d9d9d9", "#e4e4e4"]; // Lista de colores
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)]; // Color aleatorio de la lista
    fondo.style.backgroundColor = colorAleatorio;
}