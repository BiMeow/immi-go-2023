import { IconFb, IconIns, IconLinked, IconTag, IconTwitter, IconYt } from "@/components/elements/Icons";
import MainButton from "@/components/elements/MainButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useState } from "react";

function PageBlogDetail({ ...props }) {
	const router = useRouter();

	const [change, setChange] = useState(false);

	return (
		<>
			<div className={`PageBlogDetail mainPage`}>
				<img src="/images/bg-service.jpg" alt="" className="absolute left-0 top-0 h-full w-full" />

				<div className="cusContainer relative z-10">
					<div className="heading mx-auto mb-[40px] max-w-[915px] text-center">
						<h2 className="mb-[20px] text-[48px] font-bold leading-[1.3] tl-p:text-[40px] mb:text-[32px] mb:font-medium">
							Keep up the spirit of the desire to travel around the world
						</h2>
						<p className="text-[28px] tl-p:text-[20px] mb:text-[16px]">
							We’re an online magazine dedicated to covering the best in international product design. We
							started as a little blog back in 2002 covering student work and over time
						</p>
					</div>

					<div className="mb-[20px] flex flex-wrap items-center justify-between">
						<div className="author flex items-center space-x-[10px] mb:mb-[20px]">
							<div className="relative h-[48px] w-[48px] overflow-hidden rounded-full">
								<img src="/images/avatar.jpg" alt="" className="absFull" />
							</div>
							<div>
								<p className="text-[18px] font-medium">BiMeow</p>
								<p>May 20, 2021 · 6 min read</p>
							</div>
						</div>

						<div className="listShare flex items-center space-x-[16px]">
							{[<IconFb />, <IconTwitter />, <IconIns />, <IconLinked />, <IconYt />].map(
								(e: any, i: number) => (
									<div className="itemShare group">
										<div className="bg-main w-full cursor-pointer rounded-[8px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
											<div className=" flex h-[36px] w-[36px] items-center justify-center rounded-[6px] bg-[#14171C] fill-white duration-700 group-hover:fill-purple">
												{e}
											</div>
										</div>
									</div>
								)
							)}
						</div>
					</div>

					<div className="contentDetail mb-[65px]">
						<img src="/images/blog-detail.jpg" alt="" className="mb-[20px] w-full rounded-[8px]" />

						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel officiis ipsum placeat
							itaque neque dolorem modi perspiciatis dolor distinctio veritatis sapiente, minima corrupti
							dolores necessitatibus suscipit accusantium dignissimos culpa cumque. It is a long
							established fact that a reader will be distracted by the readable content of a page when
							looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters. We want everything to look good out of the box. Really just the
							first reason, that's the whole point of the plugin. Here's a third pretend reason though a
							list with three items looks more realistic than a list with two items.
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel officiis ipsum placeat
							itaque neque dolorem modi perspiciatis dolor distinctio veritatis sapiente, minima corrupti
							dolores necessitatibus suscipit accusantium dignissimos culpa cumque. It is a long
							established fact that a reader will be distracted by the readable content of a page when
							looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters. We want everything to look good out of the box. Really just the
							first reason, that's the whole point of the plugin. Here's a third pretend reason though a
							list with three items looks more realistic than a list with two items.
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel officiis ipsum placeat
							itaque neque dolorem modi perspiciatis dolor distinctio veritatis sapiente, minima corrupti
							dolores necessitatibus suscipit accusantium dignissimos culpa cumque. It is a long
							established fact that a reader will be distracted by the readable content of a page when
							looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters. We want everything to look good out of the box. Really just the
							first reason, that's the whole point of the plugin. Here's a third pretend reason though a
							list with three items looks more realistic than a list with two items.
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel officiis ipsum placeat
							itaque neque dolorem modi perspiciatis dolor distinctio veritatis sapiente, minima corrupti
							dolores necessitatibus suscipit accusantium dignissimos culpa cumque. It is a long
							established fact that a reader will be distracted by the readable content of a page when
							looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters. We want everything to look good out of the box. Really just the
							first reason, that's the whole point of the plugin. Here's a third pretend reason though a
							list with three items looks more realistic than a list with two items.
						</p>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vel officiis ipsum placeat
							itaque neque dolorem modi perspiciatis dolor distinctio veritatis sapiente, minima corrupti
							dolores necessitatibus suscipit accusantium dignissimos culpa cumque. It is a long
							established fact that a reader will be distracted by the readable content of a page when
							looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters. We want everything to look good out of the box. Really just the
							first reason, that's the whole point of the plugin. Here's a third pretend reason though a
							list with three items looks more realistic than a list with two items.
						</p>
					</div>

					<div className="listRelated mx-[-10px] flex flex-wrap">
						{[...Array(3)].map((e: any, i: number) => (
							<div
								className={`
                                itemRelated group relative mb-[40px] w-1/3 px-[10px]
								mb:w-full
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

export default memo(PageBlogDetail);
