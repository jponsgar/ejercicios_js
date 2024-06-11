Puntuación
●	Test: 30 pts
●	Preguntas: 35 pts
●	Teoría 35 pts
Tipo test

1. ¿Qué tipo de dato es `undefined` en JavaScript?
   - a) Object
   - b) Undefined
   - c) String

   Respuesta correcta: b) Undefined
Variable que no ha sido declarada o no se le ha asignado un valor.
typeof null  ->"object" 
typeof globalThis -> "object" 
             typeof Array -> "function"

2. ¿Cuál de los siguientes métodos se utiliza para acceder a un elemento por su ID en el DOM?
   - a) `getElementByClass`
   - b) `getElementById`
   - c) `getElementByName`

   Respuesta correcta: b) `getElementById`
DOM, es una API para acceder y manipular documentos (HTML y XML).
`getElementById`. Devuelve una referencia al elemento por su ID. 
      <!— HTML. Escribimos los datos con document.getElementById en JS -->
      <p id="input">Escribir número</p>
      <!— HTML. Llamamos al JS ejemplo.js -->
      <script src="ejemplo.js"></script>  
// JS. Escribimos los datos en el HTML con document.getElementById
document.getElementById("ejemplo").innerText = "Número: " +;

3. ¿Cuál es el resultado de `typeof null` en JavaScript?
   - a) Null
   - b) Object
   - c) Undefined

   Respuesta correcta: b) Object
	El operador “typeof” devuelve el tipo de dato del operando.

4. ¿Qué método se usa para agregar un nuevo elemento al final de un array en JavaScript?
   - a) `push()`
   - b) `pop()`
   - c) `shift()`

   Respuesta correcta: a) `push()`
	const saludo = ['Hola'];
saludo.push('mundo');
console.log(saludo);

5. ¿Cómo se declara una función en JavaScript?
   - a) `function myFunction() {}`
   - b) `def myFunction() {}`
   - c) `funct myFunction() {}`

   Respuesta correcta: a) `function myFunction() {}`
// Multiplicación por 2 de forma normal
let numero = (parseFloat(prompt("Teclea número:")));
function multiplicarPorDosNormal(numero) {
    	return numero * 2;
}

6. ¿Cuál es el resultado de `2 + '2'` en JavaScript?
   - a) `4`
   - b) `'22'`
   - c) `NaN`

   Respuesta correcta: b) `'22'`
n = 2 + '2'
"22"

7. ¿Cómo se puede convertir una cadena a un número en JavaScript?
   - a) `parseNumber()`
   - b) `toString()`
   - c) `parseInt()`

   Respuesta correcta: c) `parseInt()`
	Let num1 = parseInt(prompt("Introduce número:")); 

8. ¿Qué método se usa para detener la propagación de un evento en el DOM?
   - a) `stopPropagation()`
   - b) `preventDefault()`
   - c) `stopEvent()`

   Respuesta correcta: a) `stopPropagation()`
	  function stopEvent(evento) {
        const c2 = document.getElementById("c2");
        c2.textContent = "hola";
        evento.stopPropagation();
        alert("evento Detenido.");
      }

9. ¿Cuál de los siguientes NO es un tipo de dato primitivo en JavaScript?
   - a) String
   - b) Number
   - c) Array

   Respuesta correcta: c) Array

    	String para el string primitivo.
   	Number para el number primitivo.
   	BigInt para el bigint primitivo.
    	Boolean para el boolean primitivo.
    	Symbol para el symbol primitivo.

10. ¿Qué función se usa para ejecutar un fragmento de código después de un cierto intervalo de tiempo?
    - a) `setInterval()`
    - b) `setTimeout()`
    - c) `setTime()`

    Respuesta correcta: b) `setTimeout()`
	setTimeout(() => {
  	console.log("Retrasado por 1 segundo.");
}, 1000);

