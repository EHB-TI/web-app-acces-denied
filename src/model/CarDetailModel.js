class CarDetailModel{
    constructor(
        id,
        engine, 
        transmission, 
        emptyWeight, 
        consumption,
        numberOfPlace,
        color,
        description,
        delivery,
        priceOption
    ){
        this.id = id;
        this.engine = engine;
        this.transmission = transmission;
        this.emptyWeight = emptyWeight;
        this.consumption = consumption;
        this.numberOfPlace = numberOfPlace;
        this.color = color;
        this.description = description;
        this.delivery = delivery;
        this.priceOption = priceOption;
    }
    toMap(){
        return{
            id: this.id,
            engine: this.engine,
            transmission: this.transmission,
            emptyWeight: this.emptyWeight,
            consumption: this.consumption,
            numberOfPlace: this.numberOfPlace,
            color: this.color,
            description: this.description,
            delivery: this.delivery,
            priceOption: this.priceOption,
        }
    }
}

export default CarDetailModel;