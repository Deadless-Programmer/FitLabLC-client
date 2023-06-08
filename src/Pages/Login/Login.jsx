import React, { useState } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

 

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="hero min-h-screen bg-img  ">
    
    <div className="flex flex-col max-w-md p-2 rounded-md sm:p-10 bg-gray-900 bg-opacity-50 my-20 text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm dark:text-gray-400">Sign in to access your account</p>
	</div>
	<form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<label for="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-black" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-black " />
			</div>
      <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-3 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
		</div>
    
	
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-black bg-opacity-20 dark:text-gray-900">Sign in</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
				<Link rel="noopener noreferrer" to="/signup" className="hover:underline dark:text-violet-400">Sign up</Link>.
			</p>

	</form>
</div>

  </div>
  );
};

export default Login;
{/* <button
type="button"
className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
onClick={handleTogglePassword}
>
{showPassword ? (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19.07 4.93A10 10 0 1112 2a10 10 0 017.07 2.93z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 6v2m0 8v2m-6-5.5S7 10 12 10s6-1.5 6-1.5S17 10 12 10s-6 1.5-6 1.5zM12 10a2 2 0 100-4 2 2 0 000 4z"
    />
  </svg>
) : (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13.73 21a9 9 0 01-5.18-2.59M4 10a8.96 8.96 0 0112-8.59M20 12v.01"
    />
  </svg>
)}
</button> */}