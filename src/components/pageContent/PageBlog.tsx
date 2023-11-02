import { IconTag } from "@/components/elements/Icons";
import MainButton from "@/components/elements/MainButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useState } from "react";

function PageBlog({ ...props }) {
	const router = useRouter();

	const [change, setChange] = useState(false);

	return (
		<>
			<div className={`PageBlog mainPage`}>
				<img src="/images/bg-service.jpg" alt="" className="absolute left-0 top-0 h-full w-full" />

				<div className="cusContainer relative z-10">
					<div className="heading mx-auto mb-[80px] max-w-[747px] text-center">
						<h2 className="bg-main mb-[8px] !bg-clip-text text-[64px] font-bold uppercase leading-[1.3] text-transparent">
							blogs
						</h2>
					</div>

					<div className="listBlog mx-[-10px] flex flex-wrap">
						{[...Array(6)].map((e: any, i: number) => (
							<div
								className={`
                                itemBlog group relative mb-[40px] w-1/3 px-[10px] ${
									(i + 2) % 3 == 0 ? "mt-[-40px]" : ""
								}
                                `}
								key={i}
							>
								<div className="bg-main w-full cursor-pointer rounded-[12px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
									<div className="space-y-[10px] rounded-[10px] bg-[#14171C] px-[20px] py-[16px]">
										<div className="image relative overflow-hidden rounded-[10px]">
											<div className="aspect-[350/200]"></div>
											<img
												src="/images/blog-1.jpg"
												alt=""
												className="absFull duration-700 group-hover:scale-110"
											/>
										</div>

										<div className="tag bg-second flex w-fit items-center space-x-[5px] rounded-[30px] p-[8px]">
											<div className="fill-white">
												<IconTag />
											</div>
											<p className="font-Patrick text-[15px]">Travel</p>
										</div>

										<h3 className="text-[26px] font-medium duration-700 group-hover:text-purple">
											Keep up the spirit of the desire to travel around the world
										</h3>

										<p className="text-[15px]">
											We’re an online magazine dedicated to covering the best in international
											product design. We started as a little blog back in 2002 covering student
											work and over time
										</p>
									</div>
								</div>

								<Link href={"/blog/bimeow"} className="absFull" />
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(PageBlog);
