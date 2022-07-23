import { Product, getIVA } from "./06-destructuring-arg";

const shoppingCart: Product[] = [
    {
        description: 'phone 1',
        price: 120
    },
    {
        description: 'phone 2',
        price: 88
    }
];

const [total, iva] = getIVA(shoppingCart);

console.log('Total: ', total);
console.log('IVA: ', iva);