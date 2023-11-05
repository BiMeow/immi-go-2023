import MainButton from "@/components/elements/MainButton";
import gsap from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

let listProcess = [
	{
		title: "Đăng ký & thanh toán",
		description:
			"Đăng ký bằng tài khoản Immimi Account của bạn, thực hiện thanh toán và chuẩn bị cho quy trình xin visa.",
		image: "/images/home-process-1.png",
	},
	{
		title: "Điền thông tin cá nhân",
		description:
			"Cung cấp thông tin cá nhân chính xác để đảm bảo quy trình xin visa diễn ra suôn sẻ và nhanh chóng.",
		image: "/images/home-process-2.png",
	},
	{
		title: "Theo dõi trạng thái visa",
		description:
			"Hệ thống tự động theo dõi và cập nhật thông tin visa 462 cho đến khâu thanh toán, giúp bạn không bỏ lỡ bất kỳ cơ hội nào.",
		image: "/images/home-process-3.png",
	},
];

function SectionHomeProcess({ ...props }) {
	const router = useRouter();

	const [activeProcess, setActiveProcess] = useState<any>(-1);

	const onEnter = (i: any) => {
		setActiveProcess(i);
	};

	useEffect(() => {
		setTimeout(() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: ".SectionHomeProcess",
					start: "45% bottom",
				},
			}).fromTo(".SectionHomeProcess", { opacity: 0, autoAlpha: 0 }, { opacity: 1, autoAlpha: 1 });

			// let listItem = gsap.utils.toArray(".SectionHomeProcess .itemProcess");
			// if (listItem) {
			// 	listItem.forEach((l: any, i: any) => {
			// 		gsap.timeline({
			// 			scrollTrigger: {
			// 				trigger: l,
			// 				start: "20% center",
			// 				end: "80% 35%",
			// 				onEnterBack: () => onEnter(i),
			// 				onEnter: () => onEnter(i),
			// 				onLeave: () => onEnter(-1),
			// 				onLeaveBack: () => onEnter(-1),
			// 				markers: true,
			// 			},
			// 		});
			// 		// .fromTo(l, { autoAlpha: 0, opacity: 0 }, { autoAlpha: 1, opacity: 1 });
			// 	});
			// }
			gsap.timeline({
				scrollTrigger: {
					trigger: ".itemProcess.item0",
					start: "20% center",
					end: "80% 35%",
					onEnterBack: () => onEnter(0),
					onEnter: () => onEnter(0),
					onLeave: () => onEnter(-1),
					onLeaveBack: () => onEnter(-1),
					markers: true,
				},
			});

			gsap.timeline({
				scrollTrigger: {
					trigger: ".itemProcess.item1",
					start: "20% center",
					end: "80% 35%",
					onEnterBack: () => onEnter(1),
					onEnter: () => onEnter(1),
					onLeave: () => onEnter(-1),
					onLeaveBack: () => onEnter(-1),
					markers: true,
				},
			});

			gsap.timeline({
				scrollTrigger: {
					trigger: ".itemProcess.item2",
					start: "30% center",
					end: "100% 35%",
					onEnterBack: () => onEnter(2),
					onEnter: () => onEnter(2),
					onLeave: () => onEnter(-1),
					onLeaveBack: () => onEnter(-1),
					markers: true,
				},
			});

			gsap.timeline({
				scrollTrigger: {
					trigger: ".SectionHomeProcess .listProcess .line",
					start: "top 50%",
					end: "bottom 30%",
					scrub: 1,
				},
			}).fromTo(".SectionHomeProcess .listProcess .lineActive", { height: 0 }, { height: "100%" });
		}, 1500);
	}, []);

	return (
		<>
			<div className={`SectionHomeProcess secSpacing`}>
				<div className="cusContainer mx-auto max-w-[800px]">
					<p className="subTitle">QUY TRÌNH</p>
					<h2 className="secTitle mb-[75px]">Tham gia như thế nào?</h2>

					<div className="listProcess relative mb-[55px]">
						<div className="line absolute left-1/2 top-0 h-[93%] w-[1px] -translate-x-1/2 -translate-y-[7%] bg-[#0E0E0E] mb:hidden"></div>
						<div className="line absolute left-1/2 top-0 h-[93%] w-[1px] -translate-x-1/2 -translate-y-[7%] mb:hidden">
							<div className="lineActive h-full w-full bg-purple"></div>
						</div>

						<div className="list space-y-[120px] tl-p:space-y-[90px] mb:space-y-[55px]">
							{listProcess.map((e: any, i: number) => (
								<div
									className={`
								itemProcess item${i} relative z-10 flex flex-auto items-center justify-between duration-700
								mb:flex-col
								${activeProcess == i ? "grayscale-0 " : "opacity-40 grayscale"}
								`}
									key={i}
								>
									<div
										className={`
									image bg-main relative w-[39%] rounded-[10px] p-[2px] shadow-[0px_0px_40px_#7E23AF99]
									mb:order-3 mb:w-full
									${i % 2 == 0 ? "order-1" : "order-3"}
									`}
									>
										<div className="relative">
											<div className="aspect-[310/175]"></div>
											<div className="absolute left-0 top-0 h-full w-full rounded-[8px] bg-[#14171C]">
												<img
													src={e.image}
													alt=""
													className="h-full w-full object-contain p-[20px]"
												/>
											</div>
										</div>
									</div>

									<div className="number bg-main order-2 mb-[20px] h-[44px] w-[44px] rounded-full p-[2px] shadow-[0px_0px_40px_#7E23AF] mb:order-1">
										<div className="relative h-full w-full">
											<div className="bg-second absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full">
												<p className="mt-[-3px] text-[24px] font-bold leading-[1]">{i + 1}</p>
											</div>
										</div>
									</div>

									<div
										className={`
									content w-[39%]
									mb:order-2 mb:mb-[10px] mb:w-full
									${i % 2 == 0 ? "order-3" : "order-1"}
									`}
									>
										<h3 className="mb-[10px] text-[24px] font-bold mb:text-center">{e.title}</h3>
										<p className="font-light mb:text-center">{e.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="fadeUp flex justify-center">
						<MainButton>Xem hướng dẫn chi tiết</MainButton>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionHomeProcess);
