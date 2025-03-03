import React from 'react'
import LogoConfig from '../constants/LogoConfig'
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='px-[16px] py-[32px] bg-black font-Yantramanav text-white'>
            <div className='container mx-auto py-[10px]'>
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
                            <div className='border rounded-full p-[8px] '>
                                <FaFacebook className='text-white' />
                            </div>
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
                                <Link to="/">
                                    <p className='hover:text-[#FF7318]'>Home</p>
                                </Link>
                                <Link to="/">
                                    <p className='hover:text-[#FF7318]'>About Us</p>
                                </Link>
                                <Link to="/">
                                    <p className='hover:text-[#FF7318]'>How We Work</p>
                                </Link>
                                <Link to="/">
                                    <p className='hover:text-[#FF7318]'>Profiles</p>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <p>Help & Support</p>
                            <div className='flex flex-col gap-[12px]'>
                                <Link to="/">
                                    <p className=''>Contact Us</p>
                                </Link>
                                <p className=''>Feedback</p>
                                <p>FAQS</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[8px]'>
                            <p>Contact Us</p>
                            <div className='flex flex-col gap-[12px]'>
                                <div className='flex gap-[12px]'>
                                    <div className='flex flex-col gap-[12px]'>
                                        <div className='border rounded-full p-[8px] '>
                                            <FaFacebook className='text-white' />
                                        </div>
                                        <div className='border rounded-full p-[8px] '>
                                            <FaFacebook className='text-white' />
                                        </div>
                                        <div className='border rounded-full p-[8px] '>
                                            <FaFacebook className='text-white' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[22px]'>
                                        <p className=''>Jaffna, Sri Lanka, 40000</p>
                                        <p>+94 77 985 8256</p>
                                        <p>tjeevathuvarakan@gmail.com</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=' border border-solid border-b-[1px] w-full'></div>
            <div className='container mx-auto flex md:flex-row flex-col justify-between  px-[16px] py-[10px]'>
              <p className='text-[18px] text-white font-Manrope md:text-start text-center '>Copyright © 2024 Jeevathuvarakan.</p>
              <div className='flex md:flex-row  flex-col  md:gap-[16px] gap-[4px] items-center'>
                <p className='text-[18px] text-white font-Manrope'>Term of Services</p>
                <p className='text-[18px] text-white font-Manrope'>Privacy Policy</p>
                <p className='text-[18px] text-white font-Manrope'>Connect with me</p>
              </div>
            </div>

        </div>
    )
}

export default Footer