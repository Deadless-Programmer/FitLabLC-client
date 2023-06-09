import React from 'react';
import loader from '../../assets/spinner/dribbble_orange.gif'
import spinner from '../../assets/spinner/anim.gif'
const Spinner = () => {
    return (
    
               <div className='flex justify-center items-center h-[calc(100vh -64px)]'>
            <img className=' z-20' src={loader} alt="" />
        </div>
    
    );
};

export default Spinner;