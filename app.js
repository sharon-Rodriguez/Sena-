/*Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".*/
let dia = prompt('Holaa Dime algo! en que día de la semana estás?');

if (dia == 'sabado'|| dia =='domingo'){
    alert('¡WUUUU! Buen fin de semana!');
} else {
    alert('¡Buena semanaaaaaaa!');
}

/*Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.*/

let numero = prompt ('Dame un número');

if (numero > 0){
    alert('Tu numero es positivo');
} else {
    alert('Tu numero es negativo');
}

/*Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".*/

let puntuacion = 100;
alert(`Tu puntuacion fue de: ${puntuacion}`);

if (puntuacion >= 100){
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intentalo nuevamente para ganar.");
}

/*Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.*/

let saldoDeCuenta = "Su saldo es de $10.000";
alert(`Apreciado usuario, se le informa que: ${saldoDeCuenta}`);

/*Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre. */
let nombre = prompt("Hola! ingresa tu nombre por favor");

alert("Que gusto saludarte "+ nombre +", Bienvenida a nuestra pagina!");
console.log('Que gusto saludarte ', nombre , 'Bienvenida a nuestra pagina!')
