import React from 'react'
import LogoConfig from '../constants/LogoConfig'
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='px-[16px] py-[32px] bg-black font-Yantramanav text-white'>
            <div className='container mx-auto'>
                <div className='flex lg:flex-row flex-col gap-[20px] justify-between'>
                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex gap-[12px] items-center'>
                            <img src={LogoConfig.src} alt='logo' className='object-cover h-[70px] w-[90px]' />
                            <h3 className='text-[24px] font-semibold '>Teejey Quary</h3>
                        </div>
                        <p className='lg:w-[596px] w-full text-[16px] leading-[22px] font-medium'>Suba Mangalya is a trusted matrimony platform that blends tradition with technology to help you find your perfect match through verified profiles, personalized matches, and secure communication.
                            Start your journey to lasting love today!</p>
                        <div className='flex gap-[12px]'>
                            <div className='border rounded-full p-[8px] '>
                                <FaFacebook className='text-white' />
                            </div>
                            <div className='border rounded-full p-[8px] '>
                                <FaFacebook className='text-white' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[60px]'>
                        <div className='flex flex-col gap-[8px]'>
                            <p>Quick Links</p>
                            <div className='flex flex-col gap-[12px]'>
                                <p className=''>home</p>
                                <p>home</p>
                                <p>home</p>
                                <p>home</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <p>Quick Links</p>
                            <div className='flex flex-col gap-[12px]'>
                                <Link to ="/">
                                <p className=''>Home</p>
                                </Link>
                                <p className=''>home</p>
                                <p>home</p>
                                <p>home</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <p>Quick Links</p>
                            <div className='flex flex-col gap-[12px]'>
                                <p className=''>home</p>
                                <p>home</p>
                                <p>home</p>
                                <p>home</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer