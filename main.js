
let inventario = JSON.parse(localStorage.getItem('inventario')) || []
const formularioItem = document.getElementById('formulario-item')
const contendorItems = document.getElementById('contenedor-items')

async function cargarItems(){
  try {
    const response = await fetch('items.json');
    const data = await response.json();
    inventario = data.items;
    id = inventario.length > 0 ? inventario[inventario.length - 1].id + 1 : 0;
    mostrarItems();
    numeroItems();
    InventarioLocalStore();
  } catch (error) {
    console.log('Error al cargar los items del archivo JSON:', error);
  }
}
function animacionRegistro(){
  const btnRegistro = document.getElementById('boton-registro')
  const btnCerrar = document.getElementById('cerrar')
  btnRegistro.addEventListener('click', ()=>{
    formularioItem.style.top = '10%'
  })
  btnCerrar.addEventListener('click', ()=>{
    formularioItem.style.top = '-50%'
    formularioItem.reset();
  })
}
function numeroItems(){
  const numeroItems = document.getElementById('numero-item')
  numeroItems.textContent = inventario.length
}
function crearItems(){
  formularioItem.addEventListener('submit', (e) =>{
    e.preventDefault();
    const nombreItem    = e.target.children['nombre-item'].value.toUpperCase();
    const precioItem    = e.target.children['precio-item'].value
    const cantidadItem  = e.target.children['cantidad-item'].value
    const item = {
      id,
      nombreItem,
      precioItem,
      cantidadItem,
      PrecioInventario: precioItem * cantidadItem
    }
    if(nombreItem != "" && precioItem != "" && cantidadItem != ""){
      inventario.push(item)
      id++
      console.log(inventario.length)
      console.log(inventario)
      formularioItem.reset();
      InventarioLocalStore();
      mostrarItems();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Item creado exitosamente',
        showConfirmButton: false,
        confirmButtonColor: '#3085d6',
        timer: 1500
      })

    }
   const primerInput = document.getElementById('nombre-item')
         primerInput.focus();
  })
}
function InventarioLocalStore(){
  localStorage.setItem('inventario', JSON.stringify(inventario))
}
function mostrarItems(){
  contendorItems.innerHTML = '';
  inventario.forEach((item, index) => {
    contendorItems.innerHTML += 
    `
      <div class="item">
        <h2 class="titulo-item">${item.nombreItem}</h2>
        <p><strong>Precio unitario: </strong>${item.precioItem}$</p>
        <p><strong>Cantidad: </strong>${item.cantidadItem}</p>
        <p><strong>Precio total registrado: </strong>${item.PrecioInventario}$</p>
        <button type="button" class="eliminar" onclick="eliminarItem(${index})">Eliminar</button>
        <button type="button" class="editar" onclick="editarItem(${index})">Editar</button>
      </div>
     `
     numeroItems()
  })
}
function eliminarItem(index) {
  Swal.fire({
    title: '¿Seguro que quieres eliminar el item?',
    text: "¡No podras recuperarlo despues!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#F01601',
    cancelButtonColor: '#3CBD56',
    confirmButtonText: 'Si, Borralo'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title:'BORRADO',
        text:'Item borrado del inventario',
        icon:'success',
        confirmButtonColor: '#3085d6',
      })
      inventario.splice(index, 1);
      InventarioLocalStore();
      id--
      mostrarItems();
      numeroItems()
    }
  })
}
function editarItem(index){
  const item = inventario[index]; // Obtener el item del inventario por su índice
  // Realizar acciones para mostrar un formulario o ventana modal de edición
  // y permitir al usuario modificar los datos del item
  
  // Ejemplo: Mostrar una ventana modal con un formulario de edición
  Swal.fire({
    title: 'Editar Item',
    html: `
      <div class="grupo-input">
        <label for="editar-nombre-item" class="text-input">Nombre:</label>
        <input type="text" class="editar-nombre-item" id="editar-nombre-item" value="${item.nombreItem}">
      </div>
      <div class="grupo-input">
      <label for="editar-nombre-item" class="text-input">Precio:</label>
      <input type="number" class="editar-precio-item" id="editar-precio-item" value="${item.precioItem}">
      </div>
      <div class="grupo-input">
      <label for="editar-nombre-item" class="text-input">Cantidad:</label>
      <input type="number" class="editar-cantidad-item" id="editar-cantidad-item" value="${item.cantidadItem}">
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: 'Actualizar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: 'green',
    cancelButtonColor: '#d33',
  }).then((result) => {
    if (result.isConfirmed) {
      // Obtener los valores editados del formulario
      const nombreItemEditado = document.getElementById('editar-nombre-item').value;
      const precioItemEditado = document.getElementById('editar-precio-item').value;
      const cantidadItemEditado = document.getElementById('editar-cantidad-item').value;

      // Realizar las validaciones necesarias antes de guardar los cambios
      if (nombreItemEditado !== "" && precioItemEditado !== "" && cantidadItemEditado !== "") {
        // Actualizar los datos del item en el inventario
        item.nombreItem = nombreItemEditado.toUpperCase();
        item.precioItem = parseFloat(precioItemEditado);
        item.cantidadItem = parseInt(cantidadItemEditado);
        item.PrecioInventario = item.precioItem * item.cantidadItem;

        // Actualizar el inventario en localStorage
        InventarioLocalStore();

        // Volver a mostrar los items actualizados
        mostrarItems();

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item editado exitosamente',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Todos los campos deben estar completos',
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  });
}
function mostrarTodo(){
  const mostrarTodo = document.getElementById('mostrar-todo')
        mostrarTodo.addEventListener('click', ()=>{
          mostrarItems()
        })
}
function eliminarTodo(){
  const btnEliminarTodo = document.getElementById('eliminar-todo')
        btnEliminarTodo.addEventListener('click', ()=>{
          if(contendorItems.childNodes.length > 0){
            Swal.fire({
              title: '¿Seguro que quieres eliminar todo el inventario?',
              text: "¡No podras recuperar nada!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#F01601',
              cancelButtonColor: '#3CBD56',
              confirmButtonText: 'Si, Borrar todo'
            }).then((result) => {
              if (result.isConfirmed) {
                contendorItems.innerHTML = ''
                inventario.splice(0)
                localStorage.clear()
                id = 0
                numeroItems()
                Swal.fire({
                  title:'BORRADO',
                  text:'Todo el inventario se ha borrado',
                  icon:'success',
                  confirmButtonColor: '#3085d6',
                })
              }
            })
          }else{
            Swal.fire({
              title: 'No hay nada para borrar',
              confirmButtonColor: '#3085d6',
            })
          }
          })
}
function buscarItem(){
  const btnBuscar = document.getElementById('boton-buscar');
  btnBuscar.addEventListener('click', function() {
    Swal.fire({
      title: 'Nombre del item a buscar',
      input: 'text',
      confirmButtonText: 'Buscar',
      confirmButtonColor: 'green',
      cancelButtonText:'Cancelar',
      cancelButtonColor: 'red',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Debes ingresar algo';
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const buscar = result.value.toUpperCase();
        const buscando = inventario.filter(item => item.nombreItem.startsWith(buscar));
        if (buscando.length > 0) {
          console.log(buscando);
          contendorItems.innerHTML = '';
          buscando.forEach((item, index) => {
            contendorItems.innerHTML += 
              `
                <div class="item">
                  <h2 class="titulo-item">${item.nombreItem}</h2>
                  <p><strong>Precio unitario: </strong>${item.precioItem}$</p>
                  <p><strong>Cantidad: </strong>${item.cantidadItem}</p>
                  <p><strong>Precio total registrado: </strong>${item.PrecioInventario}$</p>
                  <button type="button" class="eliminar" onclick="eliminarItem(${index})">Eliminar</button>
                </div>
              `;
          });
        } else {
          Swal.fire({
            title: 'No se encontro nada con el nombre indicado',
            confirmButtonColor: '#3085d6',
          });
        }
      }
    });
  });
}

cargarItems();
animacionRegistro()
numeroItems()
crearItems()
buscarItem()
mostrarTodo()
eliminarTodo()


