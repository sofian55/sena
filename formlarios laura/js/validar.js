function validar() {

    //validacion de seleccion de jornada
    var pulsado = false; //variable de comprobación
    var tipo_jor = document.formulario.opc; //array de elementos
    var elegido = -1; //número del elemento elegido en el array
    var opcion = document.formulario.condiciones; //acceso al checkbox condiciones
    for (i = 0; i < tipo_jor.length; i++) { //bucle de comprobación
        if (tipo_jor[i].checked == true) {
            pulsado = true
            elegido = i //número del elemento elegido en el array
        }
    }
    if (pulsado != true) { //mensaje de formulario válido
        swal("Oops!", "No has elegido ninguna Jornada. \n \n Elige un tipo de jornada a matricular para que el formulario pueda ser enviado", 'error');
        return false //el formulario no se envía.
    } //validacion de aceptacion de condiciones
   
    if (opcion.checked != true) { //botón seleccionado
        swal("Oops!", "El formulario no ha podido enviarse. \n \n Debe aceptar las condiciones para poder enviar el formulario", 'error');
        return false; //el formulario no se envia
    }     
    
    
    else { //mensaje de formulario no válido.
        miOpcion = tipo_jor[elegido].value
        swal("Perfecto","Has elegido la jornada: " + miOpcion + "\n \n El formulario ha sido enviado.",'success');   
    } 
   
}
