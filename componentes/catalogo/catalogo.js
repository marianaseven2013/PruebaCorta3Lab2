import { producto } from "./itemProducto.js";  
import { eliminarProducto } from "./funcionesProducto.js";  
import { dataProductos } from "./data.js";  

function cargarProductos() {
    let contenedor = document.createElement('div');
    contenedor.className = "c-producto";

    let imagenes = [
        "https://i.pinimg.com/474x/7e/72/0d/7e720d382439b7ce3ce37cd38ee39c48.jpg",
        "https://i.pinimg.com/236x/96/48/f7/9648f75a783c228ddfba1450c3e47df7.jpg",
        "https://i.pinimg.com/236x/56/a7/ac/56a7acf91eb748fadd6663c5dfd2dd69.jpg",
        "https://i.pinimg.com/236x/f2/bc/8e/f2bc8ea4e595f8f1fe01b49ded404931.jpg",
        "https://i.pinimg.com/736x/83/1a/2e/831a2ef4734c4029325fa1e7ff3ff7fd.jpg",
        "https://i.pinimg.com/236x/78/e2/4c/78e24c0821b5af687b08e20e6749c83f.jpg",
        "https://i.pinimg.com/236x/87/92/77/879277b6e4fdb0c8d6b408b87cb94d30.jpg",
        "https://i.pinimg.com/474x/8c/20/4b/8c204bf6548006fe7fd53d3aefc08f9e.jpg",
        "https://i.pinimg.com/236x/92/ad/03/92ad03ae1fcbc8bc94c3cc7570e0dbc6.jpg",
        "https://i.pinimg.com/236x/98/8b/99/988b992000542c014c212144b8b7fdfd.jpg"
    ];

    let precios = [
        "Q 10.00", "Q 15.00", "Q 20.00", "Q 25.00", "Q 30.00",
        "Q 35.00", "Q 40.00", "Q 45.00", "Q 50.00", "Q 55.00"
    ];

    dataProductos.forEach((nombre, index) => {
        let item = document.createElement('div');
        item.className = "producto-item";

        let productoElemento = producto(nombre, imagenes[index], precios[index]);

        item.appendChild(productoElemento);

        item.addEventListener('click', function() {
            this.classList.toggle('seleccionado');
        });

        contenedor.appendChild(item);
    });

    return contenedor;
}

export { cargarProductos };
