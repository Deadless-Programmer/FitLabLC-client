import React, { useContext, useEffect, useState } from 'react';
import Instructor from './Instructor';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';
import Spinner from '../Spinner/Spinner';
import AOS from "aos";
import "aos/dist/aos.css";
const Instructors = () => {
  const {loading}=useContext(AuthContext);
    
 
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
      AOS.init();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fit-lab-learning-camp-server.vercel.app/instructors'); 
            setCourseData(response.data);
          } catch (error) {
            console.error('Error fetching course data:', error);
          }
        };
    
        fetchData();
      }, []);

      
      if(loading){
        return  <Spinner></Spinner>
      
      }

        // const [Instructors, setInstructors]=useState([]);
        // useEffect(()=>{
        //     fetch('https://fit-lab-learning-camp-server.vercel.app/instructors')
        //     .then(res=> res.json())
        //     .then(data=>setInstructors(data))
        // },[])

      
    return (
        <div>
          <section className="py-12 bg-gray-800 text-white">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4 text-center">
			<h3 data-aos="fade-up" className="text-2xl font-bold leading-none sm:text-4xl">Meet Our Talented Instructors</h3>
			<p data-aos="flip-left" className="">Discover our skilled instructors, bringing expertise and passion to our classrooms. <br /> Experience a dynamic learning environment with diverse backgrounds and specialized knowledge. 
            Join us <br /> in nurturing the next generation of learners.</p>
		</div>
		<div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
			{
                courseData.map((data, index)=> <Instructor key={index} data={data} ></Instructor> )
            }
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Instructors;