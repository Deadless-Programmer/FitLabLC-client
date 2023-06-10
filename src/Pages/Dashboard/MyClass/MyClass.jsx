import React from 'react';
import useClassCart from '../../../hooks/useClassCart';
import { Link } from 'react-router-dom';

const MyClass = () => {
    const [classCart]=useClassCart();
    console.log(classCart);
    const total = classCart.reduce((sum, item) => item.price + sum, 0);
    return (
        <div>

            <div className="px-8 py-2 bg-gray-900 text-gray-100">
	<div className="flex items-center mx-auto container justify-center md:justify-between py-2">
		<div className='flex justify-between w-[720px]'>
			<p className='text-2xl'>My Total Class : {classCart.length}</p>
			<p className="text-2xl">Total Price : ${total}</p>
            <Link className="text-2xl hover:text-lime-400">Pay</Link>
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
        <th>Delete</th>
        <th>Price</th>
        <th>Pay</th>
      </tr>
    </thead>
    <tbody>
      {classCart.map((data, index)=> <tr key={data._id}>
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
        <td> <button className='btn  hover:bg-red-600 hover:text-white'>Delete</button> </td>
        <td>{data.price}</td>
        <td><button className='btn hover:bg-lime-400'>Pay</button></td>
        
      </tr>)}
      
    
     
    </tbody>
    {/* foot */}
   
    
  </table>
</div>
        </div>
    );
};

export default MyClass;