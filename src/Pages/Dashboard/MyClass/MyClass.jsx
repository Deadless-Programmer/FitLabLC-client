import React from "react";
import useClassCart from "../../../hooks/useClassCart";
import { Link } from "react-router-dom";
import { FaTrash, FaAmazonPay } from "react-icons/fa";
import Swal from "sweetalert2";
const MyClass = () => {
  const [classCart, refetch] = useClassCart();
  console.log(classCart);
  const total = classCart?.reduce((sum, item) => parseFloat(item?.price) + sum, 0);
//  const sumToatal = parseFloat(total).toFixed(2)
//  console.log(sumToatal)
  const handleDelete = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://fit-lab-learning-camp-server.vercel.app/classCart/${data._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="px-8 py-2 bg-gray-900 text-gray-100">
        <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
          <div className="flex justify-between w-[720px]">
            <p className="text-2xl">My Total Class : {classCart.length}</p>
            <p className="text-2xl">Total Price : ${total}</p>
            <Link className="text-2xl hover:text-lime-400">Pay</Link>
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
              <th>Delete</th>
              <th>Price</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {classCart.map((data, index) => (
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
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(data)}
                    className="btn  hover:bg-red-600 text-xl text-red-600 hover:text-white"
                  >
                    {" "}
                    <FaTrash></FaTrash>{" "}
                  </button>{" "}
                </td>
                <td>${data.price}</td>
                <td>
                  <button className="btn hover:bg-lime-400 text-lime-600 hover:text-white  text-2xl">
                    <FaAmazonPay></FaAmazonPay>
                  </button>
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

export default MyClass;
