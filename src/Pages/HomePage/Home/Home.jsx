import React from 'react';
import Banner from './Banner/Banner';
import PopularClass from './PopularClass/PopularClass';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import WrokOutPlan from './WrokOutPlan/WrokOutPlan';


const Home = () => {
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