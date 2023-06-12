import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserShield, FaUserCog} from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const ManageUsers = () => {
    const [axiosSecure]=useAxiosSecure();
  const { data: user = [], refetch } = useQuery(["user"], async () => {
    const res = await axiosSecure("/user");
    return res.data;
  });

// console.log(user)
//   const handleMakeAdminRole =(user)=>{
//     console.log(user)
//     fetch(`http://localhost:5000/user/admin/${user._id}`,{
//         method:'PATCH'
//     }).then(res=> res.json())
//     .then(data=>{
//         if(data.modifiedCount){
//             refetch();
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: `${user.name} is an admin now!`,
//                 showConfirmButton: false,
//                 timer: 1500
//               })
//         }
//     })
//   }
const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleMakeAdminRole = data =>{
    setIsButtonDisabled(true);
    console.log(data)
    console.log(data._id)
    fetch(`http://localhost:5000/user/admin/${data._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(item => {
        console.log(item)
        if(item.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${data.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}
  const handleMakeisInstructor = data =>{
    setIsButtonDisabled(true);
    console.log(data)
    console.log(data._id)
    fetch(`http://localhost:5000/user/isInstructor/${data._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(item => {
        console.log(item)
        if(item.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${data.name} is an isInstructor Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}

  return (
    <div>
      <div>
        <div className="px-8 py-2 bg-gray-900 text-gray-100">
          <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
            <div className="flex justify-between w-[720px]">
              <p className="text-2xl">Total User : {user.length}</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="uppercase">
                <th>
                  {/* <label>
<input type="checkbox" className="checkbox" />
</label> */}
                  S. No.
                </th>
                <th>User Name</th>
                <th>user Email</th>
                <th>Make Instructor</th>
                <th>Make Admin</th>
              </tr>
            </thead>
            <tbody>
              {user.map((data, index) => (
                <tr key={data._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{data.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{data.email}</td>
                  {/* <td>
                  
                    <button className="btn  hover:bg-red-600  text-red-600 uppercase hover:text-white">
                   
                    <FaUserCog className="text-lg"></FaUserCog>  Instructor
                    </button>
                  </td> */}

                  <td>
                  
                   {
                    data.role ==='isInstructor'? <button disabled={isButtonDisabled}  className="btn bg-lime-500    text-white"> isInstructor </button>: 
                    <button onClick={()=>handleMakeisInstructor(data)}  className="btn hover:bg-lime-500 text-base hover:text-white">  <FaUserCog className="text-lg"></FaUserCog>  Instructor </button>
                   }

                   
                   
                  </td>
                  <td>
                  
                   {
                    data.role ==='admin'? <button disabled={isButtonDisabled}  className="btn bg-lime-500    text-white"> admin </button>: 
                    <button onClick={()=>handleMakeAdminRole(data)}  className="btn hover:bg-lime-500 text-lg hover:text-white"> <FaUserShield></FaUserShield> </button>
                   }

                   
                   
                  </td>
                    
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
