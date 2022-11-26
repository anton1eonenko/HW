import {Car} from './HW-12.1.1'
import {BMWcompectation} from './enums'
import {comfort, luxury} from './bmw'
import {Bills} from './HW-12.2.1'
class BMW extends Car {
    constructor (public maxVolume: number, public expenditure: number, public feulReserve: number) {
        super()
    }
    private readonly = BMW 
    refuel(l = 100): void {
        this.feulReserve = 100
    }
    getCost (text: string, car: BMWcompectation) {
        return BMWcompectation.basic
    }
    buy (compectation: BMWcompectation) {
        return comfort
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
const a = new BMW (1, 2, 3)
console.log(a.buy)


