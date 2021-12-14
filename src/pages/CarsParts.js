import {React,useEffect,useState} from 'react';
import "../layout/Announcements.css";
import { db } from "../firebase/firebase.js";
import { Link } from 'react-router-dom';


function CarParts() {

    const [carParts, setCarParts] = useState([]);

    const searchCarParts = async () => {
    let query = db
    .collection("car_parts");
            
    let array = [];
            
    await 
    query.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            array.push(doc.data());
        });

        setCarParts(array);
    }).catch(function(error) {
            console.log("Error getting documents: ", error);
        })   
    }
    
    useEffect(()=> {
        const unsub = searchCarParts();  
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
                            <h2>Find <em>Car Parts</em></h2>
                            <img src="assets/images/line-dec.png" alt="" />
                            <p>Here you can find an overview of all the car parts available on our website.</p>
                        </div>
                    </div>
                </div>
                <div className="row ">
                
                {
                    carParts.map(carPart =>
                        <div className="center-col">  
                            <div className="col-lg-6 col-sm-12  ">
                                <div className="trainer-item">
                                    <div className="image-thumb">
                                        <img className="img-fluid" src={carPart.picture} />
                                    </div>
                                    <div className="down-content p-2">
                                        <span>
                                        <del><sup>€</sup>{parseInt(carPart.price)+29} </del> &nbsp; <sup>€</sup>  {carPart.price} 
                                        </span>
                                        <h4> {carPart.title}</h4>                                     
                                        <p>
                                        <i className="fa fa-calendar" /> {carPart.date} &nbsp;&nbsp;&nbsp;
                                        </p>
                                        <p>
                                        <i className="fa fa-cube" /> Still in the box &nbsp;&nbsp;&nbsp;
                                        </p>
                                        <p>
                                        <i className="fa fa-cog" /> {carPart.description} &nbsp;&nbsp;&nbsp;
                                        </p>
                                        <ul className="social-icons">
                                        <li><Link to= {{
                                            pathname: '/car-part',
                                            carProps:{
                                                title: carPart.title,
                                                desc: carPart.description,
                                                date: carPart.date,
                                                price: carPart.price,
                                                email: carPart.email,
                                            }
                                        }}> + View Car Part</Link></li>
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
                <a href="#">View More Car Parts</a>
                </div>
            </div>
            </section>
            
        </div>
           

        
    )
}

export default CarParts;