// // Создайте класс Car. Создайте два дочерних класса SportCar и LuxuryCar.  ++ 
// // Конструкт родительского класса принимает переменные марку авто и тип двигателя. ++
// // Дочерние классы должны иметь методы выводящие максиальную скорость и цену на соответсвующие типы авто. 
// // Выводящий текст должен быть таким: `This is <carName>. It has <engineType> engine and max speed equal to <maxSpeed>. 
// // Approximetly cost of the car is <carCost>`. (В задании используйте не только public модификатор, где это возможно)

class Car {
    constructor (mark, engineType) {
        this.mark = mark;
        this.engineType = engineType
    }
    sayCar (){
       return `This is ${this.mark}. It has${this.engineType}`
    }
   
}

class SportCar extends Car {
    constructor (mark, engineType, maxSpeed, price){
        super(mark, engineType); 
        this.maxSpeed = maxSpeed; 
        this.price = price
    }
    sayCar (){
        console.log(`${super.sayCar()} maxSpped - ${this.maxSpeed} price - ${this.price}`)
    }

}

class LuxuryCar extends Car { 
    constructor (maxSpeed, price){
        super(mark, engineType); 
        this.maxSpeed = maxSpeed; 
        this.price = price
    }
    sayCar (){
    }
}

let a = new SportCar('1','2',3, 4)

a.sayCar()


