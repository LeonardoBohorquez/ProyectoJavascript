//Esperamos que cargue todo el DOM
document.addEventListener('DOMContentLoaded', function() {
//Creamos el array de usuarios
let usuarios = [{
  usuario: 'coderhouse',
  contraseña: 'coderhouse'
}];    
//Creamos una funcion de registro
function registro() {
    let registroUsuario     = document.getElementById('registro-usuario');
    let registroContraseña  = document.getElementById('registro-contraseña');
    let repetirContraseña   = document.getElementById('repetir-contraseña');
    let btnRegistrar        = document.getElementById('registrar');
    let mensajeDos          = document.getElementById('mensaje-dos');
    let formularioRegistro  =  document.getElementById('formulario-registro')
    //Evento en el boton de registrar
    btnRegistrar.addEventListener('submit', function(event) {
      event.preventDefault();
      let registroUsuarioValor    = registroUsuario.value.trim();
      let registroContraseñaValor = registroContraseña.value.trim();
      let repetirContraseñaValor  = repetirContraseña.value.trim();
      //Validacion de campos
      if (registroUsuarioValor === '' || registroContraseñaValor === '' || repetirContraseñaValor === '') {
        Swal.fire({
          icon: 'error',
          title: 'Complete los campos',
          confirmButtonColor: '#3085d6',
        })
        return;
      }
      //Validacion de coincidencia de contraseña
      if (registroContraseñaValor !== repetirContraseñaValor) {
        Swal.fire({
          icon: 'error',
          title: 'Las contraseñas no coinciden',
          confirmButtonColor: '#3085d6',
        })
        return;
      }
      //Crear un objeto usuario con los valores ingresados
      let nuevoUsuario = {
        usuario: registroUsuarioValor,
        contraseña: registroContraseñaValor
      };
      //Agregar el nuevo usuario al array de usuarios
      usuarios.push(nuevoUsuario);
      //Limpiar los campos del formulario
      //Creacion de usuario dem anera exitosa
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario creado exitosamente',
        showConfirmButton: false,
        confirmButtonColor: '#3085d6',
        timer: 2000
      })
        console.log(usuarios);
        formularioRegistro.reset();
    });
  }
  //Creamos una funcion para la animacion del cuadro de registro
function animacionRegistro(){ 
      //Creamos las variables
        const btnRegistro   = document.getElementById('registro'); 
        const btnVolver     = document.getElementById('volver'); 
        const registro      = document.getElementById('cuadro-registro'); 
      //Creamos un e vento para mostrar el cuadro de registro agregando una clase visible
        btnRegistro.addEventListener('click', function(){  
            registro.classList.add('visible'); 
            let mensaje     = document.getElementById('mensaje');
            mensaje.textContent = '';
            mensaje.style.backgroundColor = "";
            formulario.reset();

        })
      //Creamos un evento para ocultar el cuadro de registro removiendo la clase visible
        btnVolver.addEventListener('click', function(){
            registro.classList.remove('visible'); 
        })
  }
    //Creamos una funcion para el login
function login(){
      //Creamos las variables
        let formulario  = document.getElementById('formulario');
        let usuario     = document.getElementById('usuario');
        let contraseña  = document.getElementById('contraseña');
        let mensaje     = document.getElementById('mensaje');
      //Agregamos un evento para el formulario
        formulario.addEventListener('submit', function(event) {
          event.preventDefault();
          let usuarioValor = usuario.value.trim();
          let contraseñaValor = contraseña.value;
          //Validacion de campos simple
          if (usuarioValor === '' || contraseñaValor === '') {
            Swal.fire({
              icon: 'error',
              title: 'Complete los campos',
              confirmButtonColor: '#3085d6',
            })
            return;
          }
          //Verificacion de si existe el usuario en el array
          let usuarioEncontrado = usuarios.find(function(user) {
            return user.usuario === usuarioValor && user.contraseña === contraseñaValor;
          });
          if (usuarioEncontrado) {
            //Usuario y contraseña válidos, redirigir a otra página
            window.location.href = 'main.html';
            formulario.reset();
          } else {
            //Mensaje si el usuario no existe
            Swal.fire({
              icon: 'error',
              title: 'El usuario no existe',
              confirmButtonColor: '#3085d6',
            })
            formulario.reset();
          }
        });
      }
    registro();
    animacionRegistro();
    login();
})

 
