class Cicle {
    constructor(cicle_nom) {
      this.cicle_nom = cicle_nom;
      this.numEdicions = 0; 
    }

    setNumEdicions() {
      this.numEdicions++;
      this.ultimaEdicio = new Date(); 
      console.log(`Darrera data d'edició: ${this.ultimaEdicio}`);
    }

}