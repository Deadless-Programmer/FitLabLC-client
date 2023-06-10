import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageUsers = () => {

    const {data: user=[], refetch}=useQuery(['user'], async()=>{
        const res = await fetch('http://localhost:5000/user')
        return res.json();
    })


    return (
        <div>
            All users : {user.length}
        </div>
    );
};

export default ManageUsers;