11. ¿Cómo se puede agregar un nuevo atributo a un elemento en el DOM?
    - a) `element.addAttribute()`
    - b) `element.setAttribute()`
    - c) `element.createAttribute()`

    Respuesta correcta: b) `element.setAttribute()`
	<button onclick = "fun()"> Add attribute </button> <br><br>
    	<a id = "link"> w3schools </a>  
    	<script>
 	function fun() {  
 	document.getElementById("link").setAttribute("href",  "https://www.w3schools.com/");  
 	}  
    	</script> 

12. ¿Qué operador se usa para comparar tanto el valor como el tipo en JavaScript?
    - a) `==`
    - b) `=`
    - c) `===`

    Respuesta correcta: c) `===`
	
Operador	Descripción	Ejemplo:
==	igual que	1 == '1' // true 
===	igual valor y tipo	
1 === '1' // false (distinto tipo de datos) 
  
!=	desigual que (valor)	1 != '1' // false
!==	desigual valor o tipo	1 !== '1' // true 
>	mayor que	5 > 4 // true 
<	menor que	4 < 5 // true 
>=	mayor o igual que	5 >= 5 // true (son iguales) 
<=	menor o igual que	5 <= 5 // true (son iguales) 
?	operador ternario	







13. ¿Cuál es el método correcto para remover un elemento hijo en el DOM?
    - a) `element.removeChild()`
    - b) `element.deleteChild()`
    - c) `element.eraseChild()`

    Respuesta correcta: a) `element.removeChild()`
     <p>Click "Remove" Elimina el primer elemento de la lista:</p>
    <button onclick="myFunction()">Remove</button>
      <ul id="myList">
      <li>Cafe</li>
      <li>Te</li>
    </ul>
    <script>
    function myFunction() {
      const list = document.getElementById("myList");
      list.removeChild(list.firstElementChild);
    }
    </script> 

14. ¿Cómo se declara una variable de bloque en JavaScript?
    - a) `var`
    - b) `let`
    - c) `constant`

    Respuesta correcta: b) `let`
	let numero = (parseFloat(prompt("Teclea número:")));

15. ¿Cuál es el método correcto para encontrar todos los elementos con una clase específica en el DOM?
    - a) `getElementsByClassName()`
    - b) `querySelector()`
    - c) `getElementsByName()`

    Respuesta correcta: a) `getElementsByClassName()`
    <div class="example">Elemento</div>
    <script>
        const collection = document.getElementsByClassName("example");
        collection[0].innerHTML = "Hello World!";
    </script>

16. ¿Cuál es el tipo de dato del valor `true` en JavaScript?
    - a) Boolean
    - b) Number
    - c) String

    Respuesta correcta: a) Boolean

17. ¿Cómo se puede acceder al primer elemento de un array en JavaScript?
    - a) `array.first()`
    - b) `array[0]`
    - c) `array[1]`

    Respuesta correcta: b) `array[0]`

18. ¿Qué método se usa para ejecutar una función repetidamente en un intervalo de tiempo fijo?
    - a) `setTimeout()`
    - b) `setInterval()`
    - c) `repeatInterval()`

    Respuesta correcta: b) `setInterval()`
    <p id="demo"></p>
    <script>
    const element = document.getElementById("demo");
    setInterval(function() {element.innerHTML += "Hola"}, 1000);
    </script>

19. ¿Cuál de las siguientes opciones es una manera correcta de crear un objeto en JavaScript?
    - a) `var obj = {};`
    - b) `var obj = [];`
    - c) `var obj = ();`

    Respuesta correcta: a) `var obj = {};`
	let miCoche = {
  	marca: "Ford",
 	modelo: "Mustang",
  	anyo: 1969,
};

20. ¿Cuál es el método correcto para reemplazar el contenido HTML de un elemento en el DOM?
    - a) `element.setHTML()`
    - b) `element.innerHTML`
    - c) `element.updateHTML()`

    Respuesta correcta: b) `element.innerHTML`
    <p id="texto">Ver en Consola</p>
    <script>
        txt = document.getElementById("texto");
        console.log(txt.innerHTML);
    </script>

