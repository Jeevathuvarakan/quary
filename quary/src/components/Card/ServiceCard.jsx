import React from 'react'

function ServiceCard({ image, title, heading, body, text, icon }) {
    return (
        <div className='flex flex-col gap-[24px] shadow-lg px-[40px] py-[60px]'>
            <div className='flex flex-col gap-[18px] '>
                <img src={image} alt='img' className='w-[82px] h-[82px] ' />
                <h3 className='text-[20px] text-[#ff7318] uppercase'>{title}</h3>
                <h1 className='text-[32px] text-black font-bold'>{heading}</h1>
                <p className='text-[16px] text-[#7a7a7a]'>{body}</p>
            </div>
            <div className='flex gap-[6px] items-center'>
                <button className='text-[20px] font-serif uppercase'>{text}</button>
                <img src={icon} alt='icon' className='object-cover h-[14px] w-[20px]' />
            </div>
        </div>
    )
}

export default ServiceCard