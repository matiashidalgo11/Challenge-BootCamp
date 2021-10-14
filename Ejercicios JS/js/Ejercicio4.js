export function ordenarArray(arreglo){

    for(let i = 0; i < arreglo.length; i++){
        
        let clave = arreglo[i];
        let posAnt = i - 1;

        while(posAnt >= 0 && clave < arreglo[posAnt] ){

            arreglo[posAnt + 1] = arreglo[posAnt];
            posAnt--;
        }

        arreglo[posAnt + 1] = clave;
        
    }

    return arreglo;

}

let ar = [7,8,1,2,5,4,6];
var container = document.getElementById("ejercicio4");
var respuesta = document.createElement("span");
respuesta.innerHTML = "Array Original: [" + [7,8,1,2,5,4,6] + "] . Array Ordenado: [" + ordenarArray(ar) + "]" ;
container.appendChild(respuesta);