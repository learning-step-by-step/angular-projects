// let habilities: (string | number)[] = ['bash', 'healing', 100];
// habilities.push(33);

let habilities: string[] = ['bash', 'healing'];

// objeto que restringe la estructura de otros objetos
interface Character {
    name: string;
    level: number;
    habilities: string[];
    homeTown?: string // optional property
}

/* In JS
-------------------------
   const character = {
        name: 'el pepe',
        level: 1,
        habilities: ['bash', 'healing']
    };
    character.homeTown = 'Pueblo Paleta';
    console.table(character);
 */

const character: Character = {
    name: 'el pepe',
    level: 1,
    habilities: ['bash', 'healing']
}

character.homeTown = 'Pueblo Paleta';
console.table(character);
