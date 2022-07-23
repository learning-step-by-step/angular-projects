
class NormalPerson {
    constructor(
        public name: string,
        public address: string
    ) {}
}


class Hero extends NormalPerson {
    // sólo visible dentro de la clase
    // private alterEgo: string;

    // visible desde fuera de la clase
    // public age: number;

    // se puede acceder a la propiedad sin hacer instancia de la clase
    // static realName: string;

    // al establecer el nivel de acceso de los argumentos se crea la propiedad y se le asigna
    // el valor dado.
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string) {
        // this.alterEgo = alterEgo;

        
        super(realName, 'NY'); // constructor de la class de la cual se extiende
    }
}


const ironman = new Hero('IronMan', 45, 'tonny');
console.log(ironman);
