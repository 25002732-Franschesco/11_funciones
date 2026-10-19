/*let nombre = "Franschesco";

let estatura = 1.81;
let peso = 90;
let cascada = false;
let genero = 'M';
let vehiculo = null;
let edad = 20;


alert(nombre + ' - ' + estatura + ' - ' + peso+ ' - ' + cascada+ ' - ' + genero+ ' - ' + vehiculo+ ' - ' + edad);

console.log(typeof nombre);
console.log(typeof estatura);
console.log(typeof peso);
console.log(typeof cascada);
console.log(typeof genero);
console.log(typeof vehiculo);
console.log(typeof edad);*/

let seccion = document.getElementById("resultados")//funcion comun

function votar(){
    let edad = 12;
    let mivoto = edad >= 18 ? "Puede Votar" : "No puede Votar";
    //seccion.innerHTML = seccion.innerHTML + mivoto;

    seccion.innerHTML += mivoto;
}

votar();


//Funciones Anonimas, sin nombre, se ejecuta en una variable

let producto = function(a,b){ //parametros
    return a*b;
}

let res = producto(3,6); //argumentos
seccion.innerHTML += '<br>' + res;


// Por Constructor

miFuncion = new Function("a","b","c","return(a * b) + c;");

let res2 = miFuncion(5,7,3);

seccion.innerHTML += '<br>' + res2;

//Anonimas Autoinvocadas, funciones que se ejecutan de manera automatica

(function(){
    seccion.innerHTML += '<br> Soy una funcion Anonima';

}) ();