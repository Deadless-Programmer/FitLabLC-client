import React from 'react';

const PopularClass = () => {
    return (
        <div>
            <section className="  text-black">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4 text-center">
			<h3 className="text-2xl font-bold leading-none sm:text-4xl">Our Highly Acclaimed Classes</h3>
			<p className="">Uncover excellence with top-rated courses. Immerse in knowledge, guided by expert instructors. <br /> Transformative education awaits. Join us today!</p>
		</div>

        {/* <div className="grid w-full content-center	 grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
			{
                classes.map((data, index)=> <Class data={data} key={index}></Class> )
            }
			
		</div> */}
		
	</div>
</section>
        </div>
    );
};

export default PopularClass;