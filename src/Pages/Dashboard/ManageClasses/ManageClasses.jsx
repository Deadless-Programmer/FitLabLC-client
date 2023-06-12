import React from 'react';
import useClassCart from '../../../hooks/useClassCart';

const ManageClasses = () => {
    const [classCart, refetch]=useClassCart();
    console.log(classCart);
    const total = classCart.reduce((sum, item) => item.price + sum, 0);
    return (
        <div>

        <div className="px-8 py-2 bg-gray-900 text-gray-100">
<div className="flex items-center mx-auto container justify-center md:justify-between py-2">
    <div className='  w-[720px]'>
        <p className='text-2xl text-center'>Manage Classes Status </p>
       
       
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
    <th>Email</th>
    <th>Available Seats</th>
    <th>Price</th>
    <th>Status</th>
    <th>Total Enrolled</th>
    <th>Feedback</th>
    <th>Approve</th>
    <th>Deny</th>
    
  </tr>
</thead>
<tbody>
  {classCart?.map((data, index)=> <tr key={data._id}>
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
    <td> {data.email} </td>
    
    <td>{data.availableSeats}</td>
    <td>${data.price}</td>
    <td className='flex flex-col gap-2'>
        <button className='btn btn-sm'>Pending</button>
        <button className='btn btn-sm'>Approved</button>
        <button className='btn btn-sm'>Denied</button>
        
    </td>
    <td>
    {data.availableSeats}
        
    </td>
    <td className=''>
        <button className='btn btn-sm'>Approve</button>
  
    </td>
    <td className=''>
        <button className='btn btn-sm'>Deny</button>
  
    </td>
    <td className=''>
        <button className='btn btn-sm'>Feedback</button>
  
    </td>
    
  </tr>)}
  

 
</tbody>
{/* foot */}


</table>
</div>
    </div>
    );
};

export default ManageClasses;