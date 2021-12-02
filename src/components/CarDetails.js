import {React,useEffect,useState} from 'react';
import { db } from '../firebase/firebase';
import { Container,Alert,Card,Form,Button } from 'react-bootstrap';
import "../layout/CarDetails.css";

function CarDetails(props) {
    const [announcements, setAnnouncements] = useState([]);

    

    const carDetails = async () => {
    let query = db
    .collection("announcement").where("carDetailId", "==", props.match.params.id);
            
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
        const unsub = carDetails();  
    return unsub
    },[])
    return (
        <Container>
        <Card  style={{ width: '60rem'}} >
          <Card.Body >

            <div className="cardBody">

              <div className="carDetailsGroup">
              <h2>Mercedes Classe A 180 160pk</h2>
              <img src="assets/images/line-dec.png" alt=""/>
              </div>

        <div className="boxGroup">
          <Card className="boxDetails" style={{ width: '13rem', marginTop:30,margin:20 }}>
            <Card.Body>
            
            <Card.Text >
           130 0000km
            </Card.Text>
            
            </Card.Body>
            </Card>

          

            <Card className="boxDetails" style={{ width: '13rem', margin:20 }}>
            <Card.Body>
            
            <Card.Text>
            23 000$
            </Card.Text>
            
            </Card.Body>
            </Card>

            

            <Card className="boxDetails" style={{ width: '13rem',margin:20}}>
            <Card.Body>
            
            <Card.Text>
            122pk
            </Card.Text>
            
            </Card.Body>
            </Card>
            

            </div>
            

            <div className="Column1">

              
              <h5>Brand:</h5>
              <p>Mercedes</p>

              <h5>Model:</h5>
              <p>A180</p>

              <h5>ConstructionYear:</h5>
              <p>2021</p>

              <h5>Fuel:</h5>
              <p>Diesel</p>

              <h5>Gearbox:</h5>
              <p>Manual</p>

              <h5>Transmission:</h5>
              <p>loru</p>

              <h5>Color:</h5>
              <p>Black</p>

              <h5>Number of places:</h5>
              <p>5</p>

              <h5>Number of doors:</h5>
              <p>5</p>

              

              <h5>Number of doors:</h5>
              <p>Mercedes</p>

              <h5>Number of doors:</h5>
              <p>Mercedes</p>

              <h5>Number of doors:</h5>
              <p>Mercedes</p>
             
              </div>


              <div className="Column2">

              <h5>Brand:</h5>
              <p>Mercedes</p>

              <h5>Brand:</h5>
              <p>Mercedes</p>

              </div>

              </div>

            
            

          </Card.Body>
        </Card>
      </Container>
    )
}

export default CarDetails;