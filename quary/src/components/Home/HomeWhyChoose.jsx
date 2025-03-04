import React from "react";
import { JCBImage } from "../../constants/Data";

function HomeWhyChoose() {
    return (
        <>
            <div className="pl-[60px] py-[60px] bg-[#E9E9E9] font-Yantramanav">
                <div className='pr-[100px] bg-[#ff7318]'>
                    <div className=' flex justify-between font-Yantramanav bg-white'>
                        <div
                            className=" inset-0  w-full"
                            style={{
                                backgroundImage: ` url(${JCBImage})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",


                            }}
                        >
                        </div>
                        <div>
                            <div className="flex flex-col gap-[20px]">
                                <h5 className=" text-[20px] text-[#FF7318] uppercase lg:w-[590px] w-full lg:leading-[58px] ">Why Choose Us</h5>
                                <h1 className="text-[#151515] lg:text-[48px] md:text-[24px] text-[12px] font-bold lg:leading-[58px] lg:w-[358px]">From Roots to Riches, Unveiling Our Mining Odyssey </h1>
                                <p className=" text-[16px] text-[#7A7A7A]  lg:w-[516px] w-full">In non mauris quis ex placerat iaculis. Maecenas sed auctor arcu. Suspendisse egestas pellentesque quam sit amet cursus. Nulla pharetra euismod tellus eu sollicitudin.
                                    Phasellus vehicula, turpis vel fermentum molestie.</p>

                            </div>
                            <div className=' flex justify-between'>
                                <div className="flex gap-[40px] items-center">
                                    <div>
                                        <span className=" lg:text-[48px] md:text-[24px] text-[12px] font-bold lg:w-[358px] w-full lg:leading-[88px]  text-[#FF7318]">
                                            250+
                                        </span>
                                        <span className="lg:text-[24px] md:text-[12px] text-[6px] font-semibold  w-full lg:leading-[88px] text-justify text-black break-words">
                                            Project Completed
                                        </span>
                                    </div>
                                </div>
                                <div className="items-center">
                                    <div>
                                        <span className=" lg:text-[48px] md:text-[24px] text-[12px] font-bold lg:w-[358px] w-full lg:leading-[88px]  text-[#FF7318]">
                                            410+
                                        </span>
                                        <span className="lg:text-[24px] md:text-[12px] text-[6px] font-semibold  w-full lg:leading-[88px] text-justify text-black">
                                            Happy Customers
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[10px] pb-[10px]">

                                <span className="lg:w-[400px] lg:text-[16px] md:text-[8px] text-[6px]  font-semibold  w-full text-justify flex flex-row gap-[220px]  text-black">
                                    Work Satisfaction <span className="lg:text-[16px] md:text-[8px] text-[6px] text-black">90%</span>
                                </span>
                                <div className=" lg:w-[400px] lg:h-[20px] bg-[#e9e9e9]  flex flex-col gap[10px]">
                                    <div className=" lg:w-[360px] lg:h-[20px] bg-black">
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[10px] pb-[10px]">

                                <span className="lg:w-[400px] lg:text-[16px] md:text-[8px] text-[6px]  font-semibold  w-full text-justify flex flex-row gap-[230px]  text-black">
                                    Work Progress <span className="lg:text-[16px] md:text-[8px] text-[6px] text-black">95%</span>
                                </span>
                                <div className=" lg:w-[400px] lg:h-[20px] bg-[#e9e9e9]">
                                    <div className=" lg:w-[380px] lg:h-[20px] bg-black">
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default HomeWhyChoose;
