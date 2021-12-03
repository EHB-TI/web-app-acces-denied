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

              <div className="carImage">
              <h2>Mercedes Classe A 180 160pk</h2>
              <img src="assets/images/line-dec.png" alt=""/>
              </div>

        <div className="boxGroup">
          <Card className="boxDetails" style={{ width: '13rem', marginTop:30,margin:20 }}>
            <Card.Body>
            
            <Card.Text >
           130 vgbh
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

              
              <label>Brand:</label>
              <p>Mercedes</p>

              <label>Model:</label>
              <p>A180</p>

              <label>ConstructionYear:</label>
              <p>2021</p>

              <label>Fuel:</label>
              <p>Diesel</p>

              <label>Gearbox:</label>
              <p>Manual</p>

              <label>Transmission:</label>
              <p>loru</p>

              <label>Color:</label>
              <p>Black</p>

              
             
              </div>


              <div className="Column2">

              <label>Brand:</label>
              <p>Mercedes</p>

              <label>Brand:</label>
              <p>Mercedes</p>

              <label>Number of places:</label>
              <p>5</p>

              <label>Number of doors:</label>
              <p>5</p>

              

              <label>Number of doors:</label>
              <p>Mercedes</p>

              <label>Number of doors:</label>
              <p>Mercedes</p>

              <label>Number of doors:</label>
              <p>Mercedes</p>

              </div>

              </div>


              <div style={{ marginTop: 40 }}>
                <label>Description:</label>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>

            
            

          </Card.Body>
        </Card>
      </Container>
    )
}

export default CarDetails;