const getSumNumbers = (number: number): number => {
    let result: number = 0
    let stringedNumber: string = String(number) //123
    for(const s of stringedNumber){
      result += Number(s)
    }
  
  
    return result
  }
  console.log(getSumNumbers(145))
  