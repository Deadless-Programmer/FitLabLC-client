import React, { useContext, useEffect, useState } from 'react';
import Class from './Class';
import axios from 'axios';
import PopularClass from '../HomePage/Home/PopularClass/PopularClass';
import { AuthContext } from '../../providers/AuthProvider';
import Spinner from '../Spinner/Spinner';
import AOS from "aos";
import "aos/dist/aos.css";
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
const Classes = () => {
const [isAdmin] = useAdmin();
const [isInstructor] = useInstructor();
    const [classes, setClasses]=useState([]);
    // useEffect(()=>{
    //     fetch('https://fit-lab-learning-camp-server.vercel.app/class')
    //     .then(res=>res.json())
    //     .then(data=>setClasses(data))
    // },[])

    // const [courseData, setCourseData] = useState([]);

    useEffect(() => {
      AOS.init();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fit-lab-learning-camp-server.vercel.app/class'); 
            setClasses(response.data);
          } catch (error) {
            console.error('Error fetching course data:', error);
          }
        };
    
        fetchData();
      }, []);
      const {loading}=useContext(AuthContext);
    
      if(loading){
        return  <Spinner></Spinner>
      
      }

    return (
        <div>
                  <section className="py-12 bg-gray-800 text-white">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4 text-center">
			<h3 data-aos="fade-up" className="text-2xl font-bold leading-none sm:text-4xl">Unlock Your Potential  with <br /> Approved Classes!</h3>
			<p data-aos="flip-left" className="">Discover meticulously curated classes, handpicked by our administrators for exceptional quality. <br /> Unlock your potential with expert instructors, interactive learning, and diverse subjects. <br /> Enroll today for a transformative educational journey!</p>
		</div>

        <div  className="grid w-full content-center	 grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
			{
                classes.map((data, index)=> <Class isInstructor={isInstructor} isAdmin={isAdmin} data={data} key={index}></Class>)
                
            }
			
		</div>
		
	</div>
</section>
        </div>
    );
};

export default Classes;