console.log("--- Ejercicio 03 ---");
// Definimos variables:
let num1 = parseInt(prompt("Teclea un numero entero"));
let num2 = parseInt(prompt("Teclea un numero entero"));
let num3 = parseInt(prompt("Teclea un numero entero"));
let media = (num1 + num2 + num3)/3;
// Escribimos los datos en consola:
console.log("El promedio de los tres números es " + media);
// Escribimos los datos en el HTML con document.getElementById
document.getElementById("ej-3-inputs").innerText = "Números: " + num1 + ", " + num2 + ", " + num3;
// document.getElementById("ej-3-output").innerText = "Promedio: " + media;
// Escribimos los datos en el HTML con document.write
document.write("<p>Promedio: " + media + "</p>");
// Escribimos los datos en alerta Windows
let resultado = "El promedio de los tres números es: " + media
alert(resultado); 