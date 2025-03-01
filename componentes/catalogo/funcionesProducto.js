import { carrito } from "./data.js";  

function resaltarProducto() {
    let boton = document.createElement('button');
    boton.className = "e-resaltar"; 
    boton.textContent = "Resaltar";

    boton.addEventListener("click", function(event) {
        let producto = event.target.closest('.producto-item'); 
        if (producto) {
            let nombreProducto = producto.querySelector('.nombre').textContent;

            const isSelected = producto.classList.contains('seleccionado');
            
            if (isSelected) {
                producto.classList.remove('seleccionado');
                const index = carrito.indexOf(nombreProducto);
                if (index > -1) {
                    carrito.splice(index, 1);  // Eliminar del carrito
                }
            } else {
                producto.classList.add('seleccionado');
                carrito.push(nombreProducto);
            }

            let numero = document.querySelector('.Numeros');
            numero.innerText = carrito.length;

            let eliminarBtn = eliminarProducto();
            producto.querySelector('.precio-container').replaceChild(eliminarBtn, boton);
        }
    });

    return boton;
}

function eliminarProducto() {
    let boton = document.createElement('button');
    boton.className = "e-eliminar";
    boton.textContent = "Eliminar";

    boton.addEventListener("click", function(event) {
        let producto = event.target.closest('.producto-item'); 
        if (producto) {
            producto.remove(); 
            
            // Esto actualiza el carrito
            let nombreProducto = producto.querySelector('.nombre').textContent;
            const index = carrito.indexOf(nombreProducto);
            if (index > -1) {
                carrito.splice(index, 1);  // Eliminar el producto del carrito
            }

            let numero = document.querySelector('.Numeros');
            numero.innerText = carrito.length;
        }
    });

    return boton;
}



function agregarProducto() {
    let boton = document.createElement('button');
    boton.className = "e-agregar";
    boton.textContent = "Agregar";

    boton.addEventListener("click", function(event) {
        let producto = event.target.closest('.producto-item'); 
        if (producto) {
            let nombreProducto = producto.querySelector('.nombre').textContent;
            carrito.push(nombreProducto);

            let numero = document.querySelector('.Numeros');
            numero.innerText = carrito.length;

            let eliminarBtn = eliminarProducto();
            producto.querySelector('.precio-container').replaceChild(eliminarBtn, boton);
        }
    });

    return boton;
}

export { agregarProducto, eliminarProducto, resaltarProducto };
