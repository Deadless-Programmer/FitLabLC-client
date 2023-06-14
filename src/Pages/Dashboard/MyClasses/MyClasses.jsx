import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
// import useClassCart from '../../../hooks/useClassCart';

const MyClasses = () => {
  const {user, loading}= useContext(AuthContext);

  const [myAddedClass, setMyAddedClass]=useState()

  useEffect(()=>{
    fetch(`https://fit-lab-learning-camp-server.vercel.app/signgleClassByEmail?email=${user?.email}`)
    .then(res=> res.json())
    .then(data=>setMyAddedClass(data))
  },[])

    // const [classCart, refetch]=useClassCart();
    console.log(myAddedClass);
    // const total = myAddedClass.reduce((sum, item) => item.price + sum, 0);
    return (
        <div>

        <div className="px-8 py-2 bg-gray-900 text-gray-100">
<div className="flex items-center mx-auto container justify-center md:justify-between py-2">
    <div className='  w-[720px]'>
        <p className='text-2xl text-center'>My All Classes Status </p>
       
       
    </div>
    
</div>
</div>

<div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead>
  <tr className='uppercase'>
    <th>
      {/* <label>
        <input type="checkbox" className="checkbox" />
      </label> */}
      S. No.
    </th>
    <th>Class Name</th>
    <th>Instructor</th>
    <th>Available Seats</th>
    <th>Price</th>
    <th>Status</th>
    <th>Total Enrolled</th>
    <th>Feedback</th>
    <th>Update</th>
  </tr>
</thead>
<tbody>
  {myAddedClass?.map((data, index)=> <tr key={data._id}>
    <th>
    {index+1}
    </th>
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={data.image} />
          </div>
        </div>
        <div>
          <div className="font-bold">{data.name}</div>
          
        </div>
      </div>
    </td>
    <td>
      {data.instructor}
     
    </td>
    <td> {data.availableSeats} </td>
    <td>${data.price}</td>
    <td className="px-2 py-4 text-sm text-gray-500 whitespace-nowrap">{data?.status || 'pending'}</td>
      <td>50</td>
    <td className="px-2 py-4 text-sm text-gray-500 whitespace-nowrap">{data?.feedback || ''}</td>
    <td ><button className=" btn-sm bg-red-600 rounded hover:bg-lime-500 text-white" >UPDATE</button></td>
   
  </tr>)}
 

 
</tbody>
{/* foot */}


</table>
</div>
    </div>
    );
};

export default MyClasses;