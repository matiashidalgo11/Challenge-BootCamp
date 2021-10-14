import { ordenarArray } from './Ejercicio4.js';

function unirOrdenarArreglos(arregloUno, arregloDos){

    let union = arregloUno.concat(arregloDos);

    return ordenarArray(union);

}

var container = document.getElementById("ejercicio5");
var respuesta = document.createElement("span");
respuesta.innerHTML = "La union de los elementos de ambos vectores es: [" + unirOrdenarArreglos([1,2,3,4,5,6], [1,2,3,4,5,6]) + "]";
container.appendChild(respuesta);
