// Formulario Proyecto//
const proyecto = document.getElementById("proyecto");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const organizacion = document.getElementById("organizacion");
const terminosycondiciones = document.getElementById("terminosycondiciones");
// llamado de formulario e inputs//
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (proyecto.value.length < 1 || proyecto.value.trim() == "") {
    //mostrarMensajeError("proyecto", "Nombre no valido*");//
    alert("Nombre no valido*");
    return false;
  }
  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    alert("Nombre no valido*");
    return false;
  }
  if (email.value.length < 1 || email.value.trim() == "") {
    alert("Correo no valido*");
    return false;
  }
  if (organizacion.value.length < 1 || organizacion.value.trim() == "") {
    alert("Organización no valida*");
    return false;
  }
  if (!terminosycondiciones.checked) {
    alert("Debe aceptar los términos y condiciones*");
    return false;
  }
  else {
    alert("Datos guardados con exito a continuación diligencie la información de su proyecto");
  }
  return condicion;
}
function enviarFormulario() {
  window.location.replace("proyecto.html");
}
