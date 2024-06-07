//Se trata de escribir un script que diga si un número es par o es impar.
//Recordemos que un número es par si al dividirlo por 2 da como resto 0.
//Si el número es 17, el programa debe decir que es impar.

// Con function
num1 = parseInt(prompt("Teclea un número"));
function esParOImpar(num1){
    if (num1 % 2 == 0) {
        return "El número " + num1 + " es par.";
      } else {
        return "El número " + num1 + " es impar.";
      }
    }
console.log(esParOImpar(num1));

// Sin function
num1 = parseInt(prompt("Teclea un número"));
if (num1 % 2 == 0) {
    console.log( "El número " + num1 + " es par.");
  } else {
    console.log("El número " + num1 + " es impar.");
  }

//Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo
//Si num1 es 2 debe decir que num1 es positivo

numero = parseInt(prompt("Teclea un  número"));
function esPositivo(numero){
if (numero >= 0){
    return numero + " es positivo";
}else{
    return numero + " es negativo";
}
}
console.log(esPositivo(numero));

//En este ejercicio debes pedir dos números enteros y devolver el cociente de dividir el primero entre el segundo,
//pero si este es cero no debe hacer la división, sino lanzar un mensaje de error.
//Si se entran el número 8 y 2, debe resultar 4
//Si se entran 4 y 0, dbe resultar en un mensaje de error.

dividendo = parseInt(prompt("Tecela un Primer numero"));
divisor  = parseInt(prompt("Teclea un Segundo numero"));
cociente = dividendo/divisor;
function esDivisor(dividendo, divisor){
if (divisor != 0){
    return dividendo + "/" + divisor + " = " + cociente;
}
else{
   return "No puedes dividir entre 0";
}
}
console.log(esDivisor(dividendo, divisor));

//Este script pide al usuario que teclee una letra entre A, B, C, D.
//Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado,
//en caso contrario le dirá que se equivocó.
//Si pulsa C le dará mensaj de error.

letra = prompt("Teclea una letra entre A, B, C, D");
function esLetra(letra){
if (letra == 'a' || letra == 'A'){
    return ("Pulsaste la letra " + letra + " : has acertado");
}else if (letra == 'C'){
    return "Error";
}else{
    return "Te has equivocado";
}
}
console.log(esLetra(letra));

//En este ejemplo el usuario tecleará dos números.
//Debe devolver la diferencia entre el mayor y el menor
//Si el usuario entre el 5 y el 8, el programa devolverá 3 (8 - 5)

num1 = parseInt(prompt("Teclea un número"));
num2 = parseInt(prompt("Teclea un número"));
function esDiferencia(num1, num2){
if(num1 > num2){
    resta = num1 - num2;
    return "Diferencia " + resta;
}else{
   resta = num2 - num1;
    return "Diferencia " + resta;
}
}
console.log(esDiferencia(num1,num2));

//Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas,
//para ello el cliente puede pedir vino, cerveza, refresco, agua. 
//Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.
//Un cliente ellige vino, aparecerá el mensaje vaya a la barra,
//en caso contrarío dirá que vaya a la tienda.

articulo = prompt("Elegir: vino, cerveza, refresco, agua");
function esArticulo(articulo){
if ( articulo === "vino" || articulo === "cerveza"){
      return "vaya a la barra";
}else{
      return "vaya a la tienda";
}
}
console.log(esArticulo(articulo));

//Este programa te ayuda a viajar. El programa pide al usuario si va a viajar
//con coche, tren, bicicleta o autobús. 
//Si va en tren o autobus le recordará que lleve dinero para el billete.

medio = prompt("Elige medio de transporte: coche, tren, bicicleta o autobus");
function esViaje(medio){
if (medio === "tren" || medio === "autobus"){
    return "Lleva dinero para el ticket";
}else if (medio === "coche") {
        return "Pon gasolina";
    }else{
        return "Comprueba la presión de las ruedas";
    }
}
console.log(esViaje(medio));