import React from 'react'

function FeedbackCard({ image, name, role, body }) {
    return (
        <div className='flex flex-col gap-[20px] shadow-lg px-[16px] py-[32px]'>
            <div className='flex flex-col gap-[18px] items-center justify-center'>
                <div>
                    <p className='text-[32px] text-black font-bold'>{body}</p>
                </div>
                <div className='flex'>
                    <div className='rounded bg-black'>
                        <img src={image} alt='img' className='w-[82px] h-[82px] ' />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-[20px] text-[#ff7318] uppercase'>{name}</h3>
                        <h3 className='text-[16px] text-[#7a7a7a]'>{role}</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeedbackCard