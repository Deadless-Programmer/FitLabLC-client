import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useClassCart = email=>{

        const {user, loading}= useContext(AuthContext);
        // const token = localStorage.getItem('access-token');
        const [axiosSecure] = useAxiosSecure();
        const { refetch, data: classCart = [] } = useQuery({
            queryKey: ['classCart', user?.email],
            enabled: !loading,
            queryFn: async () => {
            const res = await axiosSecure(`classCart?email=${user?.email}`)
            return res.data;
        },
          })
          return [classCart, refetch]
}

export default useClassCart;