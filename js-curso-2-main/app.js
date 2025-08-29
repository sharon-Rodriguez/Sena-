let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío' ;
function funcionConsole() {
    console.log('El botón fue clicado');
}

function funcionPrompt() {
    let ciudad = prompt("Dame el nombre de una ciudad en Brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function FuncionAlert() {
    alert("Yo amo JS");
}

function funcionSuma() {
    let numero1 = parseInt(prompt("Voy a hacerte una suma, dame un primer número:"));
    let numero2 = parseInt(prompt("Ahora dame el segundo número:"));
    let resultado = numero1 + numero2;

    alert("El resultado es: "+ resultado);
}