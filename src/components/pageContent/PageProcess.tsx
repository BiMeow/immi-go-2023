import MainButton from "@/components/elements/MainButton";
import gsap, { Elastic } from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";

function PageProcess({ ...props }) {
	const router = useRouter();

	const [change, setChange] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: ".PageProcess",
					start: "top 80%",
				},
			})
				.fromTo(
					".PageProcessTitle",
					{ autoAlpha: 0, opacity: 0, scale: 0.3 },
					{ autoAlpha: 1, opacity: 1, scale: 1, ease: Elastic.easeInOut },
					0
				)
				.fromTo(".PageProcessText", { autoAlpha: 0, opacity: 0, y: -50 }, { autoAlpha: 1, opacity: 1, y: 0 }, 1)
				.fromTo(
					".PageProcessContent",
					{ autoAlpha: 0, opacity: 0, y: 50 },
					{ autoAlpha: 1, opacity: 1, y: 0 },
					1.5
				);
		}, 1500);
	}, []);

	return (
		<>
			<div className={`PageProcess mainPage mb-[40px]`}>
				<img src="/images/bg-service.jpg" alt="" className="absolute left-0 top-0 h-full w-full" />

				<div className="cusContainer relative z-10">
					<div className="heading mx-auto mb-[65px] max-w-[747px] text-center mb:mb-[40px]">
						<h1 className="PageProcessTitle bg-main mb-[8px] !bg-clip-text text-[64px] font-bold uppercase leading-[1.3] text-transparent opacity-0 tl-p:text-[55px] mb:text-[40px]">
							Theo dõi tiến trình
						</h1>
						<p className="PageProcessText opacity-0">
							Bạn có thể xem tình trang hiện tại của hồ sơ tại đây!
						</p>
					</div>

					<div className="PageProcessContent opacity-0">
						{change ? (
							<>
								<div className="status mx-auto mb-[30px] max-w-[600px]">
									<div className="mb-[16px] flex items-center justify-between">
										<div className="flex items-center space-x-[16px] mb:space-x-[8px]">
											<p className="text-[24px] font-bold mb:text-[14px]">Portal Status:</p>
											<p className="text-[20px] mb:text-[14px]">Closing</p>
										</div>
										<div className="flex items-center space-x-[16px] mb:space-x-[8px]">
											<p className="text-[24px] font-bold mb:text-[14px]">Account status:</p>
											<p className="text-[20px] mb:text-[14px]"> Checking the portal</p>
										</div>
									</div>

									<div className="bg-main relative h-[12px] w-full rounded-[10px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
										<div className="relative h-full w-full">
											<div className="absolute left-0 top-0 h-full w-full rounded-[8px] bg-[#292536]"></div>
											<div className="bg-process absolute left-0 top-0 z-10 h-full w-[30%] rounded-[10px]"></div>
										</div>
									</div>
								</div>

								<div className="log mx-auto max-w-[800px]">
									<div className="bg-main w-full rounded-[10px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
										<div className="rounded-[8px] bg-[#292536] p-[35px] leading-[1.2] mb:p-[20px]">
											<p>
												[01/01/2024] 12:30 - Sub Account : Page 4 checking
												<br />
												[01/01/2024] 12:30 - Sub Account: Portal is closing
												<br />
												[01/01/2024] 12:30 - Sub Account: Page 4 checking
												<br />
												[01/01/2024] 12:30 - Sub Account Portal is open !!!
												<br />
												[01/01/2024] 12:30 - Activate auto-filling form successfully
												<br />
												[01/01/2024] 12:30 - Main Account: Skip 4 page
												<br />
												[01/01/2024] 12:30 - Main Account: Page 5 filling successfully
												<br />
												[01/01/2024] 12:30 - Main Account: Page 6 filling successfully
												<br />
												[01/01/2024] 12:30 - Main Account: Page 7 filling successfully
												<br />
												[01/01/2024] 12:30 - Main Account: Page 8 filling successfully
												<br />
												[01/01/2024] 12:30 - Main Account: Page 9 filling successfully
												<br />
												[01/01/2024] 12:30 - Main Account: Page 10 filling successfully
												<br />
												[01/01/2024] 12:30 - Main Account: Page 11 filling successfully
												<br />
												[01/01/2024] 12:30 - Main Account: Page 12 filling successfully
											</p>
										</div>
									</div>
								</div>
							</>
						) : (
							<>
								<h4 className="mb-[20px] mt-[95px] text-center text-[24px] font-bold">
									Bạn chưa mua gói dịch vụ nào !{" "}
								</h4>
								<div className="mx-auto w-fit" onClick={() => setChange(true)}>
									<MainButton showDeco decoBottom>
										Mua ngay
									</MainButton>
								</div>
							</>
						)}
					</div>
				</div>
			</div>

			<style jsx global>
				{`
					.PageProcess {
						.bg-process {
							background: linear-gradient(
								90deg,
								rgba(126, 35, 175, 1) 0%,
								rgba(232, 84, 188, 1) 50%,
								rgba(249, 131, 191, 1) 100%
							);
						}
					}
				`}
			</style>
		</>
	);
}

export default memo(PageProcess);
