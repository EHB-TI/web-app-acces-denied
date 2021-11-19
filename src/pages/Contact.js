import React from 'react';
import {Form,Button} from 'react-bootstrap';
import "../layout/Contact.css";

function Contact() {
    return (
        <div>
            <Form className="contactForm">
                <h1 id="titleContact">Contact us</h1>
  <Form.Group className="mb-3">
    <Form.Label>Full name</Form.Label>
    <Form.Control type="text" placeholder="Full name..." required/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Email..." required />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="tel" placeholder="Phone..." required />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" placeholder="Message..." rows={8} required/>
  </Form.Group>
  <Button variant="dark" id="btnContact" type="submit">Send</Button>
</Form>
        </div>
    )
}

export default Contact;
