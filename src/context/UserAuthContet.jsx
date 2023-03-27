import { createContext, useContext, useEffect, useState } from "react";
import { auth } from './../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState('') //to check wich user is active
    const [timeActive, setTimeActive] = useState(false); //time after sending confirmation email
    //Signup using emailId and password
    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email, password)
    }

    //to send the verification email to user when he enter his signUp
    const emailVerification = ()=>{
        return sendEmailVerification(auth.currentUser)
    }

    //LogIn using emailId and password
    const logIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Logout the user
    const logOut = ()=>{
        return signOut(auth)
    }

    //to signin with google
    const googleSignin = ()=>{
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth,googleAuthProvider)
    }

    //to notify that a particular user is logged in
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            //when auth change, set user to current user
            setUser(currentUser)
        })
        //we do this becuase when a component is unmounted we don't want this
        //So to clean up we use this method
        return ()=>{
            unsubscribe()
        }
    })
  return (
    <UserAuthContext.Provider value={{user, signUp, logIn, emailVerification, logOut, timeActive, setTimeActive, googleSignin}}>{children}</UserAuthContext.Provider>
  );
};

//custome useContext hook
export const useUserAuthContext = ()=>{
    return useContext(UserAuthContext) 
}
