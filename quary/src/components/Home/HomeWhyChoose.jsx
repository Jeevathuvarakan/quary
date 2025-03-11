import React from "react";
import { JCBImage } from "../../constants/Data";

function HomeWhyChoose() {
    return (
        <>
            <div className="pl-[16px] py-[32px] font-Yantramanav bg-[#e9e9e9]">
                <div className=" bg-[#ff7318] ">
                    <div className="">
                        <div className="container mx-auto flex lg:flex-row flex-col-reverse gap-[10px] bg-white" >
                            <div className="">
                                <img src={JCBImage} alt="Img" className="lg:w-full h-full" />
                            </div>
                            <div className=" flex flex-col gap-[10px] text-left justify-between">
                                <h5 className=" text-[20px] text-[#FF7318] uppercase w-full">Why Choose Us</h5>
                                <h1 className="text-[#151515] lg:w-[516px]  lg:text-[48px] md:text-[24px] text-[12px] font-bold text-justify lg:leading-tight">From Roots to Riches, Unveiling Our Mining Odyssey </h1>
                                <div className="md:px-[20px] px-[48px]">
                                    <p className=" text-[16px] text-[#7A7A7A] lg:w-[516px] w-full text-justify">In non mauris quis ex placerat iaculis. Maecenas sed auctor arcu. Suspendisse egestas pellentesque quam sit amet cursus. Nulla pharetra euismod tellus eu sollicitudin.
                                        Phasellus vehicula, turpis vel fermentum molestie.</p>

                                </div>

                                <div className="px-[60px] lg:w-[516px] flex justify-between">
                                    <div className="flex md:flex flex-col gap-[10px]">
                                        <div className="">
                                            <p className=" lg:text-[60px] md:text-[48px] text-[32px] font-bold w-full  text-[#FF7318]">
                                                250+
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap[0px]">
                                            <div>
                                                <p className="lg:text-[24px] md:text-[24px] text-[18px] font-semibold  w-full text-justify text-black"> Project </p>
                                            </div>
                                            <div>
                                                <p className="lg:text-[24px] md:text-[24px] text-[18px] font-semibold  w-full text-justify text-black"> Completed</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex md:flex flex-col gap-[10px]">
                                        <div>
                                            <p className=" lg:text-[60px] md:text-[48px] text-[32px] font-bold w-full  text-[#FF7318]">
                                                410+
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap[0px]">
                                            <div>
                                                <p className="lg:text-[24px] md:text-[24px] text-[18px] font-semibold  w-full text-justify text-black"> Happy </p>

                                            </div>
                                            <div>
                                                <p className="lg:text-[24px] md:text-[24px] text-[18px] font-semibold  w-full text-justify text-black"> Customers</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-[20px] md:w-[500px] flex flex-col gap-[20px]">
                                    <div className="px-[60px] lg:w-[516px]  flex flex-col gap-[10px]">
                                        <div className=" flex justify-between ">
                                            <p className="lg:w-[400px] lg:text-[18px] md:text-[16px] text-[14px]  font-semibold  w-full text-justify flex flex-row gap-[220px]  text-black">
                                                Work Satisfaction </p>
                                            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-black">90%</p>
                                        </div>
                                        <div className=" lg:w-[450px] lg:h-[20px] md:w-[450px] w-[380px] md:h-[20px] h-[20px] bg-[#e9e9e9]">
                                            <div className=" lg:w-[405px] lg:h-[20px] md:w-[405px] w-[342px] md:h-[20px] h-[20px] bg-black">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-[60px]  lg:w-[516px] ">
                                        <div className=" flex justify-between ">
                                            <p className="lg:w-[400px] lg:text-[18px] md:text-[16px] text-[14px]  font-semibold  w-full text-justify flex flex-row gap-[220px]  text-black">
                                                Work Progress </p>
                                            <p className="lg:text-[18px] md:text-[16px] text-[14px] text-black">95%</p>
                                        </div>
                                        <div className="lg:w-[450px] lg:h-[20px] md:w-[450px] w-[380px] md:h-[20px] h-[20px] bg-[#e9e9e9]">
                                            <div className="lg:w-[428px] lg:h-[20px] md:w-[405px] w-[361px] md:h-[20px] h-[20px] bg-black">
                                            </div>
                                        </div>
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
