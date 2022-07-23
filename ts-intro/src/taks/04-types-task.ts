interface Address {
    streetAddress: string,
    country: string,
    city: string
}

interface SuperHero {
    name: string
    age: number,
    address: Address,
    showAddress: () => string
}

const superHero: SuperHero = {
    name: 'Hulk',
    age: 33,
    address: {
        streetAddress: 'unknown',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return `${this.name}, ${this.address.city}, ${this.address.country}`;
    }
}

const address = superHero.showAddress();
console.log(address);