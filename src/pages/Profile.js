import React, { useEffect, useState } from "react";
import '../layout/Profile.css';
import "firebase/auth";
import { useHistory } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/firebase.js";
import { Link } from "react-router-dom";

function Profile() {

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const history = useHistory();

    const fetchUserName = async () => {
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
       
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
   </div>
</div>
 
    )
}

export default Profile
