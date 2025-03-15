import React from "react";
import { MdCall } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";

const HomeContactUs = () => {
  return (
    //main div
    <>
      <div className="px-[16px] py-[32px] font-Yantramanav">
        <div className="container mx-auto ">
          <div className="py-[10px] flex lg:flex-row flex-col gap-[24px] justify-between items-center">
            <div className="flex flex-col gap-[20px] ">
              <h5 className=" text-[20px] text-[#FF7318] uppercase  w-full lg:leading-[58px]">
                Contact Us
              </h5>
              <h1 className="text-[#151515] capitalize lg:text-[48px] md:text-[24px] text-[12px] font-bold lg:w-[590px] w-full lg:leading-[58px]">
                have anything to ask ? ask us anything as you like
              </h1>
              <p className="text-[16px] text-[#7A7A7A] lg:w-[516px] w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="flex flex-col gap-[20px]">
                <div className="flex md:flex-row flex-col gap-[20px]">
                  <div className="">
                    <div className="bg-[#FF7318] flex items-center justify-center rounded-full w-[65px] h-[65px]">
                      <MdCall className=" text-white text-[36px] " />
                    </div>
                  </div>
                  <div>
                    <p className="md:text-[20px] text-[18px]  w-full text-justify text-black">
                      Phone Number
                    </p>
                    <p className="md:text-[20px] text-[18px] font-semibold  w-full text-justify text-black">
                      077-123-4567
                    </p>
                  </div>
                </div>

                <div className="flex md:flex-row flex-col gap-[20px]">
                  <div className="">
                    <div className="bg-[#FF7318] flex items-center justify-center rounded-full w-[65px] h-[65px]">
                      <CgMail className=" text-white text-[40px] " />
                    </div>
                  </div>
                  <div>
                    <p className="md:text-[20px] text-[18px]  text-justify text-black">
                      E-Mail
                    </p>
                    <p className="md:text-[20px] text-[18px] font-semibold  w-full text-justify text-black">
                      tjeevathuvarakan@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex md:flex-row flex-col gap-[20px]">
                  <div className="">
                    <div className="bg-[#FF7318] flex items-center justify-center rounded-full w-[65px] h-[65px]">
                      <FaLocationDot className=" text-white text-[36px] " />
                    </div>
                  </div>
                  <div>
                    <p className="md:text-[20px] text-[18px]  w-full text-justify text-black">
                      {" "}
                      Location{" "}
                    </p>
                    <p className="md:text-[20px] text-[18px] font-semibold  w-full text-justify text-black">
                      {" "}
                      Alaveddy Center, Jaffna, Sri Lanka{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[20px] ">
              <h1 className="text-[#151515] capitalize lg:text-[48px] md:text-[24px] text-[12px] font-bold lg:w-[590px] w-full lg:leading-[58px]">
                have anything to ask ? ask us anything as you like
              </h1>
              <form>
                <div className="flex ">
                  <div className="mt-[20px]">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full h-[50px] bg-transparent border-2 border-solid border-[#ddd] outline-none p-[15px] text-[16px] text-[#333] mt-[8px]"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mt-[20px]">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full h-[50px] bg-transparent border-2 border-solid border-[#ddd] outline-none p-[15px] text-[16px] text-[#333] mt-[8px]"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContactUs;
