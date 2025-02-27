import { mostrarMenu } from "./componentes/header/header.js";
import { cargarProductos } from "./componentes/catalogo/catalogo.js";

let DOM = document.querySelector("#root");

function iniciarAPP(){
    let d1 = document.createElement('div');
    d1.className = "di-v1";

    d1.appendChild(mostrarMenu());  
    d1.appendChild(cargarProductos()); 

    return d1;
}

DOM.appendChild(iniciarAPP());
