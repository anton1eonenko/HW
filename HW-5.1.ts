function getSum(number:number): number  {
    let result: number = 0
    for(let i: number = 1;i<=number; i++){
        result += i
    }
    return result

}
console.log(getSum(100))

