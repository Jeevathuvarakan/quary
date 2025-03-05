import React from "react";
import { JCBImage } from "../../constants/Data";

function HomeWhyChoose() {
    return (
        <>
            <div className="px-[16px] py-[32px] font-Yantramanav bg-[#e9e9e9]">
                <div className="container mx-auto ">
                    <div className="py-[10px] flex lg:flex-row flex-col gap-[0px] justify-between items-center ">
                        <div className="bg-white w-6/12 h-full" >
                            <img src={JCBImage} alt="Img" className="object-cover lg:w-[550px] w-full" />
                        </div>

                        <div className="bg-white width-5/12 h-full">
                            <div className="flex flex-col gap-[20px]">
                                <h5 className=" text-[20px] text-[#FF7318] uppercase w-full  text-center font-bold">Why Choose Us</h5>
                                <h1 className="text-[#151515] lg:text-[48px] md:text-[24px] text-[12px] font-bold items-center">From Roots to Riches, Unveiling Our Mining Odyssey </h1>
                                <p className=" text-[16px] text-[#7A7A7A]  lg:w-[516px] w-full items-center text-justify">In non mauris quis ex placerat iaculis. Maecenas sed auctor arcu. Suspendisse egestas pellentesque quam sit amet cursus. Nulla pharetra euismod tellus eu sollicitudin.
                                    Phasellus vehicula, turpis vel fermentum molestie.</p>

                            </div>
                            <div className="flex">
                                <div className="flex-row">
                                    <div>
                                        <p className=" lg:text-[60px] md:text-[24px] text-[12px] font-bold lg:w-[358px] w-full lg:leading-[88px]  text-[#FF7318]">
                                            250+
                                        </p>
                                    </div>
                                    <div className="flex-col gap-0">
                                        <p className="lg:text-[24px] md:text-[12px] text-[6px] font-semibold  w-full text-justify text-black"> Project </p>
                                        <p className="lg:text-[24px] md:text-[12px] text-[6px] font-semibold  w-full text-justify text-black"> Completed</p>
                                    </div>
                                </div>

                                <div className="flex-row">
                                    <div>
                                        <p className=" lg:text-[60px] md:text-[24px] text-[12px] font-bold lg:w-[358px] w-full lg:leading-[88px]  text-[#FF7318]">
                                            410+
                                        </p>
                                    </div>
                                    <div className="flex-col gap-0">
                                        <p className="lg:text-[24px] md:text-[12px] text-[6px] font-semibold  w-full text-justify text-black"> Happay </p>
                                        <p className="lg:text-[24px] md:text-[12px] text-[6px] font-semibold  w-full text-justify text-black"> Customers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="py-[20px]">
                                <div className="flex row">
                                    <p className="lg:w-[400px] lg:text-[16px] md:text-[8px] text-[6px]  font-semibold  w-full text-justify flex flex-row gap-[220px]  text-black">
                                        Work Satisfaction </p>
                                    <p className="lg:text-[16px] md:text-[8px] text-[6px] text-black">90%</p>
                                </div>
                                <div className=" lg:w-[500px] lg:h-[20px] bg-[#e9e9e9]">
                                    <div className=" lg:w-[450px] lg:h-[20px] bg-black">
                                    </div>
                                </div>
                            </div>
                            <div className="py-[10px]">
                                <div className="flex row">
                                    <p className="lg:w-[400px] lg:text-[16px] md:text-[8px] text-[6px]  font-semibold  w-full text-justify flex flex-row gap-[220px]  text-black">
                                        Work Progress </p>
                                    <p className="lg:text-[16px] md:text-[8px] text-[6px] text-black">95%</p>
                                </div>
                                <div className=" lg:w-[500px] lg:h-[20px] bg-[#e9e9e9]">
                                    <div className=" lg:w-[475px] lg:h-[20px] bg-black">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#ff7318] width-1/12  h-full">
                            it must come as orange
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeWhyChoose;
