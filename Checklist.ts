const CheckList = {
    1: 'Авторизация существующего пользователя (smoke), Priority: High', 
    2: 'Добавление книги в корзину (smoke), Priority: High', 
    3: 'Работоспособность корзины (smoke), Priority: High', 
    4: 'Проверка осуществления оплаты (smoke), Priority: High', 
    5: 'Проверка списания денег по балансу (smoke), Priority: High', 
    6: 'Осуществление поиска (critical), Priority: Medium', 
    7: 'Информация о книге (critical), Priority: Medium', 
    8: 'Проверка скидки в диапазоне (critical), Priority: Medium', 
    9:  'Введение в поле Login несуществющего домена (extendet), Priority: Low', 
    10: 'Введение рандомных символов в поиск (extendet), Priority: Low'
}
console.table(CheckList)

