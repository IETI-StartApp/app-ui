import React, {useContext, useEffect, useState} from "react"
import {Auth} from "./firebase-config"

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database";


const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const google = new firebase.auth.GoogleAuthProvider();

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

    useEffect(() => {
        return Auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
    }, [])

    const value = {
        currentUser,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut,
        resetPassword,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
