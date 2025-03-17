import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FeedbackCard from '../Card/FeedbackCard';

function HomeFeedback(){
   
  return (
    <>
    <div className="px-[16px] py-[32px] font-Yantramanav">
        <div className='container mx-auto text-center'>
            <div className="flex flex-col gap-[10px] items-center justify-between">
                <h5 className=" text-[20px] text-[#FF7318] uppercase   w-full">testimonial</h5>
                <h1 className="container mx-auto text-[#151515] capitalize md:text-[48px] text-[24px] font-bold lg:w-[600px] w-full ">what they say about our services </h1>   
            </div>

        </div>
    </div>
    </>
    
  );
}

export default HomeFeedback;