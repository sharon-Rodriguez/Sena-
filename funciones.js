/*Desafíos:*/
/*Crear una función que muestre "¡Hola, mundo!" en la consola.*/
function saludar() {
    let saludo = '¡Hola, mundo!';
    console.log(saludo);
    return;
}


/*Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.*/
function hola (nombre) {
    let saludo = `¡Hola, ${nombre}!`;
    console.log(saludo);
    return;
}


/*Crear una función que reciba un número como parámetro y devuelva el doble de ese número.*/
function name(numero) {
    let doble = numero * 2; 
    console.log(doble);
}


/*Crear una función que reciba tres números como parámetros y devuelva su promedio.*/
function tresNumeros(num1,num2,num3) {
    let promedio = (num1+num2+num3)/3;
    return promedio;
}


/*Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.*/
function NumeroMayor(numero1, numero2){ 
if (numero1 > numero2){
    return numero1;
} else {
    return numero2;
}
}

/*Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.*/
function multiplicar(numero) {
    return numero * numero;
}