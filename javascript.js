document.getElementById("formulario").addEventListener("submit", function(event) {
event.preventDefault();

let usuario     = document.getElementById('usuario').value.trim();
let contraseña  = document.getElementById('contraseña').value;

console.log(usuario.length);
console.log(contraseña.length);

})

