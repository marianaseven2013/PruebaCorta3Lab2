import { eliminarProducto } from "./funcionesProducto.js";

function producto(nombre, imagenSrc, precioTexto) {
    let ppc = document.createElement('div');
    ppc.className = "p-producto";

    let divImagen = document.createElement('div');
    divImagen.className = "imagen";
    let img = document.createElement('img');
    img.src = imagenSrc;
    img.alt = nombre;
    divImagen.appendChild(img);

    let nombreProducto = document.createElement('div');
    nombreProducto.className = "nombre";
    nombreProducto.textContent = nombre;

    let precioContainer = document.createElement('div');
    precioContainer.className = "precio-container";

    let precio = document.createElement('div');
    precio.className = "precio";
    precio.textContent = precioTexto;

    let botonEliminar = eliminarProducto();

    precioContainer.appendChild(precio);
    precioContainer.appendChild(botonEliminar);

    ppc.appendChild(divImagen);
    ppc.appendChild(nombreProducto);
    ppc.appendChild(precioContainer);

    return ppc;
}

export { producto };
