import React from 'react';

const PopularClassCard = ({classData}) => {
    console.log(classData);
    const {image, name, instructor, availableSeats, price, selectButton, studentsEnrolled} = classData;
    return (
        <div>
             <div  className=" content-center rounded-md shadow-md bg-gray-100 text-black">
	<img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
        <div className='flex justify-between'>
        <p className="dark:text-gray-100">{instructor}</p>
        <p className="dark:text-gray-100">Enrolled : {studentsEnrolled} </p>
        </div>
			<h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
			<div className='flex justify-between'>
            <p className="dark:text-gray-100">Available seats : {availableSeats} </p>
            <p className="dark:text-gray-100">price : ${price} </p>
            
            </div>
		</div>
		{/* <button disabled={!isAvailable || isAdmin} onClick={() => handleSelect(data)}>
        {isAdmin ? 'Logged in as Admin' : 'Select'}
      </button> */}
        {/* <button className="btn bg-red-600 border-0 text-lg text-white hover:bg-lime-700 capitalize">{selectButton}</button> */}
	</div>
</div> 
        </div>
    );
};

export default PopularClassCard;