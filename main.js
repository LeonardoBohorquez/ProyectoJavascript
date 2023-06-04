document.addEventListener('DOMContentLoaded', function() {
  let inventario = [];

  let btnRegistro = document.getElementById('boton-registro');
  let btnBuscar = document.getElementById('boton-buscar');

  let main = document.getElementById('main');

  let formularioItem = document.getElementById('formulario-item');
  let nombreItem = document.getElementById('nombre-item');
  let precioItem = document.getElementById('precio-item');
  let cantidadItem = document.getElementById('cantidad-item');
  let btnGuardar = document.getElementById('guardar');
  let btnCerrar = document.getElementById('cerrar');

  btnRegistro.addEventListener('click', function() {
    formularioItem.style.top = '10%';
  });

  btnCerrar.addEventListener('click', function() {
    formularioItem.style.top = '-50%';
  });

  btnGuardar.addEventListener('click', function() {
    let nombreItemValor = nombreItem.value;
    let precioItemValor = parseFloat(precioItem.value);
    let cantidadItemValor = parseInt(cantidadItem.value);

    inventario.push({
      nombre: nombreItemValor,
      precio: precioItemValor,
      cantidad: cantidadItemValor
    });

    sessionStorage.setItem('inventario', JSON.stringify(inventario));

    main.innerHTML = ''; // Limpiamos el contenido existente en el main

    let storedInventario = JSON.parse(sessionStorage.getItem('inventario'));

    storedInventario.forEach(function(item) {
      let itemDiv = document.createElement('div');
      let titulo = document.createElement('h2');
      let parrafoPrecio = document.createElement('p');
      let parrafoCantidad = document.createElement('p');
      let parrafoInventario = document.createElement('p');
      let btnEliminar = document.createElement('button');

      itemDiv.classList.add('item');
      titulo .classList.add('titulo-item');
      btnEliminar.classList.add('eliminar');

      titulo.textContent = item.nombre;
      parrafoPrecio.textContent = 'Precio del item: ' + item.precio + '$';
      parrafoCantidad.textContent = 'Cantidad registrada: ' + item.cantidad;
      parrafoInventario.textContent = 'Precio del inventario: ' + (item.precio * item.cantidad) + '$';
      btnEliminar.textContent = 'Eliminar';

      itemDiv.appendChild(titulo);
      itemDiv.appendChild(parrafoPrecio);
      itemDiv.appendChild(parrafoCantidad);
      itemDiv.appendChild(parrafoInventario);
      itemDiv.appendChild(btnEliminar)
      main.appendChild(itemDiv);
    });

    nombreItem.value = '';
    precioItem.value = '';
    cantidadItem.value = '';
  });
});

  