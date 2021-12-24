class CarModel{
    constructor(
        id,
        brand, 
        model,
        bodywork, 
        constructionYear, 
        fuel,  
        emissionNorm, 
        gearboxe, 
        mileage,
        picture,
        price,
        engine, 
        transmission, 
        emptyWeight, 
        consumption,
        numberOfPlace,
        color,
        description,
        delivery,
        priceOption,
        email
    ){
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.bodywork = bodywork;
        this.constructionYear = constructionYear;
        this.fuel = fuel;
        this.emissionNorm = emissionNorm;
        this.gearboxe = gearboxe;
        this.mileage = mileage;
        this.picture = picture;
        this.price = price;
        this.engine = engine;
        this.transmission = transmission;
        this.emptyWeight = emptyWeight;
        this.consumption = consumption;
        this.numberOfPlace = numberOfPlace;
        this.color = color;
        this.description = description;
        this.delivery = delivery;
        this.priceOption = priceOption;
        this.email = email;
    }
    toMap(){
        return{
            id: this.id,
            brand: this.brand,
            model: this.model,
            bodywork: this.bodywork,
            constructionYear: this.constructionYear,
            fuel: this.fuel,
            emissionNorm: this.emissionNorm,
            gearboxe: this.gearboxe,
            mileage: this.mileage,
            picture: this.picture,
            price: this.price,
            engine: this.engine,
            transmission: this.transmission,
            emptyWeight: this.emptyWeight,
            consumption: this.consumption,
            numberOfPlace: this.numberOfPlace,
            color: this.color,
            description: this.description,
            delivery: this.delivery,
            priceOption: this.priceOption,
            email: this.email
        }
    }
}

export default CarModel;