let button = document.getElementById("BtnRegistrarme");
button.addEventListener("click", function() {
     let inputproyecto = document.getElementById("proyecto");
     let inputnombre = document.getElementById("nombre");
     let inputemail = document.getElementById("email");
     let inputorganizacion = document.getElementById("organizacion");
     
     if(inputproyecto.value == ""){
          alert("Error: El proyecto esta vacio.");
     }
     if(inputnombre.value == ""){
          alert("Error: El nombre esta vacio.");
     }
     if(inputemail.value == ""){
          alert("Error: El email esta vacio.");
     }
     if(inputorganizacion.value == ""){
          alert("Error: La organización esta vacia.");
     }
     window.location.replace("proyecto.html");
     alert("Datos almacenados con éxito, continua con el registro de tu proyecto");
});
     
