import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../layout/Dashboard.css'
import AboutUs from "./AboutUs"
import Blog from "./Blog"
import Announcements from "../pages/Announcements";
import { Link } from "react-router-dom";

function Dashboard(){
    return (
      <div>
        <div className="main-banner" id="top">
          <video autoPlay muted loop id="bg-video">
            <source src="assets/images/video.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay header-text">
            <div className="caption">
              <h6>@Access_Denied</h6>
              <h2>Best <em>car dealer</em> in town!</h2>
              <div className="main-button">
                <a href="contact-us">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        {/* ***** Main Banner Area End ***** */}
      
        <Announcements/>

        <AboutUs/>
        
        <Blog/>

        {/* ***** Call to Action Start ***** */}
        <section className="section section-bg" id="call-to-action" style={{backgroundImage: 'url(assets/images/banner-image-1-1920x500.jpg)'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="cta-content">
                  <h2>Send us a <em>message</em></h2>
                  <p>If you have any question about our services, do not hesitate to send us</p>
                  <div className="main-button">
                    <a href="contact-us">Contact us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Call to Action End ***** */}
        {/* ***** Testimonials Item Start ***** */}
        <section className="section" id="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                  <h2>Read our <em>Testimonials</em></h2>
                  <img src="assets/images/line-dec.png" alt="waves" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem incidunt alias minima tenetur nemo necessitatibus?</p>
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="features-items">
                  <li className="feature-item">
                    <div className="left-icon">
                      <img src="assets/images/features-first-icon.png" alt="First One" />
                    </div>
                    <div className="right-content">
                      <h4>Anas Bentaher</h4>
                      <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em></p>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="left-icon">
                      <img src="assets/images/features-first-icon.png" alt="second one" />
                    </div>
                    <div className="right-content">
                      <h4>Daniel Anani Komi</h4>
                      <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em></p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="features-items">
                  <li className="feature-item">
                    <div className="left-icon">
                      <img src="assets/images/features-first-icon.png" alt="fourth muscle" />
                    </div>
                    <div className="right-content">
                      <h4>Iliass Boutechdat</h4>
                      <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em></p>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="left-icon">
                      <img src="assets/images/features-first-icon.png" alt="training fifth" />
                    </div>
                    <div className="right-content">
                      <h4>Yassin Mahouti</h4>
                      <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em></p>
                    </div>
                  </li>
                </ul>
              </div>
              
            </div>
            <div className="col-lg-6">
                <ul className="features-items">
                  <li className="feature-item">
                    <div className="left-icon">
                      <img src="assets/images/features-first-icon.png" alt="fourth muscle" />
                    </div>
                    <div className="right-content">
                      <h4>Cédric Devogelaere</h4>
                      <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em></p>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="left-icon">
                      <img src="assets/images/features-first-icon.png" alt="training fifth" />
                    </div>
                    <div className="right-content">
                      <h4>@Acces_Denied</h4>
                      <p><em>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta numquam maxime voluptatibus, impedit sed! Necessitatibus repellendus sed deleniti id et!"</em></p>
                    </div>
                  </li>
                </ul>
              </div>
            
            
            <br />
            <div className="main-button text-center">
              <Link to="/blog">Read More</Link>
            </div>
          </div>
        </section>
        {/* ***** Testimonials Item End ***** */}
      </div>
    );
  }
export default Dashboard;