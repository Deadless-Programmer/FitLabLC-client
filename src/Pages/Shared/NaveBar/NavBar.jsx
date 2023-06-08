import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
  const { user,logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}
	const navList = <>
	 <li><ActiveLink to="/">Home</ActiveLink></li>    
      <li><ActiveLink to='/instructors'>Instructors</ActiveLink></li>
      <li><ActiveLink to='/classes'>Classes</ActiveLink></li>
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
           <div className="navbar fixed z-10 bg-opacity-0 max-w-screen-xl bg-red-600">
  <div className="navbar-start lg:ml-16">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 text-xs uppercase shadow bg-base-100 rounded-box w-52">
	  {navList}
      </ul>
    </div>
    <Link to="/" className=" font-bold text-2xl text-white">FitLab<span className='text-red-600 font-extrabold '>LC</span> </Link>
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