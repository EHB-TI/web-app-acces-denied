import {React,useState} from 'react';
import {Card,Form,Button,Alert, Container} from 'react-bootstrap';
import { useHistory } from "react-router";
import emailjs from 'emailjs-com';
import "../layout/Contact.css";

function Contact() {
  const [succes, setSucces] = useState("")
  const [error, setError] = useState("")
  
  const SendEmail = (e) => {
    e.preventDefault();  

    emailjs.sendForm('service_tyhl9gw', 'template_pmk3zdm', e.target, 'user_GfFYdwckCKTcz5nj46W9F')
      .then((result) => {        
          setSucces("Email successfully sent")
          //console.log(result.text);        
      }, (error) => {
          setError(`An error has occured: ${error}`)
          //console.log(error.text);
      });
  };
    return (
        <Container>
          <Card >
            <Card.Body>
              <Form className="contactForm" onSubmit={SendEmail}>
                <div className="text-center">
                  <h2>Contact <em>Us</em></h2>
                  <img src="assets/images/line-dec.png" alt="" />
                </div>
                {succes && <Alert variant="success">{succes}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text"  placeholder="Subject..." name="subject" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control type="text"  placeholder="Full name..." name="full_name" required/>
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email"  name="email_customer" placeholder="Email..." required />
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number"  placeholder="Phone..." name="phone_number" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea"  placeholder="Message..." name="message" rows={8} required/>
                </Form.Group>
                <Button variant="dark" id="btnContact" type="submit">Send</Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
    )
}

export default Contact;