import {React,useEffect,useState} from 'react';
import {Card,Button} from 'react-bootstrap';
import "../layout/Announcements.css";
import { db } from "../firebase/firebase.js";
import { useHistory } from "react-router";


function Announcements(props) {


    

    const [announcements, setAnnouncements] = useState([]);

    const searchCar = async () => {

    let query = await db
    .collection("announcement");
    let objData = props.location.state.object;


    for(let key in objData)
            {
                  
                if(objData[key] !== "")
                {

                    if(key === "price"){

                        let priceInt = parseInt(objData[key]);
                        query = query.where(key,"<=",priceInt)
            
                        }
                        else
                        {
                        query = query.where(key, '==', objData[key]);
                        }
                }
            }

            
            let array = [];
            
            let data = await query.get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots

                        array.push(doc.data());
                        
                        
                        
                    });
                    
                   setAnnouncements(array);
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });

                for(let s of announcements)
                {
                    console.log(s.price);
                }

            }

            useEffect(() => {
                searchCar();
            })


        
    return (
        
        <div style={{ marginTop:"40px" }} >
            <h1>Results</h1>

            {announcements.map(announcement =>
                
            
            <Card className="cardAnnouncement" style={{backgroundColor:'#dfc15e',borderColor:'black'}} >
            <Card.Body>
            <div className="col">
            <img src={announcement.picture} style={{  float:"left",width:"200px",height:"200px"   }} />
            
            
            </div>
            <div className="col" id="col2">
            <Card.Title>{announcement.brand} - {announcement.model}</Card.Title>
            <Card.Text  >
            {announcement.description}
            </Card.Text >

            <Card.Text  >
            <h4>{announcement.price} $</h4>
            </Card.Text >
            
            </div>
            <Button style={{ verticalAlign:"bottom",marginLeft:"40px" }} variant="dark">Show Details</Button>
            </Card.Body>
            </Card>
            )};
           

        </div>
    )
}

export default Announcements;
