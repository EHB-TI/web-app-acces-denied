import {React,useEffect,useState} from 'react';
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
                            <h2>Featured <em>Cars</em></h2>
                            <img src="assets/images/line-dec.png" alt="" />
                            <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
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
                                        <li><a href="car-details.html">+ View Car</a></li>
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
                <a href="/announcements">View Cars</a>
                </div>
            </div>
            </section>
            
        </div>
              
    )
}

export default Announcements;