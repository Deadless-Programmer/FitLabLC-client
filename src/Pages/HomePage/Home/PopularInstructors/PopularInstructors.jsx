import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PopularInstructorsCard from './PopularInstructorsCard';
import AOS from "aos";
import "aos/dist/aos.css";
const PopularInstructors = () => {
    const [popularMentors, setPopularMentors]=useState([]);
    useEffect(() => {
      AOS.init();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fit-lab-learning-camp-server.vercel.app/popularInstructors'); 
            setPopularMentors(response.data);
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
			<h3 data-aos="fade-up" className="text-2xl font-bold leading-none sm:text-4xl">Most Valuable Instructors</h3>
			<p data-aos="flip-left" className="">Immerse yourself in the wisdom of our masterful mentors, guiding you to new <br /> heights of knowledge and growth.</p>
		</div>

        <div className="grid w-full content-center	 grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
			{
                popularMentors.map((mentorsData, index)=> <PopularInstructorsCard key={index} mentorsData={mentorsData} ></PopularInstructorsCard>  )
            }
			
		</div>
		
	</div>
</section>
        </div>
       
    );
};

export default PopularInstructors;