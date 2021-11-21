//not finished
class AnnouncementModel{
    constructor(
        imgUrl,
        description,
        delivery,
        priceOption,
        price
    ){
        this.imgUrl = imgUrl;
        this.description = description;
        this.delivery = delivery;
        this.priceOption = priceOption;
        this.price = price;
    }
    toMap(){
        return{
            imgUrl: this.imgUrl,
            description: this.description,
            delivery: this.delivery,
            priceOption: this.priceOption,
            price: this.price
        }
    }
    fromMap(map){
        return AnnouncementModel(
            map['imgUrl'],
            map['description'],
            map['delivery'],
            map['priceOption'],
            map['price']
        )
    }
}