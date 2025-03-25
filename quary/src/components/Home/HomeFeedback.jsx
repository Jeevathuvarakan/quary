import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import FeedbackCard from '../Card/FeedbackCard';
import { SampleImg } from '../../constants/Data';

function HomeFeedback() {

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
        <div className="container mx-auto text-center">
          <div className="flex flex-col gap-[10px] items-center justify-between">
            <h5 className=" text-[20px] text-[#FF7318] uppercase   w-full">
              testimonial
            </h5>
            <h1 className="container mx-auto text-[#151515] capitalize md:text-[48px] text-[24px] font-bold lg:w-[600px] w-full ">
              what they say about our services{" "}
            </h1>
          </div>

          <div>
            <div className="max-w-7xl mx-auto">
              <Swiper
                slidesPerView={1} // Default: Show 3 cards
                breakpoints={{
                  1024: { slidesPerView: 2 }, // 3 cards on large screens
                  768: { slidesPerView: 2 }, // 2 cards on tablets
                  464: { slidesPerView: 1 }, // 1 card on mobile
                }}
                spaceBetween={10} // Spacing between cards
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay, EffectCoverflow]}
                className="max-w-7xl mx-auto h-[450px] custom-swiper"
                loop={true}
                speed={800}
                grabCursor={true}
                centeredSlides={true}
                effect={"coverflow"}
                coverflowEffect={{
                  rotate: 50, // Rotate slides
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
              >
                {FeedbackData.map((feedback, index) => (
                  <SwiperSlide
                    key={index}
                    className="transition-transform duration-300"
                  >
                    <FeedbackCard {...feedback} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeFeedback