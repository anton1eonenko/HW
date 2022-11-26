enum FuelCost{
    AI92 = 2,
    AI95 = 3
}

class Bills {
    fuelType: FuelCost
    private static sumDebt = 0
    constructor(fuelType: FuelCost){
        this.fuelType = fuelType
    }
    public static getBill (string: string) {

    }
}
export {Bills}