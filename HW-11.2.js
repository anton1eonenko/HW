// + Реализуйте приложение:
//     + Для приложения используется `https://jsonplaceholder.typicode.com/todos`
//     + Напишите 2 функции `getTodos` & `getTasks`
//         + Функция `getTodos` делает запрос по указанному адресу и забирает данные.
// + Функция `getTasks` принимает id пользователя и статус задачи (завершена или нет) и возвращает массив объектов c айди и названием задачи, 
// {id:number; title: string}[] для всех завершенных или незавершенных (в зависимости от значения параметра) задач 
//         + Вывести полученный результат в консоль

import fetch from 'node-fetch'

let getTodos = async (url) => {
    let data = await fetch(url)
    let json = await data.json()
    return json
}

let start = async () => {
    return await getTodos('https://jsonplaceholder.typicode.com/todos')
}
const getTasks = (data) => {
    return data.map(({id, title}) =>{
        return {id, title}
    }) 
}
start().then(res => console.log(getTasks(res)))
HW