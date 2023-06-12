
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Pages/Spinner/Spinner';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading}=useAuth();
    const [isAdmin, isAdminLoading]=useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
      return  <Spinner></Spinner>
    //   return  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default AdminRoute;