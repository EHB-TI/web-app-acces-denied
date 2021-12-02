
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

function AdminReport() {
  let subtitle;
  const textRef = useRef()
  const uidRef = useRef()
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("Error");

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
   function handleChange(e){
    setSelectValue(e.target.value);
  }


  async function reportSuspciousLogin() {
      try{
            const date = new Date;
            const data = {
            type: selectValue,
            uidAdmin: auth.currentUser.uid,
            uidUser: uidRef.current.value =="UID" ? "" : uidRef.current.value ,
            text: textRef.current.value,          
            date: date.toString(),  
            };  
            await db
            .collection("admin_logs").doc("audit_logs")
            .collection("reported_incidents").doc()
            .set(data);
            setMessage("Succesfully sent!")

         
      } catch (e){
          setError(e);
      }        
  }
  
 
  return (
    <div>
      <button onClick={openModal} className="btn btn-danger mt-5 mb-3 mx-5">Report an incident</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Report an incident"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Report an incident</h2>
       
        <p className="mt-4">Please fill in below why and when you suspect a suspicious user, error or bugs, or security-thread.</p>
        <p>Also, make sure you provide some pieces of evidence and arguments when reporting an incident.</p>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Select  onChange={handleChange} aria-label="type" name="type" id="selectreport" className="mb-3">
                <option value="error" selected>Error</option>
                <option value="bug">Bug</option>
                <option value="incident">Incident</option>
            </Form.Select>
          
            <Form.Group>
              <Form.Label>Evidence - Arguments</Form.Label>
              <Form.Control
                type="text"
                ref={textRef}
                required
                defaultValue={"I suspect that the user "}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>If it affects a user or an admin, please provide the UID of suspicious user or admin</Form.Label>
              <Form.Control
                type="text"
                ref={uidRef}
                defaultValue={"UID"}
              />
            </Form.Group>
            <Button disabled={loading} className="main-button text-center mt-5 mb-3" type="submit">
              Report incident
            </Button>
            </Form>
   

        <div className="d-flex justify-content-end mt-5">
            <button onClick={closeModal}className="btn btn-dark">close</button>
        </div>
  
      </Modal>
    </div>
  );
}


export default AdminReport
