import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart, FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import useClassCart from "../../../hooks/useClassCart";
import "./NavBar.css";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [classCart] = useClassCart();

  // const [visible, setVisible] = useState(true);

  // const toggleVisibility = () => {
  //   setVisible(!visible);
  // };
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleDarkMode = (event) => {
    if (event.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const navList = (
    <>
      {/* <li onClick={toggleVisibility}>
   
          {visible ? (
            <li className=''> <FaRegLightbulb></FaRegLightbulb>  </li>
          ) : (
            <li className=''>  <FaLightbulb></FaLightbulb> </li>
          )}
        
  </li> */}

      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/instructors">Instructors</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/classes">Classes</ActiveLink>
      </li>
      {/* <li><ActiveLink to='/privetpage'>Privet</ActiveLink></li> */}
      {/* <li><ActiveLink to='/dashboard/myselectedclass'><button className="flex items-center ">
  <FaShoppingCart className='text-lg'></FaShoppingCart>
  <div className="badge badge-secondary">+{classCart?.length || 0}</div>
</button></ActiveLink></li> */}
      {user ? (
        <>
          <li>
            <ActiveLink to="/dashboard">Dashboard</ActiveLink>
          </li>
          <li>
            <ActiveLink>
              <button className="uppercase" onClick={handleLogOut}>
                LogOut
              </button>
            </ActiveLink>
          </li>
          <li>
            <label
              className=" avatar tooltip tooltip-bottom tooltip-success"
              data-tip={user?.displayName}
            >
              <div className="w-10 rounded-full ">
                <img src={user?.photoURL} />
              </div>
            </label>
          </li>
        </>
      ) : (
        <>
          <li>
            <ActiveLink to="/login">Login</ActiveLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar   bg-gray-900   max-w-screen-xl ">
        <div className="navbar-start lg:ml-16">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-40 mt-3 p-2 text-xs uppercase shadow bg-base-100 rounded-box w-52"
            >
              {navList}
            </ul>
          </div>
          <div className="lg:flex">
            <label className="swap swap-rotate">
              <input type="checkbox" onChange={handleDarkMode} />
              {/* className="swap-on fill-current w-10 h-10" */}
              {/* className="swap-off fill-current w-10 h-10" */}
              <img
                className="swap-on fill-current w-10 h-10"
                src="https://i.postimg.cc/fTZLsSMN/weather.png"
                alt=""
              />
              <img
                className="swap-off fill-current w-10 h-10"
                src="https://i.postimg.cc/nL6mGVBh/moon.png"
                alt=""
              />
            </label>
          </div>
          <Link
            to="/"
            className=" font-bold text-2xl text-white ml-3 flex items-center "
          >
            {" "}
            FitLab<span className="text-red-600 font-extrabold ">LC</span>{" "}
          </Link>
        </div>
        <div className="navbar-end mr-16 hidden lg:flex">
          <ul className=" flex items-center gap-4 px-1 text-xs text-white font-semibold uppercase">
            {navList}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
