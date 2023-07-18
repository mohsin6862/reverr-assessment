import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading ,setLoading]=useState(true)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const LogIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
      }

      useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
     
            setLoading(false)
        })
        return ()=>{
            return Unsubscribe();
        }
      },[]);

      const UpdateProfileInfo =(user,name,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoURL
        })
    }

      const LogOut =()=>{
        setLoading(true)
        signOut(auth)
      }


    const UserInfo ={

        user,
        loading,
        createUser,
        LogIn,
        LogOut,
        UpdateProfileInfo,

    }
    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;