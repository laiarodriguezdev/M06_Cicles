class Modul{
    constructor(){
        //EDITAT PERQUE COINCIDEIXI AMB LES VARIABLES DONADES
        this.modul_cicle = modul_cicle;
        this.modul_num = modul_num;
        this.modul_nom = modul_nom;
        this.modul_hores = modul_hores;
    }

    toString(){
        return `MP${this.modul_num}.${this.modul_nom}(${this.modul_hores}h)`;
    }
}