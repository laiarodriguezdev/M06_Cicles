class Cicle {
    constructor(nom, voltes) {
      this.nom = nom;
      this.voltes = voltes;
      this.numEdicions = 0; 
    }
  
    setNumEdicions(edicions) {
      this.numEdicions = edicions;
    }
  
    incrementarEdicions() {
      this.numEdicions++;
    }
  }
  
  const cicleLaia = new Cicle("JS de Laia", 0);
  
  console.log(cicleLaia); 
  
  cicleLaia.incrementarEdicions();
  console.log(cicleLaia.numEdicions); 

  cicleLaia.setNumEdicions(6);
  console.log(cicleLaia.numEdicions); 