import React from "react";
import { WorkerImage } from "../../constants/Data";
import PrimaryButton from "../Button/PrimaryButton";
import { FaFacebook } from "react-icons/fa";

function HomeAboutUs() {
    return (
        <>
            <div className="px-[80px] py-[100px]">
                <div className='container mx-auto py-[10px] flex justify-between font-Yantramanav'>
                    <div className='flex flex-col gap-[20px] lg:w-[638px] w-full'>
                        <h5 className=" text-[20px] text-[#FF7318] uppercase lg:w-[590px] w-full lg:leading-[58px]">About Us</h5>
                        <h1 className="text-[#151515] lg:text-[48px] md:text-[24px] text-[12px] font-bold lg:w-[590px] w-full lg:leading-[58px]">Forging Sucess From Earth's Depths </h1>
                        <div className="m-[0px] [0px] [14.4px] lg:w-[590px] w-full pl-[48px] border-[0px] border-solid border-l-[2px] border-[#FF7318]">
                            <p className=" text-[16px] font-bold text-[#151515]  lg:w-[516px] w-full">Praesent vel vulputate ligula, mollis facilisis est. In non mauris quis ex placerat iaculis. Maecenas sed auctor arcu. Suspendisse egestas pellentesque quam sit amet cursus.
                                Nulla pharetra euismod tellus eu sollicitudin.</p>
                        </div>
                        <div className="m-[0px] [0px] [14.4px] lg:w-[590px] w-full pl-[48px]">
                            <p className=" text-[16px] text-[#7A7A7A]  lg:w-[516px] w-full">Morbi ut lobortis elit. Suspendisse at blandit orci. Integer eget fermentum lorem. Quisque rutrum leo nec tincidunt sagittis. Curabitur id elementum sapien, id interdum libero. Phasellus egestas odio sed sollicitudin tincidunt.
                                Integer iaculis turpis ac laoreet laoreet. In in posuere massa. Nunc a accumsan leo.</p>
                        </div>
                        <div className="">
                        <div className=" m-[0px] [0px] [14.4px] lg:w-[590px] w-full pr-[100px] flex gap-[40px] items-center">
                            <PrimaryButton
                                name="Read More"
                                widthsizemd="fit"
                                widthsizesm="full"
                            />
                            <FaFacebook className='text-black h-20 w-20 border-[2px] rounded-full border-[#FF7318]' />
                        </div>
                        </div>
                        

                    </div>
                    <div className="bg-[#FF7318]  ">
                    <p className=" text-[22px] font-bold text-white  lg:w-[57px] w-full lg:h-[176px]">10+ Years Of Experience</p>
                    </div>
                    <div
                        className="flex justify-between  inset-0  py-[100px]  text-white  lg:w-[550px] w-full"
                        style={{
                            backgroundImage: ` url(${WorkerImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",


                        }}
                    >
                    </div>
                </div>


            </div>
        </>
    );
}

export default HomeAboutUs;
