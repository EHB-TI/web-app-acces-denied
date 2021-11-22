import {React,useEffect,useState} from 'react';
import {Card,Button, Col} from 'react-bootstrap';
import "../layout/Announcements.css";
import { db } from "../firebase/firebase.js";
import { useHistory } from "react-router";


function Announcements(props) {

    const [announcements, setAnnouncements] = useState([]);

    const searchCar = async () => {
    let query = db
    .collection("announcement");
    let objData = props.location.state.object;


    for(let key in objData)
            {                  
                if(objData[key] !== "")
                {
                    if(key === "price"){
                        let priceInt = parseInt(objData[key]);
                        query = query.where(key,"<=",priceInt)            
                    }else{
                        query = query.where(key, '==', objData[key]);
                    }
                }
            }

            
            let array = [];
            
           await 
           query.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                array.push(doc.data());
            });

            setAnnouncements(array);
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        })   
    }
    
    useEffect(()=> {
        const unsub = searchCar();  
    return unsub
    },[])
        

    return (
        
        <div style={{ marginTop:"40px" }} >
            <h1>Results</h1>

            {
            announcements.map(announcement =>
                
                <Card className="cardAnnouncement" style={{backgroundColor:'#dfc15e',borderColor:'black'}} >
                    <Card.Body>
                        <div className="row">
                        <div className="col-sm-3">
                            <img className="img-fluid" src={announcement.picture} />
                        </div>
                        <div className="col-sm-9" id="col2">
                            <Card.Title>{announcement.brand}{announcement.model}</Card.Title>
                            <Card.Text  >
                            {announcement.description}
                            </Card.Text >

                            <Card.Text  >
                            {announcement.price} $
                            </Card.Text >
                        </div>
                        </div>
                        <Button style={{ verticalAlign:"bottom",marginLeft:"40px" }} variant="dark">Show Details</Button>
                    </Card.Body>
                </Card>
            )};
           

        </div>
    )
}

export default Announcements;
