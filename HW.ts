class Class {
  quantityOfIndex(string: string, sybmol: string) {
    const count = string.split(`${sybmol}`).length - 1;
    return `${sybmol}${count}`;
  }
  indexOfString(string: string, substring: string) {
    let result = []
    let b =  string
      .split(" ")   //
      .map((value, index) => {
        if (value === substring) {
          return index;
        }
      })
      .filter((el) => el !== undefined);
    for (const iterator of b) {
        result.push(string.indexOf(substring, iterator))
    }
    return result
  }
  deleteExclude (string: string, substring: string, index: number) {
    const splited = string.split(" ")
    let b = []
    for (let i = 0; i < splited.length; i++) {
      if(splited[i] === substring){
        b.push(i)
      }
      
    }
    let c = Object.fromEntries(b.entries())
    const test = splited.filter((el, i) => {
      if(substring === el && c[index] === i){
        return el
      }
      if(substring !== el){
        return el
      }
    })
    return test.join(' ')
  }
  changeIndex (word: string, arr: number [], arr2: number []) {
    const splited = word.split("")
    let t = Object.fromEntries(splited.map((el, i) => [i, el]))
    arr.forEach((el, i) => {
      t[el] = t[arr2[i]]
    })
    return Object.values(t).join('')
  }
}
let a = new Class()
console.log(a.deleteExclude('hello smth afdsf hello hello', 'hello', 0))

    

export {Class}
