import React , {useRef} from 'react'
import Modal from 'react-modal';
import { auth, db } from '../firebase/firebase';
import { Form, Button, Alert } from "react-bootstrap"
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)


function AdminModal() {
  let subtitle;
  const textRef = useRef()
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    reportSuspciousLogin()
    setLoading(true)
    setError("") 
  }


  async function reportSuspciousLogin() {
      try{
          const date = new Date;
            const data = {
            uid: auth.currentUser.uid,
            text: textRef.current.value,          
            date: date.toString(),  
            };  
            await db
            .collection("admin_logs").doc("audit_logs")
            .collection("suspicious_login").doc()
            .set(data);
            setMessage("Succesfully sent!")

         
      } catch (e){
          setError(e);
      }        
  }
  
 
  return (
    <div>
      <button onClick={openModal} className="btn btn-danger mt-5 mb-3 mx-5">Report a suspicious login</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Report a suspicious login"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Report a suspicious login</h2>
       
        <p className="mt-4">Please fill in below why and when you suspect a suspicious login.</p>
        <p>Also, make sure you change your password after reporting this incident.</p>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                ref={textRef}
                required
                defaultValue={"I suspect a suspicious login on "}
              />
            </Form.Group>
            <Button disabled={loading} className="main-button text-center mt-5 mb-3" type="submit">
              Report
            </Button>
            </Form>
   

        <div className="d-flex justify-content-end mt-5">
            <button onClick={closeModal}className="btn btn-dark">close</button>
        </div>
  
      </Modal>
    </div>
  );
}


export default AdminModal
