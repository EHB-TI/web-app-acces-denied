import React from 'react';
import {Card,Button} from 'react-bootstrap';
import "../layout/Announcements.css";


function Announcements() {
    return (
        
        <div style={{ marginTop:"40px" }} >
            <h1>Results</h1>
            <Card className="cardAnnouncement" style={{backgroundColor:'#dfc15e',borderColor:'black'}} >
            <Card.Body>
            <div className="col">
            <img src="logo192.png" style={{ float:"left" }} />
            
            </div>
            <div className="col" id="col2">
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text  >
            With supporting text below as a natural lead-in to additional content.
            </Card.Text >

            <Card.Text  >
            <h4>20000 $</h4>
            </Card.Text >
            
            </div>
            <Button style={{ verticalAlign:"bottom",marginLeft:"40px" }} variant="dark">Show Details</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Announcements;
