import React from "react";
import { IconImg, SampleImg } from "../../constants/Data";
import ServiceCard from "../Card/ServiceCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="px-[16px] md:py-[46px] py-[32px]">
      <div className="container mx-auto py-[10px] font-Yantramanav text-center">
        <h5 className=" text-[20px] text-[#FF7318] uppercase  w-full">
          Services
        </h5>
        <h1 className="container mx-auto text-[#151515] capitalize md:text-[48px] text-[24px] font-bold lg:w-[600px] w-full">
          Tailored Mining Services for Every Venture
        </h1>
      </div>
      <div className="max-w-7xl mx-auto ">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000} // Speed of auto movement
          transitionDuration={0} // Removes the default transition delay
          customTransition="transform 5s linear" // Smooth movement
          additionalTransfrom={0} // Prevent unnecessary gaps
          showDots={false}
          arrows={false}
          className="h-[500px]"
        >
          {serviceData.map((service, index) => (
            <div key={index} className="px-3">
              <ServiceCard {...service} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HomeService;
