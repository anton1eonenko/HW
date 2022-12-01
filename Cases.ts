const Case1 = {
    id: 1, 
    name: 'Авторизация существующего пользователя' , 
    preconditions: '1) Пользователь должен зайти на сайт по ссылке https://www.sharelane.com, 2)пользователь должен существовать и быть не залогинен.', 
    steps: 'Пользователь вводит данные в графу E-mail and Password, 2) нажимает на кнопку "Login" и попадает на сайт', 
    expected_result: '1) Отсутствие ошибок авторизации, 2) В шапке сайта приветствие пользователя',
    status: 'Passed', 
    priority: 'High',  
}

const Case2 = {
    id: 2, 
    name: 'Добавление книги в корзину' , 
    preconditions: 'Пользователь должен быть авторизован на сайте', 
    steps: '1) Пользователь нажимает на понравившуюся книгу, 2) Нажимает на кнопку "Add to Cart"' , 
    expected_result: 'Появляется сообщение "Book was added to the Shopping Cart", книга отображается в корзине' ,
    status: 'Passed', 
    priority: 'High' ,  
}

const Case3 = {
    id: 3 , 
    name: 'Осуществление удачного поиска' , 
    preconditions: 'Пользователь должен зайти на сайт по ссылке https://www.sharelane.com, 2) Пользователь может быть не авторизован', 
    steps: 'Пользователь вводит в груфу "Поиск" полное название книги или его часть' , 
    expected_result: 'Книга находится в интернет-магазине и ее можно добавить в корзину' ,
    status: 'Passed', 
    priority: 'Medium' ,  
}

const Case4 = {
    id: 4 , 
    name: 'Осуществление оплаты' , 
    preconditions: '1) Пользователь авторизован на сайте, 2) Пользователь добавил книгу в корзину', 
    steps: '1) Зайти в корзину, 2) Нажать на кнопку "Proceed to checkout", 3) Ввести 16-ти значный номер карты "1111111111114072", 4) Нажать на кнопку "Make Payment" ' , 
    expected_result: 'Заказ успешно оформлен, сопровождается сообщением "Thank you for your order!!!" с сопуствующей информацией о заказе' ,
    status: 'Passed', 
    priority: 'High' ,  
}

const Case5 = {
    id: 5 , 
    name: 'Проверка скидки в диапазоне 50-99 штук' , 
    preconditions: '1) Пользователь должен быть авторизован', 
    steps: '1) Добавить 50 книг в корзину, 2) Проверить итоговую сумму к оплате, 3) Повторить 1 и 2 шаг для 99 книг  ' , 
    expected_result: 'Заявленная скидка к оплате, должна быть 3 процента' ,
    status: 'Passed', 
    priority: 'Medium' ,  
}


console.table(Case1)
console.table(Case2)
console.table(Case3)
console.table(Case4)
console.table(Case5)
