import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext(app)
const auth = getAuth()
const googleLogin = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, stetUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const emailSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleLogin)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateProfileuser = (name) => {
      setLoading(true)
      return updateProfile(auth.currentUser, {
        displayName : name
      })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('from auth', currentUser)
            stetUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        loading,
        emailSignUp,
        emailLogin,
        googleSignIn,
        logout,
        updateProfileuser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;