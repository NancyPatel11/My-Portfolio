"use client";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
	return (
		<div className="py-20" id="projects">
			<h1 className="heading">
				A glimpse into my
				<span className="text-purple"> recent work</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-20 mt-10">
				{projects.map((item) => (
					<div
						className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 md:w-[30rem] lg:w-[36rem]"
						key={item.id}
					>
						<PinContainer title={item.link} href={item.link}>
							<div className="relative flex items-center justify-center sm:w-96  overflow-hidden h-[20vh] lg:h-[30vh] mb-10 md:w-[30rem] lg:w-[36rem]">
								<div
									className="relative w-full h-full overflow-hidden lg:rounded-3xl"
									style={{ backgroundColor: "#13162D" }}
								></div>
								<Image
									src={item.img}
									alt="project-image"
									className="z-10 rounded-lg"
									style={{ position: "absolute"}}
									width={470}
									height={450}
								/>
							</div>

							<h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
								{item.title}
							</h1>

							<p
								className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
								style={{
									color: "#BEC1DD",
									margin: "1vh 0",
								}}
							>
								{item.des}
							</p>

							<div className="flex items-center justify-between mt-7 mb-3">
								<div className="flex items-center">
									{item.iconLists.map((icon, index) => (
										<div
											key={index}
											className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
											style={{
												transform: `translateX(-${5 * index + 2}px)`,
											}}
										>
											<Image src={icon} alt="icon5" width={50} height={50} className="p-2" />
										</div>
									))}
								</div>

								<div className="flex justify-center items-center">
									<p className="flex lg:text-xl md:text-xs text-sm text-purple">
										Check Live Site
									</p>
									<FaLocationArrow className="ms-3" color="#CBACF9" />
								</div>
							</div>
						</PinContainer>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentProjects;
