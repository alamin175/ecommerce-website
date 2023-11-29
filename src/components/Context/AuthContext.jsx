import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase';
import { useLocation } from 'react-router-dom';

const auth = getAuth(app)
export const UserContext = createContext() 
const AuthContext = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser)
                setLoading(false) 
                return () => {
                unSubscribe;
            };
        })
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;