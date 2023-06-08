import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Banner.css'
const Banner = () => {
    return (
        <div>
              <Carousel>
                <div>
                   
                <div className="hero min-h-screen bannarImg" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold  ">Empowering Minds</h1>
      <p className="mb-5">At FitLab Learning Camp, we inspire young minds to embrace an active lifestyle, combining fitness education and outdoor adventures for a transformative summer camp experience that nurtures lifelong learning and healthy habits.</p>
      <button className="btn bg-red-600 border-0 text-white hover:bg-lime-700 capitalize">join club now</button>
    </div>
  </div>
</div>
                   
                </div>
                <div>
                <div className="hero min-h-screen bannarImg2" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold ">Empowering Minds</h1>
      <p className="mb-5">At FitLab Learning Camp, we inspire young minds to embrace an active lifestyle, combining fitness education and outdoor adventures for a transformative summer camp experience that nurtures lifelong learning and healthy habits.</p>
      <button className="btn bg-red-600 border-0 text-white hover:bg-lime-700 capitalize">join club now</button>
    </div>
  </div>
</div>
                   
                </div>
                <div>
                <div className="hero min-h-screen bannarImg3" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Empowering Minds</h1>
      <p className="mb-5">At FitLab Learning Camp, we inspire young minds to embrace an active lifestyle, combining fitness education and outdoor adventures for a transformative summer camp experience that nurtures lifelong learning and healthy habits.</p>
      <button className="btn bg-red-600 border-0 text-white hover:bg-lime-700 capitalize">join club now</button>
    </div>
  </div>
</div>
                   
                </div>
                <div>
                <div className="hero min-h-screen bannarImg4" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Empowering Minds</h1>
      <p className="mb-5">At FitLab Learning Camp, we inspire young minds to embrace an active lifestyle, combining fitness education and outdoor adventures for a transformative summer camp experience that nurtures lifelong learning and healthy habits.</p>
      <button className="btn bg-red-600 border-0 text-white hover:bg-lime-700 capitalize">join club now</button>
    </div>
  </div>
</div>
                   
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;