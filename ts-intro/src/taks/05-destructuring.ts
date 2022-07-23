interface Player {
    volume: number;
    second: number;
    sing: string;
    details: PlayerDetails;
}

interface PlayerDetails {
    author: string;
    year: number;
}

const player: Player = {
    volume:90,
    second: 35,
    sing: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}
const author = 'Epe';
// const { volume, second, sing, details:{ author} } = player;
const { volume, second, sing, details } = player;
const { author:authorDetails } = details; // "authorDetails" sobrenombre

// console.log('El volumen es ', volume);
// console.log('El segundo es ', second);
// console.log('La cancion es ', sing);
// console.log('El autor es ', authorDetails);

const dbz: string[] = ['Goku', 'Picolo', 'Gohan'];
const [,,p3] = dbz;

console.log('Personaje 1: %s', dbz[0]);
console.log('Personaje 1: %s', dbz[1]);
console.log('Personaje 1: %s', p3);