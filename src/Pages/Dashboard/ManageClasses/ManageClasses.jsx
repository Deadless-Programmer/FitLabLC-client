import React from "react";
// import useClassCart from '../../../hooks/useClassCart';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  // const [classCart, refetch]=useClassCart();
  const [axiosSecure] = useAxiosSecure();
  const { data: manage = [], refetch } = useQuery(["manage"], async () => {
    const res = await axiosSecure("/manage");
    return res.data;
  });

  
  console.log(manage);
  const handleApproved =(data)=>{
    // /classCart/approved/:id
      console.log(data._id)
      fetch(`https://fit-lab-learning-camp-server.vercel.app/classCart/approved/${data._id}`, {
        method:'PATCH'
      }).then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
            refetch();
            Swal.fire(
                'Good job!',
                'Class Approved Successfully !',
                'success'
            )
        }

    })
  }
  const handleDenied =(data)=>{
    // /classCart/approved/:id
      console.log(data._id)
      fetch(`https://fit-lab-learning-camp-server.vercel.app/classCart/denied/${data._id}`, {
        method:'PATCH'
      }).then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
            refetch();
            Swal.fire(
                'Good job!',
                'Class Denied Successfully !',
                'success'
            )
        }

    })
  }
 
  return (
    <div>
      <div className="px-8 py-2 bg-gray-900 text-gray-100">
        <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
          <div className="  w-[720px]">
            <p className="text-2xl text-center">Manage Classes Status </p>
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
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Total Enrolled</th>
              
              <th>Approve</th>
              <th>Deny</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {manage?.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
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
                <td>{data.instructor}</td>
                <td> {data.instructorEmail
} </td>

                <td>{data.availableSeats}</td>
                <td>${data.price}</td>
                {/* <td className="flex flex-col gap-2">
                  <button className="">Pending</button>
                  <button className="">Approved</button>
                  <button className="">Denied</button>
                </td> */}
                <td className="px-2 py-4 text-sm text-gray-500 whitespace-nowrap">{data?.status || 'pending'}</td>
                <td>{data.availableSeats}</td>
               <td>
               {
                                                                data.status === "approved" || data.status === "denied" ? <button
                                                                    className="btn btn-xs bg-green-400 text-gray-700"
                                                                    disabled
                                                                >
                                                                    Approve
                                                                </button> : <button
                                                                    className="btn btn-xs bg-green-400  text-gray-700 "
                                                                    onClick={() => handleApproved(data)}
                                                                >
                                                                    Approve
                                                                </button>
                                                            }
               </td>
                <td className="">
                {
                                                                data.status === "denied" || data.status === "approved" ? <button
                                                                    className="btn btn-xs bg-green-400 text-gray-700"
                                                                    disabled
                                                                >
                                                                    Deney
                                                                </button> : <button
                                                                    className="btn btn-xs bg-green-400  text-gray-700 "
                                                                    onClick={() => handleDenied(data)}
                                                                >
                                                                    Deney
                                                                </button>
                                                            }
                </td>
                <td className="">
                {data?.status !== 'denied' || <Link to={`/dashboard/manageclasseses/feedback/${data._id}`} >
                                                           <button
                                                           className="btn btn-xs bg-green-400  text-gray-700 ">Feedback</button>
                                                           </Link>}
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
