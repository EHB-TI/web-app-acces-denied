//not finished
class AnnouncementModel{
    constructor(
        uid,
        carid,
        picture,
        description,
        delivery,
        priceOption,
        price
    ){
        this.uid = uid;
        this.carid = carid;
        this.picture = picture;
        this.description = description;
        this.delivery = delivery;
        this.priceOption = priceOption;
        this.price = price;
    }
    toMap(){
        return{
            uid: this.uid,
            carid: this.carid,
            picture: this.picture,
            description: this.description,
            delivery: this.delivery,
            priceOption: this.priceOption,
            price: this.price
        }
    }
    fromMap(map){
        return AnnouncementModel(
            map['uid'],
            map['carid'],
            map['picture'],
            map['description'],
            map['delivery'],
            map['priceOption'],
            map['price']
        )
    }
}

export default AnnouncementModel;