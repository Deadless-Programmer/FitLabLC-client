import React from 'react';

const Class = ({data}) => {
    const {image, name, instructor, availableSeats, price, selectButton} = data;
    return (
        <div>
           <div className=" content-center rounded-md shadow-md bg-gray-100 text-black">
	<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
        <p className="dark:text-gray-100">{name}</p>
			<h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
			<p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
	</div>
</div> 
        </div>
    );
};

export default Class;