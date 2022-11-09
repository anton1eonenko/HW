// Создайте два объекта машин. Реализуйте метод выводящий количество дверей машины, и с какой стороны находится руль. 
// В зависимости от контекста выполнения, 
// этот метод должен выводить соответвующую информацию о машинах. К примеру `This car has 3 doors and this is left-hand drive car`

class Car {
    door: number; 
    wheel: string;
    constructor (door: number, wheel: string){
        this.door = door; 
        this.wheel = wheel

    }
    saycar () {
        return (`This car has ${this.door} and this is ${this.wheel} drive car`)
    }
}
const BWM = new Car (4, 'left-hand')
console.log(BWM.saycar())
