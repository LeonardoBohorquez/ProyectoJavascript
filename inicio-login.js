//Esperamos que cargue todo el DOM
document.addEventListener('DOMContentLoaded', function() {

//Creamos el array de usuarios
let usuarios = [{
  usuario: 'coderhouse',
  contraseña: 'coderhouse'
}];    

//Creamos una funcion de registro
function registro() {
    let registroUsuario = document.getElementById('registro-usuario');
    let registroContraseña = document.getElementById('registro-contraseña');
    let repetirContraseña = document.getElementById('repetir-contraseña');
    let btnRegistrar = document.getElementById('registrar');
    let mensajeDos = document.getElementById('mensaje-dos');

    //Evento en el boton de registrar
    btnRegistrar.addEventListener('click', function() {
      let registroUsuarioValor = registroUsuario.value.trim();
      let registroContraseñaValor = registroContraseña.value.trim();
      let repetirContraseñaValor = repetirContraseña.value.trim();
      
      //Validacion de campos
      if (registroUsuarioValor === '' || registroContraseñaValor === '' || repetirContraseñaValor === '') {
        mensajeDos.textContent = 'Por favor completar todos los campos'
        mensajeDos.style.color = 'red';
        return;
      }
      //Validacion de coincidencia de contraseña
      if (registroContraseñaValor !== repetirContraseñaValor) {
        mensajeDos.textContent = 'Las contraseñas no coinciden'
        mensajeDos.style.color = 'red';
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
      registroUsuario.value = '';
      registroContraseña.value = '';
      repetirContraseña.value = '';

      //Creacion de usuario dem anera exitosa
      mensajeDos.textContent = 'Usuario creado exitosamente'
      mensajeDos.style.color = 'green';
      console.log(usuarios);
    });
  }
    function animacionRegistro(){ /* */
        const btnRegistro   = document.getElementById('registro'); /* Boton de registro en el login */
        const btnVolver     = document.getElementById('volver'); /* Boton de "volver" en el formulario de registro */
        const registro      = document.getElementById('cuadro-registro'); /* Cuadro de registro de usuario oculto */

        btnRegistro.addEventListener('click', function(){  
            registro.classList.add('visible'); /* Colocamos la clase "Visible" en el cuadro de formulario de registro para que se muestre*/

        })
        btnVolver.addEventListener('click', function(){
            registro.classList.remove('visible'); /* quitamos la clase "Visible" en el cuadro de formulario de registro para que no se muestre*/
        })
    }
    function login() {
        let formulario = document.getElementById('formulario');
        let usuario = document.getElementById('usuario');
        let contraseña = document.getElementById('contraseña');
        let mensaje = document.getElementById('mensaje');
      
        formulario.addEventListener('submit', function(event) {
          event.preventDefault();
      
          let usuarioValor = usuario.value.trim();
          let contraseñaValor = contraseña.value;
      
          if (usuarioValor === '' || contraseñaValor === '') {
            mensaje.textContent = 'Por favor completar todos los campos'
            mensaje.style.color = "red";
            return;
          }
      
          let usuarioEncontrado = usuarios.find(function(user) {
            return user.usuario === usuarioValor && user.contraseña === contraseñaValor;
          });
      
          if (usuarioEncontrado) {
            // Usuario y contraseña válidos, redirigir a otra página
            window.location.href = 'main.html';
          } else {
            mensaje.textContent = 'Usuario no existe'
            mensaje.style.color = "red";
          }
        });
      }


    registro();
    animacionRegistro();
    login();
})

 
