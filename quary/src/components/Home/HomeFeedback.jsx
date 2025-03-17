import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FeedbackCard from '../Card/FeedbackCard';

function HomeFeedback(){
    const FeedbackData = [
            {
                image: SampleImg,
                name: "Dyas Kardinal",
                role: "CEO & FOUNDER",
                body: "Working with Tambank has been a testament to their exceptional expertise and commitment to ethical mining practices. Their team seamlessly blends technological innovation with environmental responsibility, creating a mining experience that not only delivers results but also contributes positively to the communities they operate in",
            },
            {
                image: SampleImg,
                name: "Dyas Kardinal",
                role: "CEO & FOUNDER",
                body: "Working with Tambank has been a testament to their exceptional expertise and commitment to ethical mining practices. Their team seamlessly blends technological innovation with environmental responsibility, creating a mining experience that not only delivers results but also contributes positively to the communities they operate in",
            },
        ];
  return (
    <>
    <div className="px-[16px] py-[32px] font-Yantramanav">
        <div className='container mx-auto text-center'>
            <div className="flex flex-col gap-[10px] items-center justify-between">
                <h5 className=" text-[20px] text-[#FF7318] uppercase   w-full">testimonial</h5>
                <h1 className="container mx-auto text-[#151515] capitalize md:text-[48px] text-[24px] font-bold lg:w-[600px] w-full ">what they say about our services </h1>   
            </div>

            <div>
            <div className='max-w-7xl mx-auto'>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {FeedbackData.map((feedback, index) => (
                                <FeedbackCard key={index} {...feedback} />
                            ))}
                        </div>
                    </div>
            </div>

        </div>
    </div>
    </>
    
  );
}

export default HomeFeedback