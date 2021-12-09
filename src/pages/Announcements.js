import {React,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {Card,Button} from 'react-bootstrap';
import "../layout/Announcements.css";
import { db } from "../firebase/firebase.js";


function Announcements(props) {

    const [announcements, setAnnouncements] = useState([]);

    const searchCar = async () => {
    let query = db
    .collection("announcement");
            
            let array = [];
            
           await 
           query.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                array.push(doc.data());
            });

            setAnnouncements(array);
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        })   
    }
    
    useEffect(()=> {
        const unsub = searchCar();  
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
                            <h2>Find Your <em> Dream Car</em></h2>
                            <img src="assets/images/line-dec.png" alt="" />
                            <p>Below you can find an overview of all the announcements posted on our website.</p>
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
                                        <del><sup>€</sup>{announcement.price} </del> &nbsp; <sup>€</sup> {announcement.price} 
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
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>                     
                        )
                };
                
                </div>
                <br />
                <div className="main-button text-center">
                <a href="#">View More Cars</a>
                </div>
            </div>
            </section>
            
        </div>
           

        
    )
}

export default Announcements;