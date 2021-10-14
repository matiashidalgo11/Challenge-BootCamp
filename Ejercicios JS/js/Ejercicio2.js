function masUnoArray(arreglo){

    let nuevoArrelgo = new Array();

    for (let num of arreglo) nuevoArrelgo.push(num + 1);
    
    return nuevoArrelgo;
}

let arreglo = [1,2,3,4,5,7];
var container = document.getElementById("ejercicio2");
var respuesta = document.createElement("span");
respuesta.innerHTML = "Array Original: [" + arreglo + "] . Array + 1: [" + masUnoArray(arreglo) + "]" ;
container.appendChild(respuesta);