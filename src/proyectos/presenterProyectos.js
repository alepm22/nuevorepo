import Proyecto from "../Proyecto.js";

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const proyectosForm = document.querySelector("#proyectos-form");
const botonRegresar = document.querySelector("#boton-regresar");
const div=document.querySelector("#resultado-div")


proyectosForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const contenidoTitulo = titulo.value;
  const contenidoDescripcion = descripcion.value;
  const proyecto = new Proyecto();
  if (proyecto.datosFormulariosSonValidos(contenidoTitulo, contenidoDescripcion)==true)
  {
    const url = `index.html?Titulo=${encodeURIComponent(contenidoTitulo)}&Descripcion=${encodeURIComponent(contenidoDescripcion)}`;

    window.location.href = url;
  }
  else{
    div.innerHTML = "<p>" + "Llene todos los campos" + "</p>";
  }
  
});
botonRegresar.addEventListener("click", function() {
  window.location.href = "index.html";
});
