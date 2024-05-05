import { crearProyecto, agregarProyectoAProyectos, mostrarProyectos, eliminarProyecto } from "./moduloIndex.js";

const botonAgregarProyecto = document.querySelector("#boton-agregar-proyecto");
let proyectos = JSON.parse(localStorage.getItem("proyectos")) || [];
const parametros = new URLSearchParams(window.location.search);
const titulo = parametros.get("Titulo");
const descripcion = parametros.get("Descripcion");

const nuevaURL = window.location.pathname;
window.history.replaceState({}, document.title, nuevaURL);
let nuevoProyecto = crearProyecto(titulo, descripcion);
agregarProyectoAProyectos(nuevoProyecto, proyectos);
localStorage.setItem("proyectos", JSON.stringify(proyectos));
mostrarProyectos(proyectos);
const proyectosContainer = document.createElement("div");
proyectos.forEach((proyecto) => {
  const proyectoElement = document.createElement("div");
  proyectoElement.innerHTML = `<h2>${proyecto.titulo}</h2><p>${proyecto.descripcion}</p>`;
  

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.addEventListener("click", () => {
    eliminarProyecto(proyecto,proyectos)
    localStorage.setItem("proyectos", JSON.stringify(proyectos));
    proyectoElement.remove();
  });
  proyectoElement.appendChild(deleteButton);
  
  const agregarMetricaButton = document.createElement("button");
  agregarMetricaButton.textContent = "Agregar Métrica";
  agregarMetricaButton.addEventListener("click", () => {
    const tituloProyecto = proyecto.titulo;
    const proyectoJSON = JSON.stringify(proyecto);
    const proyectoCodificado = encodeURIComponent(proyectoJSON);
    const url = `Metricas.html?Titulo=${encodeURIComponent(tituloProyecto)}&Proyecto=${proyectoCodificado}`;
    window.location.href = url;
  });
  proyectoElement.appendChild(agregarMetricaButton);
  
// Crear el botón "Mostrar Métricas"
const mostrarMetricasButton = document.createElement("button");
mostrarMetricasButton.textContent = "Mostrar Métricas";

// Agregar el evento de clic al botón
mostrarMetricasButton.addEventListener("click", () => {
    // Obtener el título del proyecto
    const tituloProyecto = proyecto.titulo;

    // Serializar el objeto de proyecto a cadena JSON
    const proyectoJSON = JSON.stringify(proyecto);

    // Codificar el proyecto JSON para pasar como parámetro en la URL
    const proyectoCodificado = encodeURIComponent(proyectoJSON);

    // Construir la URL con el título del proyecto y el proyecto codificado
    const url = `verMetricas.html?Titulo=${encodeURIComponent(tituloProyecto)}&Proyecto=${proyectoCodificado}`;

    // Redirigir a la página verMetricas.html
    window.location.href = url;
});

// Agregar el botón al elemento proyectoElement
proyectoElement.appendChild(mostrarMetricasButton);


  const metricasContainer = document.createElement("div");
  proyectoElement.appendChild(metricasContainer);
  
  proyectosContainer.appendChild(proyectoElement);
});
document.body.appendChild(proyectosContainer);

botonAgregarProyecto.addEventListener("click", function () {
  window.location.href = "proyectos.html";
});
