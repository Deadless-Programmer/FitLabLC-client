import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../providers/AuthProvider';

const SignUp = () => {
	const { createUser } = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

	const password = React.useRef({});
  password.current = watch('password', 'confirm');

    const onSubmit = data => {
		console.log(data);
		createUser(data.email, data.password)
		.then(result=>{
			const loggedUser = result.user;
			console.log(loggedUser)
		})
		.catch(error => console.log(error))

	};
    return (
        <div>
           <div className="hero min-h-screen bg-img  ">
    
    <div className="flex flex-col max-w-md p-2 rounded-md sm:p-10 bg-gray-900 bg-opacity-50 my-20 text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign up</h1>
		<p className="text-sm dark:text-gray-400">Sign up to create new account</p>
	</div>
	<form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<label htmlFor="name" className="block mb-2 text-sm">User Name</label>
				<input type="name" {...register("name", { required: true })}  name="name" id="" placeholder="Your User Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-black" />
                {errors.name && <span className='text-lime-400'>Name is required</span>}
			</div>
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" {...register("email", { required: true })} name="email" id="email" placeholder="FitLabLC@gmail.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-black" />
                {/* {errors.email && <span className='text-lime-400'>Email is required</span>} */}
                {errors.email?.type === 'required' && <p className="text-lime-400">Email is required</p>}
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					
				</div>
				<input type="password" {...register("password", { required: true, minLength:6, 
				pattern:  /^(?=.*[A-Z])(?=.*[!@#$&*]).*$/
				
				})} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-black " />
                {/* {errors.password && <span className='text-lime-400'>Password is required</span>} */}
                {errors.password?.type === 'required' && <p className="text-lime-400">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-lime-400">Password must be 6 characters</p>}
				{errors.password?.type === 'pattern' && <p className="text-lime-600">Password must contain at least one capital letter and one special character.</p>}
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Confirm Password</label>
					{/* {...register("confirm", { required: true}, )} */}
				</div>
				<input type="password" 
				 {...register('confirm', { required: true}, {
					validate: (value) =>
					  value === password.current || 'The passwords do not match',
				  })}
				
				name="confirm" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-black " />
                {errors.confirm && <span className='text-lime-400'>This field is required</span>}
				{errors.confirm && (
          <span style={{ color: 'red' }}>{errors.confirm.message}</span>
        )}
			</div>

			
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Photo URL</label>
					
				</div>
				<input type="text" {...register("photourl", { required: true })} name="photourl" id="" placeholder="Your Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 text-black " />
                {errors.photourl && <span className='text-lime-400'>Photo URL is required</span>}
			</div>
      <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-3 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
		</div>
    
	
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-black bg-opacity-20 dark:text-gray-900">Sign up</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Already have an account yet?
				<Link rel="noopener noreferrer" to="/login" className="hover:underline dark:text-violet-400">Sign in</Link>.
			</p>

	</form>
</div>

  </div>
        </div>
    );
};

export default SignUp;