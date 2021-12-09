class AnnouncementModel{
    constructor(
        id,
        carId,
        carDetailId,
        uid,
    ){
        this.id = id;
        this.carId = carId;
        this.carDetailId = carDetailId;
        this.uid = uid;
    }
    toMap(){
        return{
            id: this.id,
            carId: this.carId,
            carDetailId: this.carDetailId,
            uid: this.uid,
        }
    }
}

export default AnnouncementModel;