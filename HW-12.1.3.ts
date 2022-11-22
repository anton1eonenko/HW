import {Car} from './HW-12.1.1'
import {Mazdacompectation} from './enums'
import {basic, extra} from './mazda'
class Mazda extends Car {
    constructor (public maxVolume: number, public expenditure: number, public feulReserve: number) {
        super()
    }
    private readonly = Mazda 
    refuel(l = 100): void {
        this.feulReserve = 100
    }
    getCost (car: Mazdacompectation) {
            
    }
    drive(distance: number, l?: number){ 
        console.log((this.expenditure * distance ) / 100)
        if((this.expenditure * distance ) / 100 <= this.feulReserve){
            this.feulReserve -= (this.expenditure * distance ) / 100
        }else{
            this.refuel(l)
        }
    }
    
}

let a = new Mazda(1, 5, 100)
a.drive(1000)

let b = new Mazda(1, 2, 3)
console.log(b.getCost(extra))