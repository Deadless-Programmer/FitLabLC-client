import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaShoppingCart, FaRegLightbulb,FaLightbulb } from "react-icons/fa";
import useClassCart from '../../../hooks/useClassCart';
import './NavBar.css'

const NavBar = () => {
  const { user,logOut } = useContext(AuthContext);
  const [classCart]=useClassCart();

  // const [visible, setVisible] = useState(true);

  // const toggleVisibility = () => {
  //   setVisible(!visible);
  // };
  const handleLogOut = () => {

    


    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}

const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  useEffect(()=>{
      localStorage.setItem('theme', theme);
      const localTheme = localStorage.getItem('theme');
      document.querySelector('html').setAttribute("data-theme" , localTheme)
  },[theme]);
  const handleDarkMode =(event)=>{
      if(event.target.checked){
          setTheme('dark')
      }
      else{
          setTheme('light')
      }
  };






	const navList = <>
  {/* <li onClick={toggleVisibility}>
   
          {visible ? (
            <li className=''> <FaRegLightbulb></FaRegLightbulb>  </li>
          ) : (
            <li className=''>  <FaLightbulb></FaLightbulb> </li>
          )}
        
  </li> */}
  <div className='lg:flex'>
                                <label className="swap swap-rotate">

                                    <input type="checkbox" onChange={handleDarkMode} />

                                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
            </div>
  
	 <li><ActiveLink to="/">Home</ActiveLink></li>    
      <li><ActiveLink to='/instructors'>Instructors</ActiveLink></li>
      <li><ActiveLink to='/classes'>Classes</ActiveLink></li>
      {/* <li><ActiveLink to='/privetpage'>Privet</ActiveLink></li> */}
      {/* <li><ActiveLink to='/dashboard/myselectedclass'><button className="flex items-center ">
  <FaShoppingCart className='text-lg'></FaShoppingCart>
  <div className="badge badge-secondary">+{classCart?.length || 0}</div>
</button></ActiveLink></li> */}
      {
            user ? <>
               
                <li><ActiveLink to='/dashboard'>Dashboard</ActiveLink></li>
                <li >
            <ActiveLink><button className="uppercase" onClick={handleLogOut}>LogOut</button></ActiveLink>
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
        
            </> : <>
            
            <li><ActiveLink to='/login'>Login</ActiveLink></li>
            </>
        }
        
	</>
 
  

    return (
        <div>
     
           <div className="navbar   bg-gray-900  max-w-screen-xl ">
  <div className="navbar-start lg:ml-16">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 text-xs uppercase shadow bg-base-100 rounded-box w-52">
	  {navList}
      </ul>
    </div>
    
    <Link to="/" className=" font-bold text-2xl text-white ml-3 flex items-center "> <FaRegLightbulb className='text-white text-2xl'></FaRegLightbulb>FitLab<span className='text-red-600 font-extrabold '>LC</span> </Link>
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