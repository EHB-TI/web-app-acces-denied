import {React,useEffect, useState} from 'react';
import { db } from '../firebase/firebase';
import { Container,Card, } from 'react-bootstrap';
import "../layout/CarDetails.css";

function CarDetails(props) {    
    const [data, setData] = useState([]);
    const carDetails = async () => {
    let query = await db
    .collection("announcement").doc(props.match.params.id).get();
    var data = query.data();
    setData(data)
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
              <h2>{data.brand} {data.model}</h2>
          
                <img className="w-100" src={data.picture} />
  
              </div>

        <div className="boxGroup">
          <Card className="boxDetails" style={{ width: '13rem', marginTop:30,margin:20 }}>
            <Card.Body>
            
            <Card.Text >
            {data.emissionNorm}
            </Card.Text>
            
            </Card.Body>
            </Card>

          

            <Card className="boxDetails" style={{ width: '13rem', margin:20 }}>
            <Card.Body>
            
            <Card.Text>
            {data.price} $
            </Card.Text>
            
            </Card.Body>
            </Card>

            

            <Card className="boxDetails" style={{ width: '13rem',margin:20}}>
            <Card.Body>
            
            <Card.Text>
            {data.mileage} km
            </Card.Text>
            
            </Card.Body>
            </Card>
            

            </div>
            

            <div className="Column1">

              <label>Model:</label>
              <p>{data.model}</p>

              <label>Brand:</label>
              <p>{data.brand}</p>

              <label>Bodywork:</label>
              <p>{data.bodywork}</p>

              <label>ConstructionYear:</label>
              <p>{data.constructionYear}</p>

              <label>Fuel:</label>
              <p>{data.fuel}</p>

              <label>Gearbox:</label>
              <p>{data.gearboxe}</p>

              <label>Transmission:</label>
              <p>{data.transmission}</p>

              <label>Color:</label>
              <p>{data.color}</p>

              <label>Price option:</label>
              <p>{data.priceOption}</p>
              <label>Price:</label>
              <p>{data.price}</p>

              
             
              </div>


              <div className="Column2">


              <label>Number of doors:</label>
              <p>5</p>

              <label>Number of places:</label>
              <p>{data.numberOfPlace}</p>

              <label>Delivery:</label>
              <p>{data.delivery}</p>


              </div>

              </div>


              <div style={{ marginTop: 40 }}>
                <label>Description:</label>
                <p>{data.description}</p>
              </div>

            
            

          </Card.Body>
        </Card>
      </Container>
    )
}

export default CarDetails;