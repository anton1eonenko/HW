// Опишите интерфейс IElectronics. 
// У интерфейса есть свойства price - число, electrType - строка, manufacturer - строка и метод turnOn. 
// Сделать 2-3 класса, например, телефон, электропила и тп, реализующие интрефейс.
// Создать функцию, которая принимает параметром любой класс, реализующий IElectronics
// и выводит 3 свойства и вызывает метод turnOn.

interface IElectronics {
    price: string 
    electrType: string
    manufacturer: string
}

class Phone implements IElectronics  {
    price: string
    electrType: string
    manufacturer: string
    constructor (price: string, electrType: string, manufacturer: string ) {
        this.price = price 
        this.electrType = electrType 
        this.manufacturer = manufacturer
    }
    
}

class Chainsaw implements IElectronics{
    price: string
    electrType: string
    manufacturer: string

    constructor (price: string, electrType: string, manufacturer: string ) {
        this.price = price 
        this.electrType = electrType 
        this.manufacturer = manufacturer
    }
    
}

const test = (ob: IElectronics)=>{
    console.log(ob)
}

test(new Chainsaw('1', '2', '3'))