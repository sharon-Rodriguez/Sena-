/*Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.*/
let saludo = "Hola bienvenidos a la pagina!!"; 

console.log(saludo);

/*Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.*/

let nombre = 'Sharon Vannesa';
console.log(`Holaaa ${nombre}, bienvenida`);

/*Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".*/
let nombre = 'Sharon Vannesa';
alert(`¡Hola, ${tu nombre}!`);

/*Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.*/
let pregunta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");

console.log(pregunta);

/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.*/
let valor1 = 6;
let valor2 = 33;

let suma = valor1 + valor2;

console.log(`La suma de ${valor1} y ${valor2} es igual a ${suma}.`);


/*Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.*/

let valor1 = 66;
let valor2 = 33;

let resultado = valor1 - valor2;

console.log(`El resultado de ${valor1} y ${valor2} es igual a ${resultado}.`);


/*Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.*/

let edad = prompt("Por favor ingresa tu edad");

if( edad >= 18){
    console.log(`Tu eres mayor de edad`);
} else{
    console.log(`Tu eres menor de edad`);
}

/*Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.*/
let numero = parseFloat(prompt("Por favor dame un valor"));
if(numero > 0){
    alert("Este numero es positivo");
} else if  (numero < 0){
    alert("Este numero es negativo");
} else {
    alert("Es cero");
}

/*Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.*/
let nuemro = 1;

while (numero <=10) {
    console.log(numero);
    numero++;
}

/*Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.*/
let nota = 4;
if (nota >= 7) {
    console.log("Aprobado");
} else{
    console.log("Reprobado");
}
/*Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.*/
let numero = Math.floor (Math.random () * 70)+ 1;

console.log(numero);


/*Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.*/
let numero = Math.floor (Math.random () * 10)+ 1;

console.log(numero);

/*Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.*/
let numero = Math.floor (Math.random () * 1000)+ 1;

console.log(numero);
