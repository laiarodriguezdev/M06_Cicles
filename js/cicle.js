export class Cicle {
    constructor(nom, categoria, numAlumnes, abreviatura) {
        this.nom = nom;
        this.categoria = categoria;
        this.numAlumnes = numAlumnes;
        this.abreviatura = abreviatura;
        this.numEdit = 0;
        this.lastEdit = null;
        this.moduls = [];
    }

    setNumEdicions(nom, categoria, numAlumnes, abreviatura) {
        const changes = nom != this.nom || 
                        categoria !== this.categoria || 
                        numAlumnes !== this.numAlumnes || 
                        abreviatura !== this.abreviatura;
        if (changes) {
            this.numEdit++;
            this.lastEdit = new Date();
        }
        this.nom = nom;
        this.categoria = categoria;
        this.numAlumnes = numAlumnes;
        this.abreviatura = abreviatura;
    }
    setModuls(modul) {
        this.moduls.push(modul);
        this.moduls.sort((a, b) => a - b);
    }
    calcHores() {
        let totalHores = 0;
        for (const modul of this.moduls) {
            totalHores += parseInt(modul.hores);
        }
        console.log("CALCHORES: " + totalHores);
        console.log("CALCHORESstring: " + totalHores.toString());
        return totalHores.toString();
    }
    toString() {
        let finalString = `Cicle: abreviatura: ${this.abreviatura.toUpperCase()}, nom: ${this.nom}\n`;
        finalString += `Categoria: ${this.categoria}\n`;
        finalString += `Num alumnes: ${this.numAlumnes}\n`;
        finalString += `Num edits: ${this.numEdit}\n`;
        finalString += `Ultima edició: ${this.lastEdit ? this.lastEdit.toLocaleString() : 'Sense editar.'}\n`;

        if (this.moduls.length > 0) {
          finalString += "Mòduls:\n";
            for (const modul of this.moduls) {
              finalString += modul.toString() + "\n";
            }
        }
        return finalString;
    }
}