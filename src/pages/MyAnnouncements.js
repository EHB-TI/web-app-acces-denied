import {React,useEffect,useState} from 'react';
import "../layout/Announcements.css";
import { Link } from 'react-router-dom';
import { auth, db } from "../firebase/firebase.js";



async function delete_an_annoucement(id_announcement){
    try {
        await db.collection("announcements").doc(id_announcement).delete();
        window.location.reload(false);
    } catch (err) {
        console.error(err)
    }
}

function MyAnnouncements() {
    
    const [announcements, setAnnouncements] = useState([]);

    const fetchCars = async () => {
        let queryAnnouncements = db
            .collection("announcements").where("email", "==", auth.currentUser.email);           
            
    let array = [];
  
    await queryAnnouncements.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            array.push(doc.data());
        });

        setAnnouncements(array);
    })
    }
    
    useEffect(()=> {
        const unsub = fetchCars();  
    return unsub
    },[])
        
    return (
        <div>
        {/* ***** Cars Starts ***** */}
        <section className="section" id="trainers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading">
                            <h2>My <em>Announcements</em></h2>
                            <img src="assets/images/line-dec.png" alt="" />
                            <p>Find an overview of your posted announcements.</p>
                        </div>
                    </div>
                </div>
                <div className="row ">
                
                {
                    announcements.map(announcement =>
                        <div className="center-col">  
                            <div className="col-lg-6 col-sm-12  ">
                                <div className="trainer-item">
                                    <div className="image-thumb">
                                        <img className="img-fluid" src={announcement.picture} />
                                    </div>
                                    <div className="down-content">
                                        <span>
                                        <del><sup>€</sup>{announcement.price} </del> &nbsp; <sup>€</sup>  {announcement.price} 
                                        </span>
                                        <h4>{announcement.brand}{announcement.model}</h4>
                                        <p>{announcement.description}</p>
                                        <p>
                                        <i className="fa fa-dashboard" /> 130 000km &nbsp;&nbsp;&nbsp;
                                        <i className="fa fa-cube" /> 1800 cc &nbsp;&nbsp;&nbsp;
                                        <i className="fa fa-cog" /> Manual &nbsp;&nbsp;&nbsp;
                                        </p>
                                        <ul className="social-icons">
                                        <li><Link to={{ 
                                            pathname: "/announcement/details/" + announcement.id ,
                                             }}>+ View Car Details</Link></li>
                                        <li><button onClick={() => delete_an_annoucement(announcement.id)}>Delete this announcement</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>                     
                        )
                };
                
                </div>
                <br />
          
            </div>
            </section>
            
        </div>
    )
}

export default MyAnnouncements;