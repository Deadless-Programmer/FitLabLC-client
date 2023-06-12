import React, { useContext } from 'react';
import Banner from './Banner/Banner';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import WrokOutPlan from './WrokOutPlan/WrokOutPlan';
import { AuthContext } from '../../../providers/AuthProvider';
import Spinner from '../../Spinner/Spinner';



const Home = () => {
    const {loading}=useContext(AuthContext);
    
    if(loading){
      return  <Spinner></Spinner>
    
    }
    return (
        <div>
           
           <Banner></Banner>
          <PopularClass></PopularClass>
          <PopularInstructors></PopularInstructors>
          <WrokOutPlan></WrokOutPlan>
        </div>
    );
};

export default Home;