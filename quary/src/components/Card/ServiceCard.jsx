import React from 'react'

function ServiceCard({ image, title, heading, body, text, icon }) {
    return (
        <div className='flex flex-col gap-[24px] shadow-lg'>
            <div className='flex flex-col gap-[18px]'>
                <img src={image} alt='img' className='object-cover' />
                <h3 className=''>{title}</h3>
                <h1>{heading}</h1>
                <p>{body}</p>
            </div>
            <div className='flex gap-[4px]'>
                <button>{text}</button>
                <img src={icon} alt='icon' className='object-cover' />
            </div>
        </div>
    )
}

export default ServiceCard