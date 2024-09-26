import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({children}) => {
    const{user}=useContext(AuthContext)
    const location=useLocation()
    console.log(location.pathname)
    if(user){
        return children
    }
    return <Navigate state={location.pathname}  to={"/login"}>Login</Navigate>
};

export default Private;