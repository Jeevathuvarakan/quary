import React from "react";
import { Link } from 'react-router-dom';
import { IconImg, SampleImg } from '../../constants/Data';
import ServiceCard from '../Card/ServiceCard';
import ServiceSection from "../Services/ServiceSection";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PrimaryButton from "../Button/PrimaryButton";


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

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
        desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
        tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <>
            <div className="px-[16px] py-[32px]">
                <div className='container mx-auto py-[10px] font-Yantramanav text-center'>
                    <h5 className=" text-[20px] text-[#FF7318] uppercase  w-full">Services</h5>
                    <h1 className="container mx-auto text-[#151515] capitalize md:text-[48px] text-[24px] font-bold lg:w-[600px] w-full">Tailored Mining Services for Every Venture </h1>
                </div>
                <div>
                    <div className='max-w-7xl mx-auto'>
                        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} showDots>
                            {serviceData.map((service, index) => (
                                <ServiceCard key={index} {...service} />
                            ))}
                        </Carousel>
                    </div>
                </div>

            </div>
        </>
    );
}

export default HomeService;
