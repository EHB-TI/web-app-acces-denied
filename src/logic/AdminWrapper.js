import React, {useEffect, useState} from 'react'
import AdminHome from '../components/AdminHome';
import PageNotFound from '../components/PageNotFound'
import {  auth, db } from "../firebase/firebase.js";
function AdminWrapper() {
    const [admin, setAdmin] = useState(false);
    
    async function isAdmin(uid) {
        try{
            var res = await db
            .collection("admins")
            .doc(uid)
            .get();

  
            console.log(res.data())
           setAdmin(res.data().admin)

           
        } catch (e){
            console.log(e);
        }        
    }
   


    useEffect(() => {
        isAdmin(auth.currentUser.uid);
      }, );


    return admin ? <AdminHome/> : <PageNotFound/>
}

export default AdminWrapper
