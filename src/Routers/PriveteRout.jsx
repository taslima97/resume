import { useContext } from "react";
import { AuthContext } from "../page/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PriveteRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
      return <div>Loading......</div> 
    }
    if (user) {
       return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
    
};

export default PriveteRout;