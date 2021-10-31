import initializeAuthenthication from "../../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthenthication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)
       return signInWithPopup(auth, googleProvider)
           
    }

    const handleUserRegister = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
        
}
    const handleUserSignIn = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
        
}
    
    useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
        }
        setIsLoading(false)
    })
        return () => unsubscribe;
    },[])

    const logOut = () => {
        setIsLoading(true)
        return signOut(auth)   
    }
    return {
        user,
        signInUsingGoogle,
        logOut,
        handleUserRegister,
        handleUserSignIn,
        isLoading,

    }
}

export default useFirebase;