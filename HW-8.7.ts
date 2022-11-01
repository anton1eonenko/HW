// Используя метод **`every`** проверьте то, в массиве сумма цифр квадратов значений четная.
const numbers3 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5] 
function even(numbers:number[]) {
    return numbers.map(number => number ** 2).reduce((a,b) => a + b) % 2 === 0
    
}
console.log(even(numbers3))