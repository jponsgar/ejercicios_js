// Datos por prompts
let usuario = prompt("Teclea nombre usuario: ");
let logon = prompt("Está logeado? 'si' o 'no': ");
let edad = parseInt(prompt("Teclea edad usuario: "));
// Verificaciones
let esAdmin = ("admin" === usuario);
let esMayorDe18 = (edad >= 18);
let estaLogeado = (("si" || "Si" || "SI") === logon);
// Salidas
console.log("El usuario es: " + usuario);
console.log("Está logeado: " + logon);
console.log("La edad es de: " + edad + " años");
console.log("Es admin y mayor de edad (true/false): " + (esAdmin && esMayorDe18));
console.log("Es admin o mayor de edad (true/false): " + (esAdmin || esMayorDe18));
console.log("Es admin, está logeado y es mayor de edad (true/false): " + (esAdmin && esMayorDe18 && estaLogeado));
console.log("Es menor de edad y no está logeado (true/false): " + (!esMayorDe18 && !estaLogeado));
console.log("No es admin y no está logeado (true/false): " + (!esAdmin && !estaLogeado));