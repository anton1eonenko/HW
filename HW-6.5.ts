// Дан обьект:
// Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    alex: 664,
    alexandra: 199
}

function sum(salaries:object) {
    let result = 0
    let salariesArray =  Object.values(salaries)
    for (const salari of salariesArray) {
        result += salari
    }
    return result / salariesArray.length
}
console.log(sum(salaries))