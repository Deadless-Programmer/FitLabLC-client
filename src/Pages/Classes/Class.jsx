import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useClassCart from '../../hooks/useClassCart';
import AOS from "aos";
import "aos/dist/aos.css";
import useInstructor from './../../hooks/useInstructor';
import useAdmin from './../../hooks/useAdmin';
const Class = ({data}) => {
  console.log(data)
    
    const {image, name, instructor, availableSeats, price, selectButton, _id} = data;
    const isAvailable = availableSeats > 0;
    // const isAdmin = useAdmin();
    const {user}=useContext(AuthContext);
    const navigate =useNavigate();
    const location = useLocation();
    const [,refetch]=useClassCart();
    // const isInstructor = useInstructor()
  const handleAddToClassCart = data=>{
          console.log(data)
          
          if(user && user.email){
            const classCartItem = { classId:_id, image, name, instructor, availableSeats, price, email:user.email}
            fetch('https://fit-lab-learning-camp-server.vercel.app/classCart',{
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(classCartItem)
            })
            .then(res=> res.json())
            .then(data=>{
              if(data.insertedId){
                refetch();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Class added successfully on the cart',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
          }

          else{
            Swal.fire({
              title: 'Please login first to get access class',
              
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Login Now!'
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/login', {state:{from:location}} )
              }
            })
          }
  }

  const cardStyle = {
    backgroundColor: isAvailable ? 'white' : 'red',
  };

  useEffect(() => {
    AOS.init();
  }, []);
    return (
        <div>
           <div data-aos="zoom-in" style={cardStyle} className=" content-center rounded-md shadow-md bg-gray-100 text-black">
	<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
        <p className="dark:text-gray-100"> Instructor : {instructor}</p>
			<h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
			<div className='flex justify-between'>
            <p className="dark:text-gray-100">Available seats : {availableSeats} </p>
            <p className="dark:text-gray-100">price : ${price} </p>
            </div>
		</div>
		{/* <button disabled={!isAvailable || isAdmin} onClick={() => handleSelect(data)}>
        {isAdmin ? 'Logged in as Admin' : 'Select'}
      </button> */}
        <button onClick={()=>handleAddToClassCart(data)}  disabled={!isAvailable } className="btn bg-red-600 text-lg border-0 text-white hover:bg-lime-700 capitalize">Select Class</button>
	</div>
</div> 
        </div>
    );
};

export default Class;