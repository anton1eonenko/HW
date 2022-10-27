// Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]



function getAvverage(array: number[][]){
    let length = 0
    let result = 0
    for (const iterator of array) {
        for (const number of iterator) {
            length++
            result += number
        }
        
    }
    return result / length
}
console.log(getAvverage(matrix))