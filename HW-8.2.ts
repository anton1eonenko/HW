// Используя метод **`map`** создайте новый массив, на основе массива **`users`**,
//  в котором каждый элемент массива будет содержать строку вида:
// 

// ['member 1: Darya', 'member 2: Masha', ... etc]
// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// const names = users.map (
//     (value: string, index: number, arr: (string)[]) => {
//         return ['Member' + ' '+ index + ': '+ value]
//     }
    
// )
// console.log(names)


const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
const names = users.map (
    function (value: string, index: number, arr: (string)[]){
        return ['Member' + ' '+ index  + ': '+ value]
    }
    
)
console.log(names)



