
function CantidadMayusculas(palabra){

    let contador = 0;

    if(typeof palabra !== "string") return console.error("El dato pasado por parametro no es valido. Ingrese una String");

    for(let i = 0; i < palabra.length; i++){
        if(palabra[i] === palabra[i].toUpperCase()) contador++;
    }

    return contador;
}

let palabra = "HOLAaaaA";
var container = document.getElementById("ejercicio1");
var respuesta = document.createElement("span");
respuesta.innerHTML = "La cantidad de letras Mayusculas que tiene la palabra " + palabra + " son : " + CantidadMayusculas(palabra) ;
container.appendChild(respuesta);