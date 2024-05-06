export default class Metrica {
    constructor(pruebasAñadidas, lineasDeCodigo, cobertura) {
        this.pruebasAñadidas = pruebasAñadidas;
        this.lineasDeCodigo = lineasDeCodigo;
        this.cobertura = cobertura;
    }
    toString() {
        return `Pruebas añadidas: ${this.pruebasAñadidas}, Líneas de código: ${this.lineasDeCodigo}, Cobertura: ${this.cobertura}, Puntaje total: ${this.puntajeTotal}`;
    }
}