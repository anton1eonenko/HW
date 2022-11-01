// #### Task 1 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

// + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// + Ваша задача - написать функцию, котор мая принимает строку и возвращает новую строку с удаленными гласными.
// + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// > Примечание: для этой задачи **`y`** не считается гласной.


function antitroll(string:string) {
    let vowels = ['a', 'e', 'i', 'o'];
    
    return string.split('').filter(vowel => vowels.lastIndexOf(vowel.toLowerCase()) === -1).join('')
}
console.log(antitroll('abcdefghijklmnopqrst'))