
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Pages/Spinner/Spinner';
import useAuth from '../hooks/useAuth';

import useInstructor from '../hooks/useInstructor';

const InstructorRoute = ({children}) => {
    const {user, loading}=useAuth();
    const [isInstructor, isInstructorLoading]=useInstructor();
    const location = useLocation();
    if(loading || isInstructorLoading){
      return  <Spinner></Spinner>
    //   return  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    if(user && isInstructor){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default InstructorRoute;