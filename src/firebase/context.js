import React, {useContext, useState, useEffect} from 'react'
import {auth} from './firebase'

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

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
    return auth.signOut()
    }

    function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
    return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
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
        signup,
        logout,
        resetPassword,
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

