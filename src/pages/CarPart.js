import {React,useEffect,useState} from 'react';
import "../layout/Announcements.css";

function CarPart(props) {     
    const [subjectMail, setSubjectMail] = useState("subject");
    const [bodyMail, setBodyMail] = useState("body"); 
    return (
        <div>
        {/* ***** Cars Starts ***** */}
        <section className="section" id="trainers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading">
                            <h2>The Perfect Car Part <em>For You</em></h2>
                            <img src="assets/images/line-dec.png" alt="" />
                            <p>Here you can find an overview of all the car parts available on our website.</p>
                        </div>
                    </div>
                </div>
                <div className="row ">             
                        <div className="center-col">  
                            <div className="col-lg-6 col-sm-12  ">
                                <div className="trainer-item">
                                    <div className="image-thumb">
                                        <img className="img-fluid" src={props.location.carProps.picture} />
                                    </div>
                                    <div className="down-content p-2">
                                        <span>
                                        <del><sup>€</sup>{parseInt(props.location.carProps.price)+29} </del> &nbsp; <sup>€</sup>  {props.location.carProps.price} 
                                        </span>
                                        <h4>
                                        {props.location.carProps.title} &nbsp;&nbsp;&nbsp;
                                        </h4>
                                        <p>
                                        #PostedBy  {props.location.carProps.email} &nbsp;&nbsp;&nbsp;
                                        </p>
                                        <p>
                                        <i className="fa fa-calendar" /> {props.location.carProps.date} &nbsp;&nbsp;&nbsp;
                                        </p>
                                        <p>
                                        <i className="fa fa-cube" /> Still in the box &nbsp;&nbsp;&nbsp;
                                        </p>
                                        <p>
                                        <i className="fa fa-cog" /> {props.location.carProps.desc} &nbsp;&nbsp;&nbsp;
                                        </p>
                                        <ul className="social-icons">
                                    
                                        </ul>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                    <button className='btn btn-success' onClick={() => window.open(`mailto:${props.location.carProps.email}?subject=${subjectMail}&body=${bodyMail}`)} style={{ width: '13rem', marginTop:30,margin:20 }}>Contact Seller <i class="far fa-paper-plane"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <br />
                <div className="main-button text-center">
                <a href="/car-parts">Return to All Car Parts</a>
                </div>
            </div>
            </section>            
        </div>
    )
}

export default CarPart;