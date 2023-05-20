let inventario = [ /* Array de un invetario */
    {nombre:"TK-3182",cantidad: "500",precio: "85"}, 
    {nombre:"TK-6327",cantidad: "100",precio: "100"}, 
    {nombre:"TK-5282K",cantidad: "50",precio: "65"},
    {nombre:"TK-5282Y",cantidad: "50",precio: "65"},
    {nombre:"TK-5282C",cantidad: "50",precio: "65"},    /* Relleno de objetos en el array */
    {nombre:"TK-5282M",cantidad: "50",precio: "65"},
    {nombre:"M3655",cantidad: "10",precio: "700"},
    {nombre:"TASKALFA",cantidad: "100",precio: "1000"},
    {nombre:"M6235",cantidad: "20",precio: "800"}
];                                                        
/* CREACION DE ITEM */
let creacionItem = confirm('Deseas ingresar un item al invetario?')   /* Confirmacion para crear un item */

while(creacionItem === true){                          

    let item = {     

        nombre:"",                                                      
        cantidad: "",
        precio: ""

    }

    validar = function(){       /* Ingreso de requisitos para la creacion de un item */ 

            while(item.nombre === ''){

                alert('Ingrese el nombre del item')

                item.nombre = (prompt(""))
            }
            while(item.cantidad === ''){

                alert('Ingrese la cantidad del item')

                item.cantidad = parseInt(prompt(""))
            }
            while(item.precio === ''){

                alert('Ingrese el precio del item')

                item.precio =  parseInt(prompt(""))
            }
            
            inventario.push(item) /* subida del item creado al array */
        }
    
    validar();

    console.log(inventario)

    creacionItem = confirm('¿Deseas ingresar otro item al enventario?') /* confirmacion si desea crear otro item */
}

/* BUSCAR ITEM EN EL ARRAY */
let search = confirm('¿Deseas buscar un item?') /* Confirmacion de si desea buscar un item en el invetario*/
while(search){
 
       let buscarItem = prompt('¿Que item deseas buscar?') /* Intruduccion del nombre a buscar */

         let indice = inventario.findIndex(function(item){

        return item.nombre === buscarItem

       });

       if(indice === -1){

            alert('El item que esta buscando no se encuentra en inventario') /* En caso de no encontrar el item en el invetario */

            search = confirm('¿Quieres volver intentar?')

            if (!search) {

                break; 

              }
       }else{

            alert('El item que busca esta en la posicion numero ' + indice + ' del array') /* Posicion del item en el array en caso de que se encuentre el item */

            search = confirm('¿Quieres buscar otro item?') /* Confirmacion de querer buscar otro item */
       }
  
}
    
/* BUSCAR ITEM POR NOMBRE EN EL ARRAY */
let filtro = confirm('¿Desea filtrar el invetario por nombre?') /* Confirmacion de entrada al filtro */
while(filtro === true){
    let filtrar = prompt('ingrese el nombre para filtrar')
    let filtradoPorNombre = inventario.filter(function(objeto) {
        return objeto.nombre.startsWith(filtrar);
    });
    
    console.log("Filtrado por nombre:");
    console.log(filtradoPorNombre);

    filtro = confirm('¿Quieres filtrar nuevamente?')
}


   
