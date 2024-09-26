import { createContext, useEffect, useState } from "react";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";




 export const AuthContext=createContext()

 const auth = getAuth(app);
const AuthProvider = ({children}) => {
const[user,setUser]=useState(null)
const [loading,setLoading]=useState(true)


useEffect(()=>{
  const unsubsCribe=  onAuthStateChanged(auth,(result=>{

        setUser(result)
        // console.log(user)
        setLoading(false)
    }))

    return()=>{
        return unsubsCribe()
    }

},[])


const loginItem=(email,password)=>{
    setLoading(true)
return signInWithEmailAndPassword(auth,email,password)

}

const createUserWork=(email,password)=>{
    setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)

}
const Logout=()=>{

    return signOut(auth)
}
    const authInfo={
        createUserWork,
        loginItem,
        user,
        loading,
        Logout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;