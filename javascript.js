
continuar = true;
while (continuar != false) {
    let nombreItem = prompt('Ingrese el nombre del item');
    if (nombreItem === '') {
        alert('Debe ingresar un nombre para el item')
    }else{
        console.log('El nombre del item es: ' + nombreItem)
        let precioItem = parseInt(prompt('Ingrese el precio del item'));
        if(precioItem === ''){
            alert('Debe ingresar un precio para el item');
        }else{
            console.log('El precio del item es de: ' + precioItem + '$')
            let cantidadItem = parseInt(prompt('Ingrese cantidad a registrar del item'));
            if(cantidadItem === ''){
                alert('Debe ingresar una cantidad a registrar')
            }else{
                console.log('La cantidad registrada es de: ' + cantidadItem + ' UND')
                let valorInventario = precioItem * cantidadItem;
                alert('Se ha registrado un item con el nombre de ' + nombreItem + ', con un precio por unidad de ' + precioItem + '$ con una cantidad registrada de ' + cantidadItem + ' UND, teniendo un valor de invetario de ' + valorInventario + '$')
                let confirmar = confirm('¿Desea agregar otro item?')
                if(confirmar == true){
                    continuar = true;
                }else{
                    continuar = false;
                }
            }
        }
    }
}