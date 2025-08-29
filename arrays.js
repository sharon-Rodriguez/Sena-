/*Crea una lista vacía llamada "listaGenerica".*/
let listaGenerica = [];

/*Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.*/
let listaGenerica = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];

/*Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.*/
let lenguagesDeProgramacion = [];

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.*/
function mostrarLista() {
    let listaGenerica = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
    for (let i = 0 ; i < listaGenerica.length; i++){
        console.log(listaGenerica[i]);
    }
}


/*Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.*/

function mostrarElementos(variableLista) {
    for (let i = lista.length - 1; i >= 0 ; i--){
        console.log(lista[i]);
        
    }
}

/*Crea una función que calcule el promedio de los elementos en una lista de números.*/
function PromedioListas(variableLista) {
    let suma = 0 ;
    for (let i = 0; i < variableLista.length; i++ ){
        suma = suma + variableLista[i];
    }
    let promedio = suma / variableLista.length;
    console.log(`El promedio de la lista es de: ${promedio}`);
}

/*Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.*/
function numeroMayorMenor(lista) {
    let numeroMayor = lista[0] ;
    let numeroMenor = lista[0] ;
    for (let i = 0; i < lista.length; i++){
        if (lista [i]> numeroMayor){
            numeroMayor = lista[i];
        } 
        if (lista[i] < numeroMenor){
        numeroMenor = lista[i];
        }
    }  
    console.log(`El numero mas grande de la lista es: ${numeroMayor} y el numero mas pequeño es: ${numeroMenor} `);
}



/*Crea una función que devuelva la suma de todos los elementos en una lista.*/
function sumaElementos(lista) {
    let suma = 0 ;
    for (let i = 0; i < lista.length; i++){
        suma = suma + lista[i];
    }
    console.log(`La suma de todos los elementos de esta lista ${lista} es: ${suma}`);
    return suma;
}

/*Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.*/
function posicion(lista, elemento) {

    for (let i = 0; i < lista.length; i++){
        if (lista[i] === elemento){
            return i;
        //tambien podria usar .idexOf() para que me diga en que posicion esta el elemento, no se pone if ni nada solo directament el return con ese codigo   
        } 
    }
    return -1;
}

/*Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.*/
function sumaDosListas(lista1, lista2) {
    const nuevaLista = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}

/*Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.*/