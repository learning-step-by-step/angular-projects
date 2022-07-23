function sum(a:number, b:number): number {
    return (a + b);
}

const arrowFunct = (a:number, b:number): number => {
    return (a + b);
}

// arg: obligatorios , opcionales, con valor
function multiply(a:number, b?:number, base:number = 2): number {
    return (a * base);
}

// const result = sum(8, 4);
// const result = multiply(10,20); // (10 , 0, 20) para cambiar la base
// console.log(result);

interface CharacterMain {
    name: string;
    pv: number;
    showHealth: () => void;
}

function heal(character: CharacterMain, heal: number):void {
    character.pv += heal;
    // console.log(character);
}

const newCharacter: CharacterMain = {
    name: 'Frod',
    pv: 10,
    showHealth() {
        console.log('My health is ', this.pv);
    }
}

heal(newCharacter, 30);
newCharacter.showHealth();