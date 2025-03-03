import React from "react";
import { HerobannerImg } from "../../constants/Data";
import PrimaryButton from "../Button/PrimaryButton";

function HomeAboutUs() {
    return (
        <>
            <div className="px-[112px] flex justify-between ">
                <div className='flex flex-col gap-[20px] font-Yantramanav py-16 lg:w-[638px] pr-[48px] w-full'>
                    <h5 className=" text-[20px] text-[#FF7318] uppercase lg:w-[590px] w-full lg:leading-[58px]">About Us</h5>
                    <h1 className="text-[#151515] lg:text-[48px] md:text-[24px] text-[12px] font-bold lg:w-[590px] w-full lg:leading-[58px]">Forging Sucess From Earth's Depths </h1>
                    <div className="m-[0px] [0px] [14.4px] lg:w-[590px] w-full pl-[48px]">
                        <p className=" text-[16px] font-bold text-[#151515]  lg:w-[516px] w-full">Praesent vel vulputate ligula, mollis facilisis est. In non mauris quis ex placerat iaculis. Maecenas sed auctor arcu. Suspendisse egestas pellentesque quam sit amet cursus.
                            Nulla pharetra euismod tellus eu sollicitudin.</p>
                    </div>
                    <div className="m-[0px] [0px] [14.4px] lg:w-[590px] w-full pl-[48px]">
                        <p className=" text-[16px] text-[#7A7A7A]  lg:w-[516px] w-full">Morbi ut lobortis elit. Suspendisse at blandit orci. Integer eget fermentum lorem. Quisque rutrum leo nec tincidunt sagittis. Curabitur id elementum sapien, id interdum libero. Phasellus egestas odio sed sollicitudin tincidunt.
                            Integer iaculis turpis ac laoreet laoreet. In in posuere massa. Nunc a accumsan leo.</p>
                    </div>
                    <div className="m-[0px] [0px] [14.4px] lg:w-[590px] w-full pl-[48px]">
                        <PrimaryButton
                            name="Read More"
                            widthsizemd="fit"
                            widthsizesm="full"
                        />
                    </div>


                </div>
                <div
                    className="flex gap-[60px] px-[16px]  inset-0  py-[100px]  text-white  lg:w-[634px] w-full lg:leading-[88px] items-left"
                    style={{
                        backgroundImage: ` url(${HerobannerImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",


                    }}
                >

                </div>
            </div>
        </>
    );
}

export default HomeAboutUs;
