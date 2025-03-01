import React from 'react';
import { IconImg, SampleImg } from '../../constants/Data';
import ServiceCard from '../Card/ServiceCard';

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
        <div className='px-[16px] py-[32px] bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {serviceData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
