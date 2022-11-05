// Написать класс человека, который принимает имя и рост в метрах в конструкторе
// Класс имеет 1 статическое поле: коэффициент длины шага при беге = 0.65
// И 1 статический метод, который принимает рост в качестве параметра и 
// вычисляет длину шага при ходьбе по формуле `Рост / 4) + 0,37`
// Написать в классе геттер для получения длины шага при беге = `коэффициент длины шага * рост`
// И написать метод, `logWalkStep`, который выводит в консоль `Длина вашего шага ${length}`
// вывести в консоль геттер и вызвать `logWalkStep`

class Human {
  name: string
  weight: number

    constructor(name, weight) {
      this.name = name
      this.weight = weight
    }
    static k = 0.67
    static getStideLength(growth) {
      return (growth / 4) + 0.37
    }
    get stideLength() {
      return Human.k * this.weight
    }
    logWalkStep() {
      console.log('Длина вашего шага ${this.stideLength}')
    }
  }
  
  let b = new Human('Anton', 2)
  console.log(Human.getStideLength(128))
  console.log(b.stideLength)
  b.logWalkStep()
  