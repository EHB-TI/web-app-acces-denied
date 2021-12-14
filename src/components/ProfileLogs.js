import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from "../firebase/firebase.js";
import UserReport from './UserReport.js';


function ProfileLogs() {

    const [logs, setLogs] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [parts, setParts] = useState([]);
    const [incidents, setIncidents] = useState([]);
  
    const fetchLogs = async () => {
    let queryAllLogs = db
            .collection("users").doc(auth.currentUser.uid).collection("audit_logs")     
            
    let logs = [];
           
    await queryAllLogs.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            logs.push(doc.data());
        });
        setLogs(logs);
    })
    }

    const fetchCars = async () => {
        let queryAnnouncements = db
            .collection("announcement").where("uid", "==", auth.currentUser.uid);           
            
    let array = [];
           
    await queryAnnouncements.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            array.push(doc.data());
        });

        setAnnouncements(array);
    })
    }

    const fetchParts = async () => {
        let queryParts = db
            .collection("car_parts").where("uid", "==", auth.currentUser.uid);           
            
    let array = [];
           
    await queryParts.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            array.push(doc.data());
        });

        setParts(array);
    })
    }

    const fetchIncidents = async () => {
        let queryIncidents = db
        .collection("users").doc(auth.currentUser.uid)
        .collection("reported_incidents")
                
        let logs = [];
               
        await queryIncidents.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                logs.push(doc.data());
            });
            setIncidents(logs);
        })
        }

    


    useEffect(()=> {
        fetchLogs();
        fetchCars();
        fetchParts();
        fetchIncidents();
      
    return 
    },[])
        

    return (
        <section className="section" id="our-classes">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                  <h2><em>Profile</em> Security Logs</h2>
                  <img src="assets/images/line-dec.png" alt="" />
                  <p>Please ensure you never show, nor share your credentials.</p>
                  <p>If you suspect that someone has gained illegal access to your account, please change your password or contact us <Link to="/contact-us">here</Link>.</p>
                </div>
              </div>
            </div>
            <div className="row" id="tabs">
              <div className="col-lg-4">
                <ul>
                  <li><a href="#tabs-1">Security logs - Audit logs</a></li>
                  <li><a href="#tabs-2">Posted announcements</a></li>
                  <li><a href="#tabs-3">Posted car parts</a></li>
                  <UserReport/>
                </ul>
              </div>
              <div className="col-lg-8">
                <section className="tabs-content">
                  <article id="tabs-1">
                    <img src="assets/sa-logs.png" alt="" />
                    <h4>Security Logs</h4>
                    <hr/>
                    {
                        logs.map(audit =>
                            <p><i className="fa fa-info"/>  { audit.text}  &nbsp;|&nbsp; <i className="fa fa-calendar" /> { audit.date } </p>
                        )
                    }     
                     <hr/>                  
                    <UserReport/>
                    <hr/>
                    
                  </article>

                  <article id="tabs-2">
                    <h4>Posted Announcements - Logs</h4>
                    <hr/>
                    {
                        announcements.map(logs =>
                            <p><i class="fas fa-info"></i> { logs.model}  { logs.brand} &nbsp;|&nbsp; <i class="fas fa-info"></i> Description:{ logs.text}  &nbsp;|&nbsp;  <i className="fa fa-calendar" /> { logs.date } &nbsp;|&nbsp;  Announcement ID:{ logs.id }  </p>
                        )
                    }
   
                  
                  </article>

                  <article id="tabs-3">
                    <h4>Posted Car Parts - Logs</h4>
                    <hr/>
                    {
                        parts.map(car =>
                            <p># {car.title}  &nbsp;|&nbsp; Price €: {car.price}  &nbsp;|&nbsp;  Description: {car.description}  &nbsp;|&nbsp; <i className="fa fa-calendar" /> {car.date}</p>
                        )
                    }
                      <hr/>
                    <h4>Reported Incidents - Logs</h4>
                    <hr/>
                    {
                        incidents.map(incident =>
                            <p><i class="fas fa-info"></i> Type of Report: { incident.type}  &nbsp;|&nbsp; <i className="fa fa-user" /> Concerning: { incident.concerning}  &nbsp;|&nbsp; <i class="fas fa-info"></i> Description:{ incident.text}  &nbsp;|&nbsp;  <i className="fa fa-calendar" /> { incident.date } &nbsp;|&nbsp;</p>
                        )
                    }
           
                  </article>
                </section>
              </div>
            </div>
          </div>
        </section>
        
    )
}

export default ProfileLogs;


