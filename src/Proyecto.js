export default class Proyecto {
    constructor(titulo, descripcion) {
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.metricas = [];
    }

    datosFormulariosSonValidos(titulo, descripcion) {
      const STRINGVACIO = "";
      if (titulo == STRINGVACIO && descripcion == STRINGVACIO) {
        return false;
      } else if (titulo == STRINGVACIO) {
        return false;
      } else if (descripcion == STRINGVACIO) {
        return false;
      } else {
        return true;
      }
    }
}
  