21. ¿Cómo se llama a una función anónima en JavaScript?
    - a) `function() {}`
    - b) `() => {}`
    - c) `functionName()`

    Respuesta correcta: b) `() => {}`

22. ¿Qué método se usa para eliminar el último elemento de un array en JavaScript?
    - a) `pop()`
    - b) `push()`
    - c) `splice()`

    Respuesta correcta: a) `pop()`
	const plantas = ['rosa', 'clavel', 'geranio', 'cardo'];
console.log(plantas);
console.log(plantas.pop()); // cardo


23. ¿Cómo se puede convertir un objeto JSON en una cadena en JavaScript?
    - a) `JSON.parse()`
    - b) `JSON.stringify()`
    - c) `toJSON()`

    Respuesta correcta: b) `JSON.stringify()`
	console.log(JSON.stringify({ x: 5, y: 6 }));
// salida: {"x":5,"y":6}

24. ¿Qué método se usa para detener la acción predeterminada de un evento en el DOM?
    - a) `stopPropagation()`
    - b) `preventDefault()`
    - c) `stopEvent()`

    Respuesta correcta: b) `preventDefault()`
     <a id="funcion" href="https://w3schools.com/">W3Schools.com</a><br>
<p>El método preventDefault() evitará que el enlace anterior siga la URL.</p>
    <script>
    document.getElementById("funcion").addEventListener("click", function(event){
      event.preventDefault()});

25. ¿Cuál es el resultado de `typeof NaN` en JavaScript?
    - a) Number
    - b) NaN
    - c) Undefined

    Respuesta correcta: a) Number
 Infinity
   	 NaN

26. ¿Cómo se puede agregar un nuevo elemento al principio de un array en JavaScript?
    - a) `push()`
    - b) `unshift()`
    - c) `shift()`

    Respuesta correcta: b) `unshift()`
	const array1 = [1, 2, 3];
array1.unshift(0);
console.log(array1);

27. ¿Cuál es el método correcto para seleccionar el primer elemento que coincide con un selector CSS en el DOM?
    - a) `querySelector()`
    - b) `querySelectorAll()`
    - c) `getElementsBySelector()`

    Respuesta correcta: a) `querySelector()`
      <div id="foo\bar"></div>
     <script>
       console.log("#foo\\bar"); 
       document.querySelector("#foo\\bar"); // Coincide con "foo\bar"
     </script>


28. ¿Qué tipo de dato es `[]` en JavaScript?
    - a) Object
    - b) Array
    - c) String

    Respuesta correcta: a) Object

29. ¿Cuál de las siguientes es una forma correcta de crear una promesa en JavaScript?
    - a) `new Promise()`
    - b) `new Promisify()`
    - c) `new Async()`

    Respuesta correcta: a) `new Promise()`

30. ¿Cuál es el método correcto para agregar un evento de clic a un elemento en el DOM?
    - a) `element.onclick()`
    - b) `element.addEventListener('click', function)`
    - c) `element.click()`

    Respuesta correcta: b) `element.addEventListener('click', function)`
    <button id="miboton">Pulsa boton</button>
    <p id="demo">
    <script>
     const element = document.getElementById("miboton");
     element.addEventListener("click", mifuncion);
     function mifuncion() {
     document.getElementById("demo").innerHTML = "Hola mundo";
    }
    </script>
 
Ejercicios cortos
Ejercicio 1: Crear y Llamar una Función

Descripción: Escribe una función llamada saludar que tome un parámetro nombre y muestre un saludo en la consola. Llama a la función con el argumento "Mundo".

function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}
// Llamamos a la función con el argumento "Mundo" y vemos en consola el saludo
saludar("Mundo");

Ejercicio 2: Manipulación del DOM

Descripción: Crea un botón en el HTML con el texto "Click me". Escribe un script en JavaScript que cambie el texto del botón a "Clicked!" cuando se haga clic en él.

    <button id="miBoton">Click me</button>
    <script>
        const button = document.getElementById('miBoton');
        button.addEventListener('click', function() {
        button.textContent = 'Clicked!';
        });
    </script>

