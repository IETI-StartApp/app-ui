import React, {useContext, useEffect, useState} from "react"
import {Auth} from "./firebase-config"

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database";


export const AuthContext = React.createContext(undefined);

const google = new firebase.auth.GoogleAuthProvider();

export const useAuth = () => useContext(AuthContext);

export const createUserWithEmailAndPassword = (email, password) =>
    Auth.createUserWithEmailAndPassword(email, password)

export const signInWithEmailAndPassword = (email, password) => {
    return Auth.signInWithEmailAndPassword(email, password)
}

export const signOut = () => {
    return Auth.signOut()
}

export const resetPassword = (email) => {
    return Auth.sendPasswordResetEmail(email)
}
export const signInWithGoogle = () => {
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
            //TODO send UID to backend
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

