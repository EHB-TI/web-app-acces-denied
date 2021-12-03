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

function AdminModalAnnouncements() {
  let subtitle;
  const textRef = useRef()
  const aidRef = useRef()
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
    setLoading(false)
    setMessage("") 
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    reportSuspciousLogin()
    setLoading(true)
    setError("") 
  }

  async function reportSuspciousLogin() {
      try{
           var refAnnouncement = await db
            .collection("announcement").doc(aidRef.current.value)
            .get();
            var announcementData = refAnnouncement.data();
            console.log(announcementData);
            
            setMessage("Loading .... waiting for updates")
            await db
            .collection("announcement").doc(aidRef.current.value)
            .delete()

            const date = new Date;
            const data = {
            uidAdmin: auth.currentUser.uid,
            aidUser: aidRef.current.value,
            text: textRef.current.value,          
            date: date.toString(),  
            data: announcementData,
            };  
            await db
            .collection("admin_logs").doc("audit_logs")
            .collection("deleted_announcements").doc()
            .set(data);
            setMessage("Succesfully sent!")
         
      } catch (e){
          setError(e);
      }        
  }
  
 
  return (
    <div>
      <button onClick={openModal} className="btn btn-danger mt-5 mb-3 mx-5">Report a suspicious announcement</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Report a suspicious announcement"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Report a suspicious announcement</h2>
       
        <p className="mt-4">Please fill in below why you suspect an announcement to be suspicious.</p>
        <p>Also, make sure you provide some pieces of evidence and arguments when deleting an announcement.</p>
        <p>You need the announcement ID to be able to delete an announcement, this action can not be undone.</p>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Announcemnt ID </Form.Label>
              <Form.Control
                type="text"
                ref={aidRef}
                required
                defaultValue={"A-ID"}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Evidence - Arguments</Form.Label>
              <Form.Control
                type="text"
                ref={textRef}
                required
                defaultValue={"I suspect that this announcement is "}
              />
            </Form.Group>
            <Button disabled={loading} className="main-button text-center mt-5 mb-3" type="submit">
              Report announcement
            </Button>
            </Form>
   

        <div className="d-flex justify-content-end mt-5">
            <button onClick={closeModal}className="btn btn-dark">close</button>
        </div>
  
      </Modal>
    </div>
  );
}


export default AdminModalAnnouncements
