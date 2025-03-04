import React from "react";
import { WorkerImage } from "../../constants/Data";
import PrimaryButton from "../Button/PrimaryButton";
import { FaFacebook } from "react-icons/fa";

function HomeAboutUs() {
    return (
        <>
            <div className="px-[80px] py-[100px] font-Yantramanav">
                <div className='container mx-auto '>
                    <div className="py-[10px] flex lg:flex-row flex-col gap-[24px] justify-between items-center">
                        <div className='flex flex-col gap-[20px] '>
                            <h5 className=" text-[20px] text-[#FF7318] uppercase lg:w-[590px] w-full lg:leading-[58px]">About Us</h5>
                            <h1 className="text-[#151515] lg:text-[48px] md:text-[24px] text-[12px] font-bold lg:w-[590px] w-full lg:leading-[58px]">Forging Success From Earth's Depths</h1>
                            <div className="m-[0px] lg:w-[590px] w-full pl-[48px] border-l-[2px] border-[#FF7318]">
                                <p className="text-[16px] font-bold text-[#151515] lg:w-[516px] w-full">
                                    Praesent vel vulputate ligula, mollis facilisis est. In non mauris quis ex placerat iaculis.
                                    Maecenas sed auctor arcu. Suspendisse egestas pellentesque quam sit amet cursus.
                                    Nulla pharetra euismod tellus eu sollicitudin.
                                </p>
                            </div>
                            <div className="m-[0px] lg:w-[590px] w-full pl-[48px]">
                                <p className="text-[16px] text-[#7A7A7A] lg:w-[516px] w-full">
                                    Morbi ut lobortis elit. Suspendisse at blandit orci. Integer eget fermentum lorem.
                                    Quisque rutrum leo nec tincidunt sagittis. Curabitur id elementum sapien, id interdum libero.
                                    Phasellus egestas odio sed sollicitudin tincidunt.
                                    Integer iaculis turpis ac laoreet laoreet. In in posuere massa. Nunc a accumsan leo.
                                </p>
                            </div>
                            <div>
                                <div className="lg:w-[590px] w-full pr-[100px] flex gap-[40px] items-center">
                                    <PrimaryButton
                                        name="Read More"
                                        widthsizemd="fit"
                                        widthsizesm="full" />
                                    <FaFacebook className=' text-black h-20 w-20 border-[2px] rounded-full border-[#FF7318] ' />
                                </div>
                            </div>
                        </div>

                        <div className="relative ">
                            <div className=" absolute md:left-[-120px] left-[-100px] top-[36%] transform-translate-y-1/2 bg-[#FF7318] text-white md:text-[22px] text-[16px] font-bold md:px-[16px] px-[12px] py-[6px] flex  items-center justify-center -rotate-90">
                                10+ Years Of Experience
                            </div>
                            <img src={WorkerImage} alt="Img" className="object-cover lg:w-[550px] w-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeAboutUs;
