import React, { useEffect, useState } from 'react';
import Instructor from './Instructor';

const Instructors = () => {

        const [Instructors, setInstructors]=useState([]);
        useEffect(()=>{
            fetch('Instructors.json')
            .then(res=> res.json())
            .then(data=>setInstructors(data))
        },[])

    return (
        <div>
          <section className="py-6 bg-gray-800 text-white">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4 text-center">
			<h3 className="text-2xl font-bold leading-none sm:text-4xl">Meet Our Talented Instructors</h3>
			<p className="">Discover our skilled instructors, bringing expertise and passion to our classrooms. <br /> Experience a dynamic learning environment with diverse backgrounds and specialized knowledge. 
            Join us <br /> in nurturing the next generation of learners.</p>
		</div>
		<div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
			{
                Instructors.map((data, index)=> <Instructor key={index} data={data} ></Instructor> )
            }
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Instructors;