// Дан обьект:
// C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта. 

const student = {
    name: 'John',
    age: 19,
    isHappy: true
} 

for (const key in student) {
    console.log (student[key])
} 
