
// import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
// import setTitleName from "../hoooks/hooks";
const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const toysHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const instructor = form.instructor.value;
    const instructorEmail = form.instructorEmail.value;
    const availableSeats = form.availableSeats.value;
    const price = form.price.value;
  
    // const userEmail = user?.email;
    console.log(
        name,
        image,
        instructor,
        instructorEmail,
        availableSeats,
        price
    
    );
    const addClasses = {
        name,
        image,
        instructor,
        instructorEmail,
        availableSeats,
        price
    };
    console.log(addClasses);

    fetch("https://fit-lab-learning-camp-server.vercel.app/class", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addClasses),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            // position: 'top-end',
            icon: "success",
            title: "Your class has been saved",
            showConfirmButton: "Cool",
            timer: 1500,
          });
        }
      });
  };

//   setTitleName("Add a toy")
  return (
    <div>
      <form onSubmit={toysHandler} className=" h-auto  bg-gray-900 mb-5  p-4 ">
        <div className="flex justify-center mt-5  ">
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Class name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="input input-bordered w-72"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Class Image URL</span>
              </label>
              <input
                type="text"
                required
                name="image"
                placeholder="Image URL"
                className="input input-bordered w-72"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Instructor Name</span>
              </label>
              <input
              defaultValue={user?.displayName}
                type="text"
                required
                name="instructor"
                placeholder="instructor name"
                className="input input-bordered w-72"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Instructor Email</span>
              </label>
              <input
                defaultValue={user?.email}
                type="text"
                required
                name="instructorEmail"
                placeholder="Instructor-Email"
                className="input input-bordered w-72"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Available Seats</span>
              </label>
              <input
                type="text"
                required
                name="availableSeats"
                placeholder="Available-seats"
                className="input input-bordered w-72"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <input
                type="text"
                required
                name="price"
                placeholder="$ Price"
                className="input input-bordered w-72"
              />
            </div>
          </div>
        </div>
      
        <div className="flex justify-center ">
          <div className="form-control mt-6 w-[600px]  rounded   ">
            <button className="btn bg-red-600 border-0 text-white hover:bg-lime-600  ">
              Add Class
            </button>
          </div>
        </div>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AddAClass;
