class Calc {
    summation (arg1: number, arg2: number) {
        if(typeof(arg1) === 'string' || typeof(arg2) === 'string'){
            return 'Arguments must be number'
        }
        return arg1 + arg2

    }

    deduction (arg1: number, arg2: number) {
        if(typeof(arg1) === 'string' || typeof(arg2) === 'string'){
            return 'Arguments must be number'
        }
        else return arg1 - arg2

    }

    multiplication (arg1: number, arg2: number) {
        if(typeof(arg1) === 'string' || typeof(arg2) === 'string'){
            return 'Arguments must be number'
        }
        else return arg1 * arg2

    }

    divide (arg1: number, arg2: number) {
        if(typeof(arg1) === 'string' || typeof(arg2) === 'string'){
            return 'Arguments must be number'
        }
        else return arg1 / arg2

    }
    degree (arg1: number, arg2: number) {
        if(typeof(arg1) === 'string' || typeof(arg2) === 'string'){
            return 'Arguments must be number'
        }
        else return Math.pow(arg1, arg2)

    }
    tangent (arg: number) {
        if(typeof(arg) === 'string' ){
            throw new Error('Arguments must be number')
        }
        else return Math.tan(arg)

}
}



function summationUnit(arg1:any, arg2: any, expectedResult: any) {
    const result = new Calc().summation(arg1, arg2);
    if (result === expectedResult) {
        console.log(`The Unit Test with arguments ${arg1}, ${arg2} and ${expectedResult} is success`) 
    } else {
        throw new Error(`The Unit Test with ${arg1}, ${arg2} and ${expectedResult} failed `)
    }
}


function deductionUnit(arg1:any, arg2: any, expectedResult: any) {
    const result = new Calc().deduction(arg1, arg2);
    if (result === expectedResult) {
        console.log(`The Unit Test with arguments ${arg1}, ${arg2} and ${expectedResult} is success`) 
    } else {
        throw new Error(`The Unit Test with ${arg1}, ${arg2} and ${expectedResult} failed `)
    }
}

function multiplicationUnit(arg1:any, arg2: any, expectedResult: any) {
    const result = new Calc().multiplication(arg1, arg2); 
    if (result === expectedResult) {
        console.log(`The Unit Test with arguments ${arg1}, ${arg2} and ${expectedResult} is success`) 
    } else {
        throw new Error(`The Unit Test with ${arg1}, ${arg2} and ${expectedResult} failed `)
    }
}

function divideUnit(arg1:any, arg2: any, expectedResult: any) {
    const result = new Calc().divide(arg1, arg2); 
    if (result === expectedResult) {
        console.log(`The Unit Test with arguments ${arg1}, ${arg2} and ${expectedResult} is success`) 
    } else {
        throw new Error(`The Unit Test with ${arg1}, ${arg2} and ${expectedResult} failed `)
    }
}

function degreeUnit(arg1:any, arg2: any, expectedResult: any) {
    const result = new Calc().degree(arg1, arg2); 
    if (result === expectedResult) {
        console.log(`The Unit Test with arguments ${arg1}, ${arg2} and ${expectedResult} is success`) 
    } else {
        throw new Error(`The Unit Test with ${arg1}, ${arg2} and ${expectedResult} failed `)
    }
}

function tangentUnit(arg:any, expectedResult: any) {
    const result = new Calc().tangent(arg); 
    if (result === expectedResult) {
        console.log(`The Unit Test with arguments ${arg} and ${expectedResult} is success`) 
    } else {
        throw new Error(`The Unit Test with ${arg} and ${expectedResult} failed `)
    }
}

// Positive
summationUnit(2,8,10)
deductionUnit(2,1,1);
multiplicationUnit(2, 2, 4);
divideUnit(4, 2, 2);
degreeUnit(2, 2, 4); 
tangentUnit(1, 1.5574077246549023)
summationUnit(-7, 1, -6)
multiplicationUnit(-10, 2, -20)
divideUnit(-100, -5, 20)
deductionUnit(-47, 5, -52)

// // Negative


try{
    summationUnit(2,'fasdf', 7);
}catch(e: any){
    console.log(e.message)
}


try{
    deductionUnit(2,'Привет', 125);
}catch(e: any){
    console.log(e.message)
}


try{
    multiplicationUnit(2, 'Пока', 5); 
}catch(e: any){
    console.log(e.message)
}


try{
    divideUnit(10, 'ава', 0);
}catch(e: any){
    console.log(e.message)
}


try{
    degreeUnit('5', 2, 25);
}catch(e: any){
    console.log(e.message)
}


try{
    tangentUnit(1, 5574077246549023 )
}catch(e: any){
    console.log(e.message)
}

try{
    summationUnit('Два','Два', 4);
}catch(e: any){
    console.log(e.message)
}

try{
    deductionUnit(4, 'Два', 2);
}catch(e: any){
    console.log(e.message)
}

try{
    multiplicationUnit(4, 'Два', 8);
}catch(e: any){
    console.log(e.message)
}

try{
    degreeUnit(8, 'Два', 64);
}catch(e: any){
    console.log(e.message)
}

