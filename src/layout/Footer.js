import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer() {
    return (
       <footer className="main-footer">
           <div className="footer">
           <div className="container">
               <div className="row">
                   {/* Column 1 */}
                   <div className="col-md-3 col-sm-6">
                       <h5>Contact Us</h5>
                       <ul className="list-unstyled">
                           <li>Nijverheidskaailaan 170</li>
                           <li>1070 Anderlecht</li>
                           <li>Tel: +32768797</li>
                           
                       </ul>
                   </div>

                   {/* Column 2 */}
                   <div className="col-md-3 col-sm-6">
                       <h5>Klantenservice</h5>
                       <ul className="list-unstyled">
                           <li><Link to="/about" className="footer-link">Hulp en informatie</Link></li>
                           <li><Link to="/about" className="footer-link">About</Link></li>
                           <li><Link to="/about" className="footer-link">About</Link></li>
                           <li><Link to="/about" className="footer-link">About</Link></li>
                       </ul>
                   </div>

                   {/* Column 3 */}
                   <div className="col-md-3 col-sm-6">
                       <h5>Wet</h5>
                       <ul className="list-unstyled">
                           <li><Link to="/about" className="footer-link">Algemene Voorwaarden</Link></li>
                           <li><Link to="/about" className="footer-link">Privacy & Cookies</Link></li>
                           <li><Link to="/about" className="footer-link">Toegangelijkheid</Link></li>
                       </ul>
                   </div>

                   {/* Column 4 */}
                   <div className="col-md-3 col-sm-6">
                       <h5>Lorem ipsum</h5>
                       <ul className="list-unstyled">
                           <li><Link to="/about" className="footer-link">About</Link></li>
                           <li><Link to="/about" className="footer-link">About</Link></li>
                           <li><Link to="/about" className="footer-link">About</Link></li>
                           <li><Link to="/about" className="footer-link">About</Link></li>
                       </ul>
                   </div>
                   {/* Footer Bottom */}
                   <div className="footer-bottom">
                       <p className="p.text-xs-center">
                           &copy;{new Date().getFullYear()} Car App - All Rights Reserved
                       </p>
                   </div>
                   

               </div>

           </div>
           </div>
       </footer>
    )
}

export default Footer;


