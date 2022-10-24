// #### Task 1 💻
// Создать любой обьект с двумя ключами и любыми значениями в них, а затем удалить ключи из обьекта. 

const Anton = {
    name: 'Anton',
    age: 21,
    city: 'Minsk'
}
delete (Anton as any).name
delete (Anton as any).age
console.log (Anton)


