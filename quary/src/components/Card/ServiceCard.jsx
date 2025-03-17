import React from 'react'

function ServiceCard({ image, title, heading, body, text, icon }) {
    return (
        <div className='flex flex-col gap-[24px] shadow-lg px-[16px] py-[32px]'>
            <div className='flex flex-col gap-[10px] '>
                <img src={image} alt='img' className='w-[82px] h-[82px] ' />
                <h3 className='md:text-[20px] text-[18px] text-[#ff7318] uppercase justify-between'>{title}</h3>
                <h1 className='md:text-[32px] text-[20px] text-black font-bold justify-between'>{heading}</h1>
                <p className='md:text-[18px] text-[16px] text-[#7a7a7a] justify-between'>{body}</p>
            </div>
            <div className='flex gap-[6px] items-center py-[20px]'>
                <button className='md:text-[20px] text-[16px] uppercase'>{text}</button>
                <img src={icon} alt='icon' className='object-cover h-[14px] w-[20px]' />
            </div>
        </div>
    )
}

export default ServiceCard