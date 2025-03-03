import React from 'react';
import { IconImg, SampleImg } from '../../constants/Data';
import ServiceCard from '../Card/ServiceCard';
import { HerobannerImg } from "../../constants/Data"; 

function ServiceSection() {
    const serviceData = [
        {
            image: SampleImg,
            title: "Our Services",
            heading: "Web Development",
            body: "We build modern and scalable web applications tailored to your business needs.",
            text: "Learn More",
            icon: IconImg,
        },
        {
            image: SampleImg,
            title: "Design Services",
            heading: "UI/UX Design",
            body: "Creating intuitive and visually appealing designs to enhance user experience.",
            text: "Explore",
            icon: IconImg,
        },
        {
            image: SampleImg,
            title: "Marketing",
            heading: "SEO Optimization",
            body: "Helping your website rank higher on search engines with data-driven strategies.",
            text: "Get Started",
            icon: IconImg,
        },
        {
            image: SampleImg,
            title: "Our Services",
            heading: "Web Development",
            body: "We build modern and scalable web applications tailored to your business needs.",
            text: "Learn More",
            icon: IconImg,
        },
        {
            image: SampleImg,
            title: "Design Services",
            heading: "UI/UX Design",
            body: "Creating intuitive and visually appealing designs to enhance user experience.",
            text: "Explore",
            icon: IconImg,
        },
        {
            image: SampleImg,
            title: "Marketing",
            heading: "SEO Optimization",
            body: "Helping your website rank higher on search engines with data-driven strategies.",
            text: "Get Started",
            icon: IconImg,
        },
    ];

    return (
        <>
            <div
                className="flex px-[16px]  inset-0  py-[100px]  text-white   relative w-full      "
                style={{
                    backgroundImage: ` url(${HerobannerImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    }}
            >
                 <h1 className="lg:text-[72px] md:text-[48px] text-[24px] font-bold lg:w-[634px] w-full lg:leading-[88px]">Services</h1>
                       
            </div>
            <div className='px-[16px] py-[32px] bg-white'>
                <div className='max-w-7xl mx-auto'>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {serviceData.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default ServiceSection;
