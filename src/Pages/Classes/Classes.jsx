import React, { useEffect, useState } from 'react';
import Class from './Class';

const Classes = () => {

    const [classes, setClasses]=useState([]);
    useEffect(()=>{
        fetch('Classes.json')
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[])



    return (
        <div>
                  <section className="py-12 bg-gray-800 text-white">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4 text-center">
			<h3 className="text-2xl font-bold leading-none sm:text-4xl">Unlock Your Potential  with <br /> Approved Classes!</h3>
			<p className="">Discover meticulously curated classes, handpicked by our administrators for exceptional quality. <br /> Unlock your potential with expert instructors, interactive learning, and diverse subjects. <br /> Enroll today for a transformative educational journey!</p>
		</div>

        <div className="grid w-full content-center	 grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
			{
                classes.map((data, index)=> <Class data={data} key={index}></Class> )
            }
			
		</div>
		
	</div>
</section>
        </div>
    );
};

export default Classes;