class CarModel{
    constructor(
        brand, 
        model, 
        constructionYear, 
        fuel, 
        engine, 
        emissionNorm, 
        gearboxe, 
        transmission, 
        emptyWeight, 
        consumption,
        bodywork,
        numberOfPlace,
        color,
        mileage
    ){
        this.brand = brand;
        this.model = model;
        this.constructionYear = constructionYear;
        this.fuel = fuel;
        this.engine = engine;
        this.emissionNorm = emissionNorm;
        this.gearboxe = gearboxe;
        this.transmission = transmission;
        this.emptyWeight = emptyWeight;
        this.consumption = consumption;
        this.bodywork = bodywork;
        this.numberOfPlace = numberOfPlace;
        this.color = color;
        this.mileage = mileage;
    }
    toMap(){
        return{
            brand: this.brand,
            model: this.model,
            constructionYear: this.constructionYear,
            fuel: this.fuel,
            engine: this.engine ,
            emissionNorm: this.emissionNorm,
            gearboxe: this.gearboxe,
            transmission: this.transmission,
            emptyWeight: this.emptyWeight,
            consumption: this.consumption,
            bodywork: this.bodywork,
            numberOfPlace: this.numberOfPlace,
            color: this.color,
            mileage: this.mileage,
        }
    }
    fromMap(map){
        return CarModel(
            map['brand'],
            map['model'],
            map['constructionYear'],
            map['fuel'],
            map['engine'],
            map['emissionNorm'],
            map['gearboxe'],
            map['transmission'],
            map['emptyWeight'],
            map['consumption'],
            map['bodywork'],
            map['numberOfPlace'],
            map['color'],
            map['mileage']
        )
    }
}