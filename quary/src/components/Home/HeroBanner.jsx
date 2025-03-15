import React from "react";
import { HerobannerImg1 } from "../../constants/Data";
import PrimaryButton from "../Button/PrimaryButton";

function HeroBanner() {
    return (
        <>
            <div
                className="flex px-[16px]  inset-0  py-[60px]  text-white   relative w-full"
                style={{
                    backgroundImage: ` url(${HerobannerImg1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col gap-[20px] font-Yantramanav">
                        <h5 className=" text-[20px] text-[#FF7318] uppercase">Excavating Excellence</h5>
                        <h1 className=" lg:text-[72px] md:text-[48px] text-[24px] font-bold lg:w-[634px] w-full lg:leading-[88px]">Your Home for Unearthed Opportunities</h1>
                        <p className="lg:w-[634px] w-full">Suba Mangalya is a trusted matrimony platform that blends tradition with technology to help you find your perfect match through verified profiles, personalized matches, and secure communication.
                            Start your journey to lasting love today!</p>
                        <PrimaryButton
                            name="Get started"
                            widthsizemd="fit"
                            widthsizesm="full"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroBanner;
