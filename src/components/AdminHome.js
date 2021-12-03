import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from "../firebase/firebase.js";
import AdminModal from './AdminModal.js';
import AdminModalAnnouncements from './AdminModalAnnouncements.js';
import AdminModalUsers from './AdminModalUsers.js';
import AdminReport from './AdminReport.js';

function AdminHome() {


    const [announcements, setAnnouncements] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [lastAdminLogin, setLastAdminLogin] = useState([]);
    
    const [suspiciousLogs, setSuspiciousLogs] = useState([]);
    const [incidents, setIncidents] = useState([]);

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
            .collection("admins").doc(auth.currentUser.uid).collection("admin_page").orderBy('date').limitToLast(15);           
    
           
    await queryAdmin.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          adminLogin.push(doc.data());
        });
        setLastAdminLogin(adminLogin);
    })
  }
    let suspiciousLogins = [];
    const fetchSuspicousLogins = async () => {
    let querySuspiciousLogins = db
            .collection("admin_logs").doc("audit_logs").collection("suspicious_login");
            

           
    await querySuspiciousLogins.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          suspiciousLogins.push(doc.data());
        });
        setSuspiciousLogs(suspiciousLogins);
    })
  }

  let incidentLogs = [];
  const fetchIncidents = async () => {
  let queryIncidents = db
          .collection("admin_logs").doc("audit_logs").collection("reported_incidents");
          

         
  await queryIncidents.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        incidentLogs.push(doc.data());
      });
      setIncidents(incidentLogs);
  })
}

    useEffect(()=> {
         fetchAdminLogin();
         fetchSuspicousLogins();
         fetchIncidents();
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
                  <AdminReport/>
                </ul>
              </div>
              <div className="col-lg-8">
                <section className="tabs-content">
                  <article id="tabs-1">
                    <img src="assets/sa-logs.png" alt="" />
                    <h4>Security Logs</h4>
                    <hr/>
                    {
                        lastAdminLogin.map(admin =>
                            <p><i className="fa fa-user" /> { admin.email}  <br/> <i className="fa fa-calendar" /> { admin.date } </p>
                        )
                    }
                    <AdminModal/>
                    
                    <h4>Suspicious Login</h4>
                    {
                        suspiciousLogs.map(logs =>
                            <p><i className="fa fa-user" /> Admin UID: { logs.uid}  &nbsp;|&nbsp; <i class="fas fa-info"></i> Description:{ logs.text} <br/>  <i className="fa fa-calendar" /> { logs.date } </p>
                        )
                    }
                    <hr/>
                    

                    <h4>Incidents - Errors &amp; Bugs </h4>
                    <hr/>
                    {
                        incidents.map(incident =>
                            <p><i class="fas fa-info"></i> Type of Report: { incident.type}  &nbsp;|&nbsp; <i className="fa fa-user" /> Admin UID: { incident.uidAdmin}  &nbsp;|&nbsp; <i class="fas fa-info"></i> Description: { incident.text}  &nbsp;|&nbsp;  <i className="fa fa-user" /> Concerning the User: { incident.uidUser} <br/> <i className="fa fa-calendar" /> { incident.date }</p>
                        )
                    }
                    <hr/>
                    <AdminReport/>
                    <br/>
                  </article>

                  <article id="tabs-2">
                    <img src="assets/mu-logs.png" alt="" />
                    <h4 id="AdminHome">All users</h4>
                    <hr/>
                    {
                        allUsers.map(user =>
                            <p><i className="fa fa-user" /> { user.name ?? "No username *!"}  &nbsp;|&nbsp; <i className="fa fa-info" />  UID: {user.uid} &nbsp;|&nbsp; <i class="fas fa-at"></i> email: {user.email} <br/><i className="fa fa-calendar" /> {user.createdAt ?? ""}</p>
                        )
                    }
                    <hr/>
                    <AdminModalUsers/>
   
                  
                  </article>

                  <article id="tabs-3">
                    <img src="assets/ma-logs.png" alt="" />
                    <h4>All announcements</h4>
                    <hr/>
                    {
                        announcements.map(car =>
                            <p><i className="fa fa-user" /> { car.id}  &nbsp;|&nbsp; <i className="fa fa-comments" /> Posted by UID: {car.uid} &nbsp;|&nbsp; <i class="fas fa-at"></i> email: {car.price} <br/><i className="fa fa-calendar" /> 27.07.2020 10:10</p>
                        )
                    }
                    <hr/>
                    <AdminModalAnnouncements/>
       
           
                  </article>
                </section>
              </div>
            </div>
          </div>
        </section>
        
    )
}

export default AdminHome;


