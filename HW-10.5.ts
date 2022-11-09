// Опишите статическую функцию класса, которая принимает Generic параметр одного из типов: boolean, number или string. И возвращает:
// для boolean: противоположное значение
// для string: если в строке есть скобки, то вывести, не забыли ли закрыть скобку, если нет - `скобок нет`
// для числа n: целое число, квадрат которого наиболее близок к n (`1 для n=1,2,3`, `2 для n=4,5,6,7,8`, `3 для 9,10,11...`)
// Проверить функцию на все 3 типа

class Test {
    static get (value){
        let a = typeof(value)
        switch(a){
            case 'boolean':
                return !value
            case 'string':
                if(value.includes("'")){
                    return 'Не забыли ли вы закрыть ковычки'
                }
                return 'Ковычек нет'
            case 'number':
                return value / 2
        }
    }
}

console.log(Test.get(6))