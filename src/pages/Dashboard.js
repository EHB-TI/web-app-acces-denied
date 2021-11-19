import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "../layout/Dashboard.css";
import { auth, db, logout } from "../firebase/firebase.js";
import Home from '../components/Home';


function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");

    fetchUserName();
  }, [user, loading, history]);

  return (
    <div className="dashboard">
      <div className="dashboard__container">
      <Home></Home>
      </div>
    </div>
  );
}

export default Dashboard;
