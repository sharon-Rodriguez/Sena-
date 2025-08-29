/*Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.*/
function calcularIMC(altura, peso) {
    return peso / (altura * altura);
}

/*Crea una función que calcule el valor del factorial de un número pasado como parámetro.*/

function factorial(numero) { 
    let i = numero;
    let acumula = 1;
    while(i >= 1){ 
        acumula = acumula * i;
        i = i - 1;
    }   
    return acumula;
}

/*Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.*/
function convertirReales(valorEnDolar) {
    const cotizacion = 4.80;
    let conversion = valorEnDolar * 4.80 ;
    return conversion
}

/*Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.*/
function AreaConPerimetro(altura, anchura) {
    const area = anchura * altura ;
    const perimetro = 2 * (anchura + altura);
    alert(`La sala rectangular tiene un area de: ${area}, y un perimetro de ${perimetro}`);
    return {area, perimetro};
}
/*Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/
function calculoCirculo(radio) {
    const Pi = 3.14;
    const area = 3.14 * radio ** 2;
    const perimetro = 2 * 3.14 * radio ;
    alert(`La sala circular tiene un area de: ${area}. Y un perimetro de ${perimetro}`);
    return {area, perimetro}
}

/*Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.*/

function tablaDeMultiplicar(numero) {
    let i = 1;
    while (i <= 10){
        let resultado = numero * i;
        let elementoHTML = document.querySelector('p');
        elementoHTML.innerHTML += `${numero} x ${i} = ${resultado} <br>`;
        i++;
    }
}