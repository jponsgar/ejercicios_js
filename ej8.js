/* Una tortilla de patatas lleva 200 gramos de patatas por persona. 
Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. 
Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias*/
console.log("Ejercicio 8")
// Introducimos número de comensales:
let comensales = parseInt(prompt("Comensales"));
// definimos variables y calculamos valores
const patg = comensales * 200;
const patk = patg / 1000;
const huevos = patk * 5;
const cebolla = patk * (300 / 1000);
// Escribimos los datos en consola:
console.log("Para " + comensales + " comensales se necesitan:")
console.log("Patatas: " + patg + " gramos");
console.log("Huevos: " + huevos);
console.log("Cebolla: " + cebolla + " gramos");
// Escribimos los datos en html:
// Y definimos los strings (cadenas de texto) con variables que sustituye JS
let input = `Para ${comensales} comensales se necesitan:`;
let output = `<ul>
                <li>${patg} g. de patatas</li>
                <li>${huevos} huevos</li>
                <li>${cebolla} g. de cebolla</li>
              </ul>`;
// Introducimos los valores de esos strings en los elementos del documento HTML:
document.getElementById("ej-8-input").innerText = input;
document.getElementById("ej-8-output").innerHTML = output;