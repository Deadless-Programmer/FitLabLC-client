import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaCogs,
  FaClone,
  FaUsersCog,
  FaBoxes,
  FaFileImport,
  FaFileExport,
  FaOpencart,
  FaWallet,
  FaHome,
  FaHistory,
  FaUserCircle,
} from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import useClassCart from "../../hooks/useClassCart";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
const Dashboard = () => {
  // const isAdmin = true;

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
// console.log(isInstructor)
  const [classCart] = useClassCart();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="drawer lg:drawer-open bg ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-slate-900">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-900 text-white text-base font-semibold">
            {/* Sidebar content here */}

            {isAdmin ? (
              <>

                  {user ? (
                  <>
                    <li>
                      <label className=" avatar tooltip tooltip-bottom tooltip-success">
                        <div className="w-10 rounded-full ">
                          <img src={user?.photoURL} />
                        </div>
                      </label>

                      <li>
                        <NavLink>
                          <FaUserCircle className="text-2xl -ml-5"></FaUserCircle>
                          {user?.displayName}
                        </NavLink>
                      </li>
                    </li>
                    <li></li>
                  </>
                ) : (
                  <></>
                )}
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageclasseses">
                    <FaBoxes></FaBoxes> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageusers">
                    <FaUsersCog></FaUsersCog> Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/notification">
                    <FaClone></FaClone> Notification
                  </NavLink>
                </li>

                <hr className="py-2 mt-5" />
                {/* <li><NavLink to="/dashboard/payment"> <FaWallet></FaWallet> Payment</NavLink></li> */}

                <li>
                  <NavLink to="/dashboard/settings">
                    <FaCogs></FaCogs> Settings
                  </NavLink>
                </li>
                {user ? (
                  <>
                    <li>
                      <Link>
                        
                        <button className="" onClick={handleLogOut}>
                          Log Out
                        </button>
                      </Link>
                    </li>
                  </>
                ) : (
                  <> </>
                )}
              </>
            ) : isInstructor ? (
              <>
               {user ? (
                  <>
                    <li>
                      <label className=" avatar tooltip tooltip-bottom tooltip-success">
                        <div className="w-10 rounded-full ">
                          <img src={user?.photoURL} />
                        </div>
                      </label>

                      <li>
                        <NavLink>
                          <FaUserCircle className="text-2xl -ml-5"></FaUserCircle>
                          {user?.displayName}
                        </NavLink>
                      </li>
                    </li>
                    <li></li>
                  </>
                ) : (
                  <></>
                )}
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addaclass">
                    <FaFileExport></FaFileExport> Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myclasses">
                    <FaFileImport></FaFileImport> My Classes
                  </NavLink>
                </li>
                <hr className="py-2 mt-5" />
                {/* <li><NavLink to="/dashboard/payment"> <FaWallet></FaWallet> Payment</NavLink></li> */}

                <li>
                  <NavLink to="/dashboard/settings">
                    <FaCogs></FaCogs> Settings
                  </NavLink>
                </li>
                {user ? (
                  <>
                    <li>
                      <Link>
                        
                        <button className="" onClick={handleLogOut}>
                          Log Out
                        </button>
                      </Link>
                    </li>
                  </>
                ) : (
                  <> </>
                )}
              </>
            ) : (
              <>
               {user ? (
                  <>
                    <li>
                      <label className=" avatar tooltip tooltip-bottom tooltip-success">
                        <div className="w-10 rounded-full ">
                          <img src={user?.photoURL} />
                        </div>
                      </label>

                      <li>
                        <NavLink>
                          <FaUserCircle className="text-2xl -ml-5"></FaUserCircle>
                          {user?.displayName}
                        </NavLink>
                      </li>
                    </li>
                    <li></li>
                  </>
                ) : (
                  <></>
                )}
                <li>
                  <NavLink to="/">
                    <FaHome></FaHome> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myselectedclass">
                    <FaShoppingCart></FaShoppingCart> My Selected Classes
                    <div className="badge badge-secondary">
                      +{classCart?.length || 0}
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolled">
                    <FaOpencart></FaOpencart> My Enrolled Classes
                  </NavLink>
                </li>
               
               
               
                
                <li>
                  <NavLink to="/dashboard/notification">
                    <FaClone></FaClone> Notification
                  </NavLink>
                </li>

                <hr className="py-2 mt-5" />
                <li>
                  <NavLink to="/dashboard/payment">
                    <FaWallet></FaWallet> Payment
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymenthistory">
                    <FaHistory></FaHistory> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/settings">
                    <FaCogs></FaCogs> Settings
                  </NavLink>
                </li>
               
                {user ? (
                  <>
                    <li>
                      <Link>
                        
                        <button className="" onClick={handleLogOut}>
                          Log Out
                        </button>
                      </Link>
                    </li>
                  </>
                ) : (
                  <> </>
                )}
              </>
            )}

           

            {/* {
            user ? <>  
          <li>
            <label
              className=" avatar tooltip tooltip-bottom tooltip-success">
              <div className="w-10 rounded-full ">
                <img src={user?.photoURL} />
              </div>
            </label>
           
            <li><NavLink><FaUserCircle className='text-2xl -ml-5'></FaUserCircle> {user?.displayName}</NavLink>  </li>
          </li>
          <li>
          
          </li>
        
            </> : <>
           
            </>
        }
      <li><NavLink to='/'> <FaHome></FaHome> Home </NavLink></li>
      <li><NavLink to="/dashboard/myselectedclass"> <FaShoppingCart></FaShoppingCart> My Selected Classes
      <div className="badge badge-secondary">+{classCart?.length || 0}</div>
       </NavLink></li>
      <li><NavLink to="/dashboard/enrolled"> <FaOpencart></FaOpencart> My Enrolled Classes </NavLink></li>
      <li><NavLink to="/dashboard/addaclass"> <FaFileExport></FaFileExport> Add a Class </NavLink></li>
      <li><NavLink to="/dashboard/myclasses"> <FaFileImport></FaFileImport> My Classes </NavLink></li>
      <li><NavLink to="/dashboard/manageclasseses"> <FaBoxes></FaBoxes> Manage Classes </NavLink></li>
      <li><NavLink to="/dashboard/manageusers"> <FaUsersCog></FaUsersCog> Manage Users </NavLink></li>
      <li><NavLink to="/dashboard/notification">  <FaClone></FaClone> Notification </NavLink></li>


     <hr className='py-2 mt-5' />
      <li><NavLink to="/dashboard/payment"> <FaWallet></FaWallet> Payment</NavLink></li>
      <li><NavLink to="/dashboard/paymenthistory"> <FaHistory></FaHistory> Payment History</NavLink></li>
      <li><NavLink to="/dashboard/settings"> <FaCogs></FaCogs> Settings</NavLink></li>
      {
            user ? <>
                <li >
            <Link >  <button className="" onClick={handleLogOut}>Log Out</button></Link>
          </li>
            </> : <> </>
        } */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
