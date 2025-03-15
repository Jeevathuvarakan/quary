import React from 'react';
import { MdCall } from 'react-icons/md';
import { CgMail } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6';
import PrimaryButton from '../Button/PrimaryButton';

const HomeContactUs = () => {
	return (
		//main div
		<>
			<div className="px-[16px] py-[32px] font-Yantramanav ">
				<div className="container mx-auto ">
					<div className="py-[10px] flex lg:flex-row flex-col gap-[24px] justify-between items-center ">
						<div className="flex flex-col md:gap-[20px] gap-[14px] ">
							<h5 className="text-[20px] text-[#FF7318] uppercase w-full ">
								Contact Us
							</h5>
							<h1 className="text-[#151515] capitalize md:text-[48px] text-[24px] font-bold lg:w-[590px] w-full ">
								have anything to ask ? ask us anything as you like
							</h1>
							<p className="text-[16px] text-[#7A7A7A] lg:w-[516px] w-full">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
								ullamcorper mattis, pulvinar dapibus leo.
							</p>
							<div className="flex flex-col gap-[20px]">
								<div className="flex gap-[20px] items-center">
									<div className="">
										<div className="bg-[#FF7318] flex items-center justify-center rounded-full md:w-[65px] w-[55px] md:h-[65px] h-[55px]">
											<MdCall className=" text-white md:text-[36px] text-[30px] " />
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

								<div className="flex gap-[20px] items-center">
									<div className="">
										<div className="bg-[#FF7318] flex items-center justify-center rounded-full md:w-[65px] w-[55px] md:h-[65px] h-[55px]">
											<CgMail className=" text-white md:text-[40px] text-[32px] " />
										</div>
									</div>
									<div>
										<p className="md:text-[20px] text-[18px]  text-justify text-black">E-Mail</p>
										<p className="md:text-[20px] text-[18px] font-semibold  w-full text-justify text-black">
											tjeevathuvarakan@gmail.com
										</p>
									</div>
								</div>

								<div className="flex gap-[20px] items-center">
									<div className="">
										<div className="bg-[#FF7318] flex items-center justify-center rounded-full md:w-[65px] w-[55px] md:h-[65px] h-[55px]">
											<FaLocationDot className=" text-white md:text-[36px] text-[30px]" />
										</div>
									</div>
									<div>
										<p className="md:text-[20px] text-[18px]  w-full text-justify text-black">
											{' '}
											Location{' '}
										</p>
										<p className="md:text-[20px] text-[18px] font-semibold  w-full text-justify text-black">
											{' '}
											Alaveddy Center, Jaffna, Sri Lanka{' '}
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-[20px] p-[12px] lg:max-w-[800px] w-full">
							<h1 className="text-[#151515] capitalize lg:text-[32px] md:text-[24px] text-[20px] font-bold  lg:leading-[58px]">
								Fill the Form Below
							</h1>
							<form className="w-full ">
								<div className="flex flex-col gap-[18px] ">
									<div className="flex md:gap-[20px] gap-[18px] md:flex-row flex-col ">
										<div className="">
											<label className="text-[16px] font-semibold">Name</label>
											<input
												type="text"
												name="name"
												className="w-full h-[50px] p-[15px] text-sm bg-[#F7F7F7] text-[#333]"
												placeholder="Your Name"
												required
											/>
										</div>
										<div className="">
											<label className="text-[16px] font-semibold">Email</label>
											<input
												type="email"
												name="email"
												className="w-full h-[50px]  p-[15px] text-sm bg-[#F7F7F7] text-[#333]"
												placeholder="Your Email"
												required
											/>
										</div>
									</div>
									<div className="">
										<label className="text-[16px] font-semibold">Subject</label>
										<input
											type="subject"
											name="subject"
											className="w-full h-[50px]  p-[15px] text-sm bg-[#F7F7F7] text-[#333]"
											placeholder="Your Subject"
											required
										/>
									</div>
									<div className="">
										<label className="text-[16px] font-semibold">Message</label>
										<textarea
											type="text"
											name="subject"
											className="w-full h-[120px]  p-[15px] text-sm bg-[#F7F7F7] text-[#333]"
											placeholder="Your Message"
											required
										/>
									</div>
									<div className="">
										<PrimaryButton name="SUBMIT NOW" widthsizemd="full" widthsizesm="full" />
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
