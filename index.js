let button = document.getElementById("BtnRegistrarme");
button.addEventListener("click", function() {
     let inputproyecto = document.getElementById("proyecto");
     let inputnombre = document.getElementById("nombre");
     let inputemail = document.getElementById("email");
     let inputorganizacion = document.getElementById("organizacion");
     
     if(inputproyecto.value == ""){
          alert("Error: El proyecto esta vacio.");
     }
     else if(inputnombre.value == ""){
          alert("Error: El nombre esta vacio.");
     }
     else if(inputemail.value == ""){
          alert("Error: El email esta vacio.");
     }
     else if(inputorganizacion.value == ""){
          alert("Error: La organización esta vacia.");
     }
     else{
          alert("Datos almacenados con éxito, continua con el registro de tu proyecto");
     }
});
     
