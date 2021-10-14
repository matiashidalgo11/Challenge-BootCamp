
var n = window.prompt("Ingrese la cantidad de Numeros que quiere que se carguen al Arreglo");

function cargarArregloAzar(){

    let arreglo = new Array();

    for(let i = 0; i < n; i++){

        arreglo.push(Math.floor((Math.random() * (100 - 1 + 1)) + 1));

    }

    return arreglo;
}

var container = document.getElementById("ejercicio3");
var respuesta = document.createElement("span");
respuesta.innerHTML = "La cantidad de datos que contendra el Arreglo es : " + n + ". Y el arreglo generado es: [" + cargarArregloAzar() + "]" ;
container.appendChild(respuesta);