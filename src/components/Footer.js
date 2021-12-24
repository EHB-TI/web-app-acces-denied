import React from 'react';
import { Link } from 'react-router-dom';
import "../layout/Footer.css"

function Footer() {
    return (
       <footer>
        <div className="footer">
           <div className="container">
               <div className="row">
                   {/* Column 1 */}
                   <div className="col-md-3 col-sm-6">
                       <h5>Contact Us</h5>
                       <ul className="list-unstyled">                           
                           <li>Team Access_Denied</li>
                           <li>Nijverheidskaailaan 170</li>
                           <li>1070 Anderlecht</li>
                           <li>Tel: +32768797</li>                           
                       </ul>
                   </div>

                   {/* Column 2 */}
                   <div className="col-md-3 col-sm-6">
                       <h5>Services</h5>
                       <ul className="list-unstyled">
                           <li><Link to="/buy" className="footer-link">Search for a car</Link></li>
                           <li><Link to="/evaluate" className="footer-link">Evaluate your car</Link></li>
                           <li><Link to="/sell" className="footer-link">Sell a car</Link></li>
                           <li><Link to="/sell-parts" className="footer-link">Sell car parts</Link></li>
                       </ul>
                   </div>
                   {/* Column 3 */}
                   <div className="col-md-3 col-sm-6">
                       <h5>Privacy Policy</h5>
                       <ul className="list-unstyled">
                           <li><Link to="/privacy" className="footer-link">Privacy &amp; Cookies</Link></li>
           
                       </ul>
                   </div>
                   {/* Column 4 */}
                   <div className="col-md-3 col-sm-6">
                       <h5>Services</h5>
                       <ul className="list-unstyled">
                           <li><Link to="/buy" className="footer-link">Announcements</Link></li>
                           <li><Link to="/car-parts" className="footer-link">Car Parts</Link></li>
                           <li><Link to="/about-us" className="footer-link">About us</Link></li>
                           <li><Link to="/contact-us" className="footer-link">Contact us</Link></li>
                           <li><Link to="/loan-calculator" className="footer-link">Calulate your loan</Link></li>
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


