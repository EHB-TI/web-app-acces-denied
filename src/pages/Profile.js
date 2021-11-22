import React, { useEffect, useState } from "react";
import '../layout/Profile.css';
import '../layout/Announcements.css';
import "firebase/auth";
import { useHistory } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/firebase.js";
import { Link } from "react-router-dom";
import {Card,Button} from 'react-bootstrap';

function Profile() {

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [announcements,setAnnouncements] = useState([]);
    const history = useHistory();

    const fetchCars = async () => {
        let queryAnnouncements = await db
            .collection("announcement");

            queryAnnouncements.where("uid", "==", user?.uid);
            
        let array = [];
            
           
        await queryAnnouncements.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                array.push(doc.data());
            });

            setAnnouncements(array);
        })

    }

    const fetchUsername = async () => {
        try {
          const query = await db
            .collection("users")
            .where("uid", "==", user?.uid)
            .get();

        const data = query.docs[0].data();
          setName(data.name);
 
        } catch (err) {
          //LOGGING HIERONDER 
          console.error(err);
          alert(`Problem with our Cloud Database.\n${err}`);
        }
      };

      useEffect(() => {
        if (loading) return;
        if (!user) return history.replace("/");
    
        fetchUsername();
        fetchCars();
      }, [user, loading]);


    return (
    <div id='all'>
    <div className="padding">
        <div className="row justify-content-center">
            <div className="col-xl-6 col-md-12">
                <div className="card user-card-full">
                    <div className="row  m-l-0 m-r-0">
                        <div className="col-sm-4 bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> 
                                <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image"/> </div>
                                <h6 className="f-w-600">{name}</h6>
                                <p>Software security architect</p> <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="card-block">
                                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h6 className="text-muted f-w-400">{user?.email}</h6>
                                    </div>
                                </div>
                                <Link to="/update-profile" className="btn btn-primary w-50 mt-3">
                                    Update Profile
                                </Link>
                                <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Recent</p>
                                        <h6 className="text-muted f-w-400">Libsodium</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="m-b-10 f-w-600">Most Viewed</p>
                                        <h6 className="text-muted f-w-400">Cryptography</h6>
                                    </div>
                                </div>
                                <ul className="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i className="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i className="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i className="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   <hr></hr>

        <div className="row justify-content-center">
            <div className="col-xl-6 col-md-12">
                <h1>Advertisements</h1>
       
                {
            announcements.map(announcement =>
                <Card className="cardAnnouncement" style={{backgroundColor:'#dfc15e',borderColor:'black'}} >
                    <Card.Body>
                        <div className="row">
                        <div className="col-sm-3">
                            <img className="img-fluid" src={announcement.picture} />
                        </div>
                        <div className="col-sm-9" id="col2">
                            <Card.Title>{announcement.brand}{announcement.model}</Card.Title>
                            <Card.Text  >
                            {announcement.description}
                            </Card.Text >

                            <Card.Text  >
                            {announcement.price} $
                            </Card.Text >
                        </div>
                        </div>
                        <Button style={{ verticalAlign:"bottom",marginLeft:"40px" }} variant="dark">Show Details</Button>
                    </Card.Body>
                </Card>
                )};
            </div>
        </div>  
   </div>
</div>
 
    )
}

export default Profile
