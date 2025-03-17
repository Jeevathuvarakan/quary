import React from 'react'

function FeedbackCard({ image, name, role, body }) {
    return (
        <div className='flex flex-col gap-[20px] shadow-lg px-[16px] py-[32px] border-r'>
            <div className='flex flex-col gap-[18px] items-center justify-center'>
                <div>
                    <p className='md:text-[22px] text-[18px] text-black text-center justify-center'>{body}</p>
                </div>
                <div className='flex gap-[20px]'>
                    <div className='rounded bg-black'>
                        <img src={image} alt='img' className='w-[82px] h-[82px] ' />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-[20px] text-[#ff7318] uppercase text-left'>{name}</h3>
                        <h3 className='text-[16px] text-[#7a7a7a] text-left'>{role}</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeedbackCard