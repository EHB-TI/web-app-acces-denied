import React, {useContext, useState, useEffect} from 'react'
import {auth, db} from './firebase'

const AuthContext = React.createContext();

export function useAuth(){
    // return our AuthContext to the ReactContext -> now we can acces our AuthContext trough the ReactContext using useContext
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    // function to create a new user in Firebase
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    //function to push the email and name of the user to Firestore
    function signupData(email, name){
        const date = new Date;
    
        const data = {
            email: email,
            name: name,
            createdAt: date.toString(),            
        };    
        const res = db.collection('users').doc(auth.currentUser.uid,).set(data);
        return res
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    async function loginLog() {  
        try{
            const date = new Date;
            const data = {
            text: "Logged in",
            date: date.toString(),  
            };  
            await db
            .collection("users").doc(auth.currentUser.uid).collection("audit_logs").add(data);   
            return "Success"
          } catch (e){
              console.log(e)
          }    
    }

    function logout() {
    return auth.signOut()
    }

    async function resetPassword(email) {     
    return auth.sendPasswordResetEmail(email)
    }

    async function resetPasswordLog(email) {  
        try{
            const date = new Date;
            const data = {
            text: "Password Recovery asked",
            email: email,    
            date: date.toString(),  
            };  
            await db
            .collection("password_recovery").doc()
            .set(data);          
             
          } catch (e){
              console.log(e)
          }    
    }

    async function updateEmail(email) {
    try{
        var uid =  auth.currentUser.uid;
        const date = new Date;
        const data = {
        text: "Email Updated",
        date: date.toString(),  
        };  
        await db
        .collection("users").doc(uid)
        .collection("audit_logs").doc()
        .set(data);     
        var emailObject  ={
            email: email,
        }
        await db
        .collection("users").doc(uid)
        .set(emailObject , {merge: true});               
      } catch (e){
        console.log(e)
      }    
    return currentUser.updateEmail(email)
    }

    async function updatePassword(password) {
    try{
        var uid =  auth.currentUser.uid
        const date = new Date;
        const data = {
        text: "Password Updated",
        date: date.toString(),  
        };  
        await db
        .collection("users").doc(uid)
        .collection("audit_logs").doc()
        .set(data);          
         
      } catch (e){
          console.log(e)
      }    
    return currentUser.updatePassword(password)
    }

    // in useEffect, only run when we mount our component !
    useEffect(()=>{
        // Whenever the user has been set in Firebase the onAuthStateChanged will catch that change
        const unsubscribe = auth.onAuthStateChanged(user => {
        // SetCurrentUser to user: this can be null or a user
        setCurrentUser(user)
        setLoading(false)
        // unmount our component, when we dont need it anymore, unsubscribe
    })
    return unsubscribe
    },[])
  
    const value = {
        currentUser, 
        login,
        loginLog,
        signup,
        signupData,
        logout,
        resetPassword,
        resetPasswordLog,
        updateEmail,
        updatePassword
    }

    return (
        // AuthContext inside our Provider passing our children
        // # value: will contain all user info
        <AuthContext.Provider value={value}>
            {!loading && children}            
        </AuthContext.Provider>
    )
    
    }
