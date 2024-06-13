 // Aquí tu código


 /*const boton = document.getElementById('agregar');
 const lista = document.getElementById('lista')

 boton.addEventListener('click', function() {
    const listaUno = prompt("Tu lista");
    if (listaUno) {
        const li = document.createElement('li');
        li.textContent = listaUno;
        lista.appendChild(li);
    }
});


const boton = document.getElementById('agregar');
const lista = document.getElementById('lista')

boton.addEventListener('click', function() { // Anónima, se llama después de ese evento
console.log('click') //Veo que funciona y me arroja los clikc en la consola
});
*/

//DATA

const boton = document.getElementById('agregar');
const lista = document.getElementById('lista')


function addElement () {
const nuevoElemento = prompt('Introduce un nuevo elemento')
if (nuevoElemento) {
    let lista = document.createElement('li') //console.log(lista) = <li></li>
    lista.textContent = nuevoElemento
    lista.appendChild(li)
} else {
    alert('Eswcribe algo por Dios')
}
}

boton.addEventListener('click', addElement) // 1 el evento y el segundo es la función

// OTRO 
const boton = document.getElementById('agregar');
const lista = document.getElementById('lista')


function addElement () {
const nuevoElemento = prompt('Introduce un nuevo elemento')
if (nuevoElemento) {
    lista.insertAdjacentHTML('beforeend', '<li><p>' + nuevoElemento + '</p></li>')
   
} else {
    alert('Eswcribe algo por Dios')
}
}

boton.addEventListener('click', addElement)



/* OTRO DATA
const boton = document.getElementById('agregar');
const lista = document.getElementById('lista')


function addElement () {
    let cuadrotexto = document.getElementById('cuadrotexto').value
    console.log(cuadrotexto)
    let li = document.createElement('li')
    li.textContent = cuadrotexto
    lista.appendChild(li)
    document.getElementById('cuadrotexto').value = '' //Borra el contenido en el cuadro del texto
}

boton.addEventListener('click', addElement)
*/















