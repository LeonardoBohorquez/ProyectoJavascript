
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
        let formulario  = document.getElementById('formulario');
        let usuario     = document.getElementById('usuario');
        let contraseña  = document.getElementById('contraseña');
        let enviar      = document.getElementById('enviar');
    
        formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let usuarioValor = usuario.value.trim();
        let contraseñaValor = contraseña.value;
            
        if (usuarioValor === '' && usuarioValor.length <= 0) {
            confirm('Ingrese un usuario')
        }
        if(contraseñaValor === '' && contraseñaValor.length <= 0 ){
            confirm('debe agregar una contraseña')
        }
        if(usuarioValor && contraseñaValor){
            confirm('Has iniciado sesion')
        }
            
        });
    }
    function registro(){
        let formularioRegistro = document.getElementById('formulario-registro');
        let registroUsuario = document.getElementById('usuario-registro');

        formularioRegistro.addEventListener('submit', function(event){
            event.preventDefault();
            confirm('esta funcionando papu')
        })
        
    }


    registro();
    animacionRegistro();
    login();
 

 
