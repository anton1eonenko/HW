// Используя метод **`find`** найдите в массиве первое четное число.


// const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5] 
// const evenNumber = numbers.find (
//     (value: number, index: number, array: (number)[]) => {
//         return value%2 ===0;
//     })
// console.log(evenNumber)


const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5] 
const evenNumber = numbers.find (
    function (value: number, index: number, array: (number)[]) {
        return value%2 ===0;
    })
console.log(evenNumber)