Ejercicio 3: Conversión de Tipos

Descripción: Escribe un script que tome un número como cadena (por ejemplo, "123") y lo convierta a un número entero. Muestra el resultado en la consola.

// Función para convertir una cadena a un número entero
function convertirCadena(cadena) {
    let numeroEntero = parseInt(cadena);
    console.log(numeroEntero);
}
convertirCadena("123");

Ejercicio 4: Arreglos y Métodos

Descripción: Crea un arreglo con los números del 1 al 5. Escribe un script que agregue el número 6 al final del arreglo y luego elimine el primer elemento. Muestra el arreglo resultante en la consola.

// Crea un arreglo con los números del 1 al 5, añade 6 y elimina 1
let numeros = [1, 2, 3, 4, 5];
numeros.push(6);
numeros.shift();
console.log(numeros);

Ejercicio 5: Uso de querySelector

Descripción: Añade un párrafo al HTML con el id "miParrafo" y el texto "Hola Mundo". Escribe un script en JavaScript que cambie el texto del párrafo a "Texto cambiado" cuando se cargue la página.

    <p id="miParrafo">Hola Mundo</p>
    <script>
    let parrafo = document.getElementById("miParrafo");
    parrafo.innerHTML = "Texto cambiado";
    </script>

Teoría
Pregunta 1: ¿Cuál es la diferencia entre var, let, y const en JavaScript? Proporciona un ejemplo de cada uno.

La función var permite re-declaración
    var x = 10;
    var x = 20; 
    console.log(x); //20

El bloque let no permite re-declaración.
   let x = 10;
   let x = 20; 
   console.log(x); //Error

El bloque const no permite re-declaración ni re-asignación.
    const x = 10;
    const x = 20; 
    console.log(x);  // Error

Pregunta 2: ¿Qué es el event bubbling en el DOM y cómo se puede detener? Proporciona un ejemplo.

Cuando un elemento recibe un evento, y ese evento lo propaga a sus padres, abuelos, etc. Hasta su elemento raíz.

    <div id="padre" style="padding: 20px; background-color:black;">
      <div id="hijo" style="padding: 20px; background-color: white;">
      </div>
    </div>
    <script>
document.getElementById('padre').addEventListener('click', function(event) {
  	  console.log('Evento en el Padre');
});
document.getElementById('hijo').addEventListener('click', function(event) {
  	  console.log('Evento en el Hijo');
    event.stopPropagation();
});
    </script>

Pregunta 3: ¿Cómo funcionan las promesas en JavaScript? Explica con un ejemplo sencillo de una promesa que se resuelve después de 2 segundos.

Las promesas en JavaScript son objetos que indican el fin y el valor de una operación asincrónica.
Definimos una función que hace una tarea asíncrona y finalmente resuelve la promesa, con una valor de lectura con retardo. Luego recibimos el resultado de la promesa.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hola');
  }, 2000);
});
promise1.then((value) => {
  console.log(value);
});
console.log(promise1);

Pregunta 4: ¿Qué es la diferencia entre == y === en JavaScript? Proporciona un ejemplo donde == devuelva true y === devuelva false.

En los operadores booleanos; == “valor igual”, === “valor igual y de tipo”.
1 == '1'  // true		1 == 1  // true
1 === '1' // false		1 === 1 // true

Pregunta 5: ¿Qué es el hoisting en JavaScript? Explica cómo afecta a las declaraciones de variables y funciones con un ejemplo.

Durante la fase de compilación se crean las variables, pero su valor no está definido hasta el momento en que se ejecuta.

Durante la fase de compilación se crean las variables, pero su valor no está definido hasta el momento en que se ejecuta.

let miVariable; 
console.log(miVariable); // undefined
miVariable = "Hola Mundo!";
console.log(miVariable); // “Hola Mundo!”
