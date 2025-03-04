import React from 'react'
import { HerobannerImg } from "../../constants/Data";

function ProjectCard({ image, date, heading, body, text }) {
    return (
        <div className='flex flex-col gap-[24px] shadow-lg'
         style={{
                            backgroundImage: ` url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }} >
            <div  className='flex flex-col gap-[18px] '>
                <h3 className='text-[20px] text-white font-bold uppercase'>{date}</h3>
                <h1 className='text-[32px] text-white font-bold'>{heading}</h1>
                <p className='text-[16px] text-white font-bold'>{body}</p>
            </div>
            <div className='flex gap-[4px]'>
                <button className='container mx-auto flex items-center justify-center bg-[#ff7318] text-white hover:bg-black px-[30px] pt-[17px] text-nowrap text-[20px] font-semibold leading-[20%] font-Playfair pb-[13px] h-[48px] w-[160px] cursor-pointer'>{text}</button>
            </div>
        </div>
    )
}

export default ProjectCard