
interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fer'
}

const passenger2: Passenger = {
    name:'joh',
    children: ['dam', 'pep']
}

function printChildren(passanger: Passenger): void {
    const countChildren = passanger.children?.length || 0;
    console.log(countChildren);
}


printChildren(passenger2);
printChildren(passenger1);