// #### Task 2 🖥

// Создать любой обьект с двумя ключами и любыми значениями в них, а затем проверить есть ли в обьекте определенный ключ и 
// если есть вывести в консоль **true**

const person = {
    name: 'Anton',
    age: 21
}
if ('name' in person) {
    console.log ('True')
} else {
    console.log ('False')
}

