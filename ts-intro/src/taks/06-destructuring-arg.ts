export interface Product {
    description: string,
    price: number;
}

const phone: Product = {
    description: 'Nokia a1',
    price: 50
}

const tablet: Product = {
    description: 'Surcface',
    price: 650
}

// para exportar la función necesita ejecutar el archivo para que exista dicha función
// por lo que ejeuta el console.log. 
// esto no pasa con la "interfaz" ya que sólo es una "regla" de estructura de un objeto.
export function getIVA( products: Product[]): [number, number] {
    let total = 0;
    // products.forEach( (myProduct: Product) => {
    //     total += myProduct.price;
    // })
    products.forEach( ({price}) => {
        total += price;
    })
    return [total,total * 0.21];
}

const products = [phone, tablet];
const [total, iva] = getIVA(products);

// console.log('El iva total es: ', iva);
