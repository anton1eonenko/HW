// Дан массив:
// Удалите все элементы в массиве и выведите в консоль полученный результат.
const numbers = [5, 43, 63, 23, 90]
// numbers.splice (0,5) 1 метод
for (const number in numbers) {
    delete numbers[number]
}
console.log(numbers)