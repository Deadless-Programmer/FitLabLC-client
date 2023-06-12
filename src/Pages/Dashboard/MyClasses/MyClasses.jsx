import React from 'react';
import useClassCart from '../../../hooks/useClassCart';
import { Link } from 'react-router-dom';

const MyClasses = () => {

    const [classCart, refetch]=useClassCart();
    console.log(classCart);
    const total = classCart.reduce((sum, item) => item.price + sum, 0);
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
    <td> <button onClick={()=>handleDelete(data)} className='btn  hover:bg-red-600 text-xl text-red-600 hover:text-white'> <FaTrash></FaTrash> </button> </td>
    <td>${data.price}</td>
    <td><button className='btn hover:bg-lime-400 text-lime-600 hover:text-white  text-2xl'><FaAmazonPay></FaAmazonPay></button></td>
    
  </tr>)}
  

 
</tbody>
{/* foot */}


</table>
</div>
    </div>
    );
};

export default MyClasses;