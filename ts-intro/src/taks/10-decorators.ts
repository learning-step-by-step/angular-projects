
function classDecorator<T extends {new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

// el decorador se ejecuta antes de la instancia del objeto.
// expande la clase añadiendo nuevas funcionalidades
@classDecorator
class MySuperClass {
    public myProperty: string = '123as';

    print() {
        console.log('heey');
    }
}

console.log(MySuperClass)