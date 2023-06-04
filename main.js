//Esperamos que cargue todo el DOM
document.addEventListener('DOMContentLoaded', function() {
  //Creamos un array
  let inventario = [];
  //Botones que usaremos
  let btnRegistro = document.getElementById('boton-registro');
  let btnBuscar = document.getElementById('boton-buscar');
  //Detectamos el main en el DOM
  let main = document.getElementById('main');
  //Creamos las variables del formulario
  let formularioItem = document.getElementById('formulario-item');
  let nombreItem = document.getElementById('nombre-item');
  let precioItem = document.getElementById('precio-item');
  let cantidadItem = document.getElementById('cantidad-item');
  let btnGuardar = document.getElementById('guardar');
  let btnCerrar = document.getElementById('cerrar');
  //Creamos un evento que baja el menu de registro de item
  btnRegistro.addEventListener('click', function() {
    formularioItem.style.top = '10%';
  });
  //Creamos un evento que sube el menu de registro de item
  btnCerrar.addEventListener('click', function() {
    formularioItem.style.top = '-50%';
  });
  //Creamos un evento para el boton de guardar el registro del item
  btnGuardar.addEventListener('click', function() {
    //Creamos las variables de los valores de los inputs
    let nombreItemValor = nombreItem.value;
    let precioItemValor = parseFloat(precioItem.value);
    let cantidadItemValor = parseInt(cantidadItem.value);
    //Guardamos los valores en el array Invetario
    inventario.push({
      nombre: nombreItemValor,
      precio: precioItemValor,
      cantidad: cantidadItemValor
    });
    //Guardamos el array en el sessionStore en formato JSON string
    sessionStorage.setItem('inventario', JSON.stringify(inventario));
    // Limpiamos el contenido existente en el main
    main.innerHTML = ''; 
    //Recuperamos el array del session Store en JSON pero lo transformamos nuevamente en un objeto
    let storedInventario = JSON.parse(sessionStorage.getItem('inventario'));
    //Revisamos cada elemento del array
    storedInventario.forEach(function(item) {
      //Creamos las etiquetas para el dom
      let itemDiv = document.createElement('div');
      let titulo = document.createElement('h2');
      let parrafoPrecio = document.createElement('p');
      let parrafoCantidad = document.createElement('p');
      let parrafoInventario = document.createElement('p');
      let btnEliminar = document.createElement('button');
      //Agregamos las clases a las etiquetadas
      itemDiv.classList.add('item');
      titulo .classList.add('titulo-item');
      btnEliminar.classList.add('eliminar');
      //Agregamos el contenido a las etiquetas
      titulo.textContent = item.nombre;
      parrafoPrecio.textContent = 'Precio del item: ' + item.precio + '$';
      parrafoCantidad.textContent = 'Cantidad registrada: ' + item.cantidad;
      parrafoInventario.textContent = 'Precio del inventario: ' + (item.precio * item.cantidad) + '$';
      btnEliminar.textContent = 'Eliminar';
      //Agregamos los elementos creados en el itemDiv
      itemDiv.appendChild(titulo);
      itemDiv.appendChild(parrafoPrecio);
      itemDiv.appendChild(parrafoCantidad);
      itemDiv.appendChild(parrafoInventario);
      itemDiv.appendChild(btnEliminar)
      //Agregamos el itemDiv dentro del main
      main.appendChild(itemDiv);
    });
    //Limpiamos el formulaios de registro de item
    nombreItem.value = '';
    precioItem.value = '';
    cantidadItem.value = '';
  });
});

  