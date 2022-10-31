// Используя метод **`some`** проверьте то, в массиве есть элемент кратный 3 и 5.
// const numbers3 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5] 
// const devisible = numbers3.some (
//     (value: number, index: number, array: (number)[]) => {
//         return value % 3 === 0  && value % 5 ===0
//     })
// console.log (devisible)


const numbers3 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5] 
const devisible = numbers3.some (
    function (value: number, index: number, array: (number)[]){
        return value % 3 === 0  && value % 5 ===0
    })
console.log (devisible)