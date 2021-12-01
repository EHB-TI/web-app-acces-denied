import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from "../firebase/firebase.js";

function AdminHome() {


    const [announcements, setAnnouncements] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [lastAdminLogin, setLastAdminLogin] = useState([]);

    const fetchUsers = async () => {
    let queryAllUsers = db
            .collection("users")      
            
    let users = [];
           
    await queryAllUsers.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            users.push(doc.data());
        });
        setAllUsers(users);
    })
    }

    let cars = [];
    const fetchCars = async () => {
    let queryCars = db
            .collection("announcement")      
            
    
           
    await queryCars.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            cars.push(doc.data());
        });
        setAnnouncements(cars);
    })
    }
    
    let adminLogin = [];
    const fetchAdminLogin = async () => {
    let queryAdmin = db
            .collection("admins").doc(auth.currentUser.uid).collection("admin_page");
            
    
           
    await queryAdmin.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          adminLogin.push(doc.data());
        });
        setLastAdminLogin(adminLogin);
    })
    }
    useEffect(()=> {
         fetchAdminLogin();
         fetchCars(); 
         fetchUsers();
      
    return 
    },[])
        

    return (
        <section className="section" id="our-classes">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                  <h2><em>Admin</em> Dashboard</h2>
                  <img src="assets/images/line-dec.png" alt="" />
                  <p>Please ensure you never show, nor share your admin credentials.</p>
                  <p>If you suspect that someone has gained illegal access to your credentials, please change your password or contact us <Link to="/contact-us">here</Link>.</p>
                </div>
              </div>
            </div>
            <div className="row" id="tabs">
              <div className="col-lg-4">
                <ul>
                  <li><a href="#tabs-1">Security logs - Audit logs</a></li>
                  <li><a href="#tabs-2">Delete a user</a></li>
                  <li><a href="#tabs-3">Delete an announcement</a></li>
                  <div className="main-rounded-button"><Link to="/contact-us">ALERT US</Link></div>
                </ul>
              </div>
              <div className="col-lg-8">
                <section className="tabs-content">
                  <article id="tabs-1">
                    <img src="assets/sa-logs.png" alt="" />
                    <h4>Security Logs</h4>
                    {
                        lastAdminLogin.map(admin =>
                            <p><i className="fa fa-user" />{ admin.email}  &nbsp;|&nbsp; <i className="fa fa-calendar" /> { admin.date } </p>
                        )
                    }
                    <div className="main-button text-center  mt-5 mb-3">
                      <a href="blog-details.html">Report an abusive login</a>
                    </div>
                    <br/>
                    <h4>Audit Logs</h4>
                    <hr/>
                    <p><i className="fa fa-user" /> Anas Benather &nbsp;|&nbsp; <i className="fa fa-calendar" /> 27.07.2020 10:10 &nbsp;|&nbsp; <i className="fa fa-comments" />  15 comments</p>

                    <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
                    <hr/>
                    <div className="main-button text-center mt-5 mb-3">
                      <a href="blog-details.html">Report an anomaly</a>
                    </div>
                 

                    <h4>Errors &amp; Bugs </h4>
                    <hr/>
                    <p><i className="fa fa-user" /> Anas Benather &nbsp;|&nbsp; <i className="fa fa-calendar" /> 27.07.2020 10:10 &nbsp;|&nbsp; <i className="fa fa-comments" />  15 comments</p>

                    <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
                    <hr/>
                    <div className="main-button text-center  mt-5 mb-3">
                      <a href="blog-details.html">Report an anomaly</a>
                    </div>
                    <br/>
                  </article>

                  <article id="tabs-2">
                    <img src="assets/mu-logs.png" alt="" />
                    <h4>All users</h4>
                    {
                        allUsers.map(user =>
                            <p><i className="fa fa-user" />{ user.name ?? "No username *!"}  &nbsp;|&nbsp; <i className="fa fa-comments" />  UID: {user.uid} &nbsp;|&nbsp; email address: {user.email} &nbsp;|&nbsp; <i className="fa fa-calendar" /> 27.07.2020 10:10</p>
                        )
                    }
                    
                    <div className="main-button">
                      <a href="blog-details.html">Report a user</a>
                    </div>
                  </article>

                  <article id="tabs-3">
                    <img src="assets/ma-logs.png" alt="" />
                    <h4>All announcements</h4>
                    {
                        announcements.map(car =>
                            <p><i className="fa fa-user" />{ car.id}  &nbsp;|&nbsp; <i className="fa fa-comments" />Posted by UID: {car.uid} &nbsp;|&nbsp; email address: {car.price} &nbsp;|&nbsp; <i className="fa fa-calendar" /> 27.07.2020 10:10</p>
                        )
                    }
                    Modal()
                    
                    <div className="main-button">
                      <a href="blog-details.html">Delete an announcement with ID</a>
                    </div>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </section>
        
    )
}

export default AdminHome


