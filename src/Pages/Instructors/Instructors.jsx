import React, { useEffect, useState } from 'react';
import Instructor from './Instructor';
import axios from 'axios';
const Instructors = () => {

    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/instructors'); 
            setCourseData(response.data);
          } catch (error) {
            console.error('Error fetching course data:', error);
          }
        };
    
        fetchData();
      }, []);




        // const [Instructors, setInstructors]=useState([]);
        // useEffect(()=>{
        //     fetch('http://localhost:5000/instructors')
        //     .then(res=> res.json())
        //     .then(data=>setInstructors(data))
        // },[])

    return (
        <div>
          <section className="py-12 bg-gray-800 text-white">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4 text-center">
			<h3 className="text-2xl font-bold leading-none sm:text-4xl">Meet Our Talented Instructors</h3>
			<p className="">Discover our skilled instructors, bringing expertise and passion to our classrooms. <br /> Experience a dynamic learning environment with diverse backgrounds and specialized knowledge. 
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