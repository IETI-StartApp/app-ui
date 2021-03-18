import React, {useContext, useEffect, useState} from "react"
import {Auth} from "./firebase-config"

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database";


export const AuthContext = React.createContext(undefined);

const google = new firebase.auth.GoogleAuthProvider();

export const useAuth = () => useContext(AuthContext);

const createUserWithEmailAndPassword = (email, password) =>
    Auth.createUserWithEmailAndPassword(email, password)

const signInWithEmailAndPassword = (email, password) => {
    return Auth.signInWithEmailAndPassword(email, password)
}

const signOut = () => {
    return Auth.signOut()
}

const resetPassword = (email) => {
    return Auth.sendPasswordResetEmail(email)
}
const signInWithGoogle = () => {
    return Auth.signInWithPopup(google)
}

export const contextValues = {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    resetPassword,
    signInWithGoogle
}

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(undefined)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        return Auth.onAuthStateChanged(user => {
            //send UID to backend
            setCurrentUser(user)
            setLoading(false)
        })
    }, [])

    return (
        <AuthContext.Provider value={{...contextValues, currentUser}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

