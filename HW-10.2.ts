// Создайте два объекта людей. Реализуйте метод, который выводит строку `My name is <name>`. 
// И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя

class Person {
    name: string;
    constructor (name: string) {
        this.name = name 
    }
    sayname () {
        return (`My name is ${this.name}`)
    }
}
const Anton = new Person('Anton')
console.log(Anton.sayname())
