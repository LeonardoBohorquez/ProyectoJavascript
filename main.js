
const inventario = JSON.parse(localStorage.getItem('inventario')) || []
const formularioItem = document.getElementById('formulario-item')
const contendorItems = document.getElementById('contenedor-items')
id = inventario.length > 0 ? inventario[inventario.length - 1].id + 1 : 0;


function animacionRegistro (){
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
function crearItems (){
  formularioItem.addEventListener('submit', (e) =>{
    e.preventDefault();

    const nombreItem = e.target.children['nombre-item'].value.toUpperCase();
    const precioItem = e.target.children['precio-item'].value
    const cantidadItem = e.target.children['cantidad-item'].value
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
    }

   const primerInput = document.getElementById('nombre-item')
         primerInput.focus();

  })
}
function InventarioLocalStore(){
  localStorage.setItem('inventario', JSON.stringify(inventario))
}
function mostrarItems() {
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
      </div>
     `
     numeroItems()
  })
}
function eliminarItem(index) {
  inventario.splice(index, 1);
  InventarioLocalStore();
  id--
  mostrarItems();
  numeroItems()
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
              title: '¿Seguro que quieres eliminar todo el invetario?',
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
                  txt:'Todo el inventario se ha borrado',
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

  const btnBuscar = document.getElementById('boton-buscar')

        btnBuscar.addEventListener('click', function(){
  
          const buscar = prompt('Introduzca el nombre del item a buscar').toUpperCase()
          const buscando = inventario.filter(item => item.nombreItem.startsWith(buscar))
          
          if(buscando.length > 0){
            console.log(buscando)
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
              `
    })
          }else{
            alert('no se encontro nada')
          }
        })
}

animacionRegistro()
numeroItems()
crearItems()
buscarItem()
mostrarItems()
mostrarTodo()
eliminarTodo()


