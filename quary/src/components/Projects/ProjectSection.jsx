import React from 'react';
import { WorkerImage } from '../../constants/Data';
import ProjectCard from '../Card/ProjectCard';
import { HerobannerImg } from "../../constants/Data"; 

function ProjectSection() {
    const projectData = [
        {
            image: WorkerImage,
            date: "10-08-29022",
            heading: "Web Development",
            body: "We build modern and scalable web applications tailored to your business needs.",
            text: "Learn More",
        },
        {
            image: WorkerImage,
            date: "10-08-29022",
            heading: "UI/UX Design",
            body: "We build modern and scalable web applications tailored to your business needs.",
            text: "Learn More",
        },
        {
            image: WorkerImage,
            date: "10-08-29022",
            heading: "Web Development",
            body: "We build modern and scalable web applications tailored to your business needs.",
            text: "Learn More",
        },
        {
            image: WorkerImage,
            date: "10-08-29022",
            heading: "UI/UX Design",
            body: "We build modern and scalable web applications tailored to your business needs.",
            text: "Learn More",
        },
        {
            image: WorkerImage,
            date: "10-08-29022",
            heading: "Web Development",
            body: "We build modern and scalable web applications tailored to your business needs.",
            text: "Learn More",
        },
        {
            image: WorkerImage,
            date: "10-08-29022",
            heading: "UI/UX Design",
            body: "We build modern and scalable web applications tailored to your business needs.",
            text: "Learn More",
        },
        {
            image: WorkerImage,
            date: "10-08-29022",
            heading: "Web Development",
            body: "We build modern and scalable web applications tailored to your business needs.",
            text: "Learn More",
        },
        {
            image: WorkerImage,
            date: "10-08-29022",
            heading: "UI/UX Design",
            body: "We build modern and scalable web applications tailored to your business needs.",
            text: "Learn More",
        },{
            image: WorkerImage,
            date: "10-08-29022",
            heading: "Web Development",
            body: "We build modern and scalable web applications tailored to your business needs.",
            text: "Learn More",
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
                 <h1 className="lg:text-[72px] md:text-[48px] text-[24px] font-bold lg:w-[634px] w-full lg:leading-[88px]">Projects</h1>
                       
            </div>
            <div className='px-[16px] py-[32px] bg-white'>
                <div className='max-w-7xl mx-auto'>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projectData.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default ProjectSection;
