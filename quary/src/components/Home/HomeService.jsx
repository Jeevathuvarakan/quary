import React from "react";
import { Link } from 'react-router-dom';
import { IconImg, SampleImg } from '../../constants/Data';
import ServiceCard from '../Card/ServiceCard';
import ServiceSection from "../Services/ServiceSection";


function HomeService() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

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

    ];
    return (
        <>
            <div className="px-[80px] py-[100px]">
                <div className='container mx-auto py-[10px] font-Yantramanav text-center'>
                    <h5 className=" text-[20px] text-[#FF7318] uppercase font-semibold w-full lg:leading-[58px]">Services</h5>
                    <h1 className="container mx-auto text-[#151515] lg:text-[48px] md:text-[24px] text-[12px] font-bold lg:w-[600px]  w-full items-center  lg:leading-[58px]">Tailored Mining Services for Every Venture </h1>
                </div>
                <div>
                    <div className='max-w-7xl mx-auto'>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {serviceData.map((service, index) => (
                                <ServiceCard key={index} {...service} />
                            ))}
                        </div>
                    </div>
                    <div className="py-[10px]">
                        <Link to="/Services" onClick={scrollToTop}>
                            <button className=" container mx-auto flex items-center justify-center bg-[#ff7318] text-white hover:bg-black px-[30px] pt-[17px] text-nowrap text-[18.4px] font-semibold leading-[20%] font-Playfair pb-[13px] h-[48px] w-[160px] cursor-pointer">MORE SERVICES</button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}

export default HomeService;
