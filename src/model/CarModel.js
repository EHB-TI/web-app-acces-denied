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
        price
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
            price: this.price
        }
    }
}

export default CarModel;