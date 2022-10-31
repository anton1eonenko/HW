// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.
const numbers1 = [7, -4, 32, -90, 54, 32, -21];
const positivNumbers = numbers1.filter(
    (value:number) => {
        return value > 0
}); 
console.log ([positivNumbers])

  

// const numbers1 = [7, -4, 32, -90, 54, 32, -21];
// const positivNumbers = numbers1.filter(
//     function(value:number) {
//         return value > 0
// }); 
// console.log ([positivNumbers])