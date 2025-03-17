import React from "react";
import { WorkerImage } from "../../constants/Data";
import ProjectCard from "../Card/ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function HomeProject() {
  const projectData = [
    {
      image: WorkerImage,
      date: "10-08-2022",
      heading: "Web Development",
      body: "We build modern and scalable web applications tailored to your business needs.",
      text: "Learn More",
    },
    {
      image: WorkerImage,
      date: "10-08-2022",
      heading: "UI/UX Design",
      body: "We build modern and scalable web applications tailored to your business needs.",
      text: "Learn More",
    },
    {
      image: WorkerImage,
      date: "10-08-2022",
      heading: "Web Development",
      body: "We build modern and scalable web applications tailored to your business needs.",
      text: "Learn More",
    },
    {
      image: WorkerImage,
      date: "10-08-2022",
      heading: "UI/UX Design",
      body: "We build modern and scalable web applications tailored to your business needs.",
      text: "Learn More",
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="px-[16px] py-[32px] relative">
      <div className="container mx-auto py-[10px] font-Yantramanav text-center">
        <h5 className="text-[20px] text-[#FF7318] uppercase w-full">
          Latest Projects
        </h5>
        <h1 className="container mx-auto text-[#151515] capitalize md:text-[48px] text-[24px] font-bold lg:w-[600px] w-full">
          Prospecting Progress, Planting Prosperity
        </h1>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          showDots
          arrows={false}
          className="h-[385px]"
        >
          {projectData.map((project, index) => (
            <div key={index} className="px-3">
              <ProjectCard {...project} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HomeProject;
