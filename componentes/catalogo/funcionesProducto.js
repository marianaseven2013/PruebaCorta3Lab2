function resaltarProducto(){
    let rs = document.createElement('div');
    rs.className = "r-resaltar";

    return rs;
}
function eliminarProducto(){
    let boton = document.createElement('button');
    boton.className = "e-eliminar";
    boton.textContent = "Eliminar";

    boton.addEventListener("click", function(event) {
        let producto = event.target.closest('.producto-item'); 
        if (producto) {
            producto.remove(); 
        }
    });

    return boton;
}



export {resaltarProducto, eliminarProducto}