

// <T> indica que la función puede recibir parámetros de cualquier tipo
// T indica que el tipo del argumento
// <T extends objects> indica que puede recibir un tipo que EXTIENDE
// de un objeto (para poder acceder al objeto devuelto sin problema
// y que no haya conflicto al mandar otro tipo de argumento)
function getType<T>(arg: T){
    return arg;
}

let typeString = getType('hello world');
let typeNumber = getType(100);
let typeArr = getType([55,0,1]);

// al declarar explicitamente que es "<string>" lo que devuelve la
// funcion, ya no se aplica el tipo generico <T> y espera string
let typeExplicit = getType<string>('string');

interface Resource<T,F> {
    id: number;
    resourceName: string;
    data: T;
    extraData: F;
}

const doc: Resource<string, object> = {
    id: 1,
    resourceName: 'person',
    data: 'shaun',
    extraData: {soCool: true}
}

const doc2: Resource<object, boolean> = {
    id: 1,
    resourceName: 'person',
    data: {soCool: true},
    extraData: true
}