 // Aquí tu código


 const boton = document.getElementById('agregar');
 const lista = document.getElementById('lista')

 boton.addEventListener('click', function() {
    const listaUno = prompt("Tu lista");
    if (listaUno) {
        const li = document.createElement('li');
        li.textContent = listaUno;
        lista.appendChild(li);
    }
});

