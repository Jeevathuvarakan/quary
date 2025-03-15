import React from "react";
import { Link } from 'react-router-dom';
import { WorkerImage } from '../../constants/Data';
import ProjectCard from "../Card/ProjectCard";
import ProjectSection from "../Projects/ProjectSection";
import PrimaryButton from "../Button/PrimaryButton";

function HomePoject() {
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
            
        ];
    return (
        <>
            <div className="px-[16px] py-[32px]">
                <div className='container mx-auto py-[10px] font-Yantramanav text-center'>
                    <h5 className=" text-[20px] text-[#FF7318] uppercase font-semibold w-full lg:leading-[58px]">Latest Projects</h5>
                    <h1 className="container mx-auto text-[#151515] lg:text-[48px] md:text-[24px] text-[12px] font-bold lg:w-[600px]  w-full items-center  lg:leading-[58px]">Prospecting Progress, Planting Prosperity </h1>
                </div>
                <div className="py-[10px]">
                    <div className='max-w-7xl mx-auto'>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {projectData.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                    </div>
                    <div className="py-[10px] flex justify-center">
                        <Link to="/Projects">
                        <PrimaryButton
                            name="All Projects"
                            widthsizemd="fit"
                            widthsizesm="full" />
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}

export default HomePoject;
