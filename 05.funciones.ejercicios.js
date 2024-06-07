//Crea una función que tenga dos argumentos: num1, num2, y que devuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos, no letras o símbolos. Llamo a la función como sumar(3,5) deberá devolver 8.

num1 = parseInt(prompt("Primer número"));
num2 = parseInt(prompt("Segundo número"));
function suma2(num1, num2){
    return (num1+num2)
}
console.log(suma2(num1, num2));


//Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos. Por ejemplo al llamarla como esPar(5) me dará false, mientras que con esPar(6) me dará tru e.

console.group("esPar");
function esPar(num){
   return (num%2 == 0)
}
num = parseInt(prompt("Teclea número entero"));
console.log("el número " + num + " es par? " + esPar(num));
console.groupEnd();

//Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento. Si ejecuto o llamo a la función con esMultiplo(40,4) debe devolver true porque 40 es divisible por 4. Si ejecutas esMultiplo(23,4) dará false.

console.group("esMultiplo");
function esMultiplo(num1, num2){
   return (num1%num2 == 0)
}
num1 = parseInt(prompt("Teclea un número"));
num2 = parseInt(prompt("Teclea un segundo número"));
console.log(num1 + " es multiplo de " + num2 + " ? " + esMultiplo(num1, num2));
console.groupEnd();

//Definir una función que cree una cadena de letras repetidas tantas veces como le digamos. La función recibe dos argumentos: la letra y el número de repeticiones. Al ejecutar repetir('a', 5) deberá devover la cadena  aaaaa. 

console.group("repetirLetra");
function repetir(letra, num){
return (letra.repeat(num))
}
letra = prompt("Escribir una letra");
num = parseInt(prompt("Escribir un número"));
console.log(repetir(letra, num));
console.groupEnd();


//Usa el algoritmo de Euclides para diseñar una función que determine el máximo común divisor de dos números. Bueno este algoritmo es bien simple. Para clacular el mcd de A y B:
//    Si A = 0 entonces MCD(A,B)=B, ya que el MCD(0,B)=B, y podemos detenernos.  
//    Si B = 0 entonces MCD(A,B)=A, ya que el MCD(A,0)=A, y podemos detenernos.  
//    Calcula el resto de A/B
//    Asigna a A el valor de B
//    Asigna a B el resto
//    Repite hasta que A o B sean 0.
//Si me piden el MCD(10, 5) tendré 5 como solución, y el MCD( 24, 9) será 1, y el MCD(12,20) será 4

num1 = parseInt(prompt("Escribir primer número"));
num2 = parseInt(prompt("Escribir segundo número"));
function MCD(num1, num2){
while (num1 != 0 && num2 != 0){
let resto = num1%num2;
num1 = num2;
num2 = resto;
} 
if(num1==0) mcd = num2;
if(num2==0) mcd = num1;
return mcd;
}
console.log("MCD de " + num1 + " y "+num2 + " es " + MCD(num1, num2));


//Diseña una función que calcule el factorial de un número,
//usa una función recursiva (que se llama a si misma).
//Recuerda que el factorial de un número es el resultado de multiplicar cada número por el anterior hasta llegar a 1.
//Y el factorail de 0 es por definición 1. Si escribo factorial(3) obtendré 3*2*1 = 6

num = parseInt(prompt("escirbe un número"));
function factorial(num){
   if(num==0) {
      return 1
      }
  return num*factorial(num-1)
}
console.log("Factorial de " + num + " = " + factorial(num))
