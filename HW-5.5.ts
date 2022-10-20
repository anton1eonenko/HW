function getSumm(start:number, end: number): number  {
    let result:number = 0
    for (let i = start; i <= end; i++) {
        result = result + i
        
    }
    return result
}
console.log (getSumm(-5, 5))
