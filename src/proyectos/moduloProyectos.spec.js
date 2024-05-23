import Proyecto from "../Proyecto.js";

describe("formularioProyectos", () => {
  const proyecto = new Proyecto;
  it("Deberia retornar false si no se lleno ningun campo", () => {
    expect(proyecto.datosFormulariosSonValidos("","")).toEqual(false);
  });
  it("Deberia retornar false si no se lleno el campo de titulo", () => {
    expect(proyecto.datosFormulariosSonValidos("","descripcion1")).toEqual(false);
  });
  it("Deberia retornar false si no se lleno el campo de descripcion", () => {
    expect(proyecto.datosFormulariosSonValidos("titulo1","")).toEqual(false);
  });
  it("Deberia retornar true si se llenaron todos los campos", () => {
    expect(proyecto.datosFormulariosSonValidos("titulo","descripcion")).toEqual(true);
  });
});
