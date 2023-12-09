

import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProviders"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {users,loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <div className="w-full flex justify-center items-center h-[80vh]">
            <span className="loading loading-bars loading-lg "></span>
            </div>
    }
    if(users){
        return children;
    }
  return <Navigate state={location.pathname} to={'/login'}></Navigate>
}

export default PrivateRoutes