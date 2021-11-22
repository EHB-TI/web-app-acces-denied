//not finished
class AnnouncementModel{
    constructor(
        id,
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
        mileage,
        uid,
        picture,
        description,
        delivery,
        priceOption,
        price
    ){
        this.id = id;
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
        this.uid = uid;
        this.picture = picture;
        this.description = description;
        this.delivery = delivery;
        this.priceOption = priceOption;
        this.price = price;
    }
    toMap(){
        return{
            id: this.id,
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
            uid: this.uid,
            picture: this.picture,
            description: this.description,
            delivery: this.delivery,
            priceOption: this.priceOption,
            price: this.price
        }
    }
    fromMap(map){
        return AnnouncementModel(
            map['id'],
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
            map['mileage'],
            map['uid'],
            map['picture'],
            map['description'],
            map['delivery'],
            map['priceOption'],
            map['price']
        )
    }
}

export default AnnouncementModel;