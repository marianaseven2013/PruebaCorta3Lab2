function mostrarMenu(){
    let mmmenu = document.createElement('div');
    mmmenu.className = "m-menu";

   let loogo = document.createElement('img');
    loogo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAzCy3sSEv3ORT4IVh9aMqW8EsbF-LWe6AQ&s";
    mmmenu.appendChild(loogo) 
    
    let nombre = document.createElement('h1');
    nombre.innerText = "Productos Marcados";
    mmmenu.appendChild(nombre)

    let numero = document.createElement('div');
    numero.innerText = "5"
    numero.className = "Numeros";

    mmmenu.appendChild(numero)

  

    return mmmenu;
}

export {mostrarMenu}