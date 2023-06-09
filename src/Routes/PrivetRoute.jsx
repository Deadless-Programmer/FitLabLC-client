import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Pages/Spinner/Spinner';

const PrivetRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location = useLocation();
    if(loading){
      return  <Spinner></Spinner>
    //   return  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivetRoute;