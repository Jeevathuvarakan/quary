import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { WorkerImage } from "../../constants/Data"; 
import ProjectCard from "../Card/ProjectCard";

function HomeProject() {
  const carouselRef = useRef(null);

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

  // Duplicate project list to create a seamless loop
  const duplicatedProject = [...projectData, ...projectData];

  useEffect(() => {
    if (carouselRef.current) {
      gsap.fromTo(
        carouselRef.current, 
        { x: "0%" },  // Start from original position
        { 
          x: "-50%",  // Move halfway (since we duplicated cards)
          duration: 10, // Speed of animation
          ease: "linear", 
          repeat: -1, // Infinite loop
        }
      );
    }
  }, []);

  return (
    <div className="px-[16px] py-[32px] relative overflow-hidden">
      <div className="container mx-auto py-[10px] font-Yantramanav text-center">
        <h5 className="text-[20px] text-[#FF7318] uppercase w-full">
          Latest Projects
        </h5>
        <h1 className="container mx-auto text-[#151515] capitalize md:text-[48px] text-[24px] font-bold lg:w-[600px] w-full">
          Prospecting Progress, Planting Prosperity
        </h1>
      </div>
      
      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <div ref={carouselRef} className="flex gap-6  whitespace-nowrap">
          {duplicatedProject.map((project, index) => (
            <div key={index} className="w-[300px] flex-shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeProject;
