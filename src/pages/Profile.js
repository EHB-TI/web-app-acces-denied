import React, { useEffect, useState } from "react";
import '../layout/Profile.css';
import "firebase/auth";
import { Button} from 'react-bootstrap';
import { useHistory } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/firebase.js";
import { Link } from "react-router-dom";
import MyAnnouncements from "./MyAnnouncements";

function Profile() {

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const history = useHistory();

    async function delete_annoucements(id_announcement){
        try {
            await db.collection("announcements").doc(id_announcement).delete();
        } catch (err) {
            console.error(err)
        }
    }

    async function delete_user(){
        try {
            await db.collection("users").doc(auth.currentUser.uid).delete();
            await auth.currentUser.delete();
        } catch (err) {
            console.error(err)
        }
    }

    async function delete_user_data(){
		try {
			const anouncementQuery = await db.collection("announcements").where("email", "==", auth.currentUser.email);
			anouncementQuery.get().then((querySnapshot) => {
				querySnapshot.forEach((doc) =>  {
                    console.log(doc.data().email)
                    delete_annoucements(doc.id)
				});
			});
			delete_user()
        } catch (err) {
            console.error(err)
        }
	}

    const fetchUserName = async () => {
        try {
          const query = await db
            .collection("users").doc(auth.currentUser.uid)
            .get()            
            
          const data = query.data();
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
    
        fetchUserName();
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
                                <Link to="/profile-logs" className="btn btn-secondary w-50 mt-3">
                                    Security Logs
                                </Link>
                                <Button onClick={() => delete_user_data()}>
                                    Delete Profile
                                </Button>
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
<MyAnnouncements/>
</div>
</div>
    )
}

export default Profile
