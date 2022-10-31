// Используя метод **`reduce`** получите сумму всех чисел массива.
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]


// const numbersum = fibonacci.reduce (
//     (accum: number, value: number, index: number, array: (number)[]) => {
//         return accum + value;
//     })
// console.log(numbersum)



const numbersum = fibonacci.reduce (
    function (accum: number, value: number, index: number, array: (number)[]) {
        return accum + value;
    })
console.log(numbersum)
