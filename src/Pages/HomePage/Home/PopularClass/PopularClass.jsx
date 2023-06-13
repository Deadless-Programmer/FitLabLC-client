import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopularClassCard from './PopularClassCard';
import AOS from "aos";
import "aos/dist/aos.css";
const PopularClass = () => {
    const [popularClasses, setPopularClasses]=useState([]);
    useEffect(() => {
      AOS.init();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fit-lab-learning-camp-server.vercel.app/popularClass'); 
            setPopularClasses(response.data);
          } catch (error) {
            console.error('Error fetching course data:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div>
            <section className="  text-black">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4 text-center">
			<h3 data-aos="fade-up" className="text-2xl font-bold leading-none sm:text-4xl">Our Highly Acclaimed Classes</h3>
			<p data-aos="flip-left" className="">Uncover excellence with top-rated courses. Immerse in knowledge, guided by expert instructors. <br /> Transformative education awaits. Join us today!</p>
		</div>

        <div className="grid w-full content-center	 grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
			{
                popularClasses.map((classData, index)=> <PopularClassCard key={index} classData={classData} ></PopularClassCard>  )
            }
			
		</div>
		
	</div>
</section>
        </div>
    );
};

export default PopularClass;