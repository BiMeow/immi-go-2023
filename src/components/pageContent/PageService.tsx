import { useStorage } from "@/components/context/StorageProvider";
import MainButton from "@/components/elements/MainButton";
import PopupService from "@/components/elements/PopupService";
import gsap, { Bounce, Elastic } from "gsap";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import { useWindowSize } from "usehooks-ts";

function PageService({ ...props }) {
	const router = useRouter();

	const { width } = useWindowSize();

	const { setPopupService } = useStorage();

	useEffect(() => {
		setTimeout(() => {
			gsap.timeline({
				scrollTrigger: {
					trigger: ".PageService",
					start: "top 80%",
				},
			})
				.fromTo(
					".PageServiceTitle",
					{ autoAlpha: 0, opacity: 0, scale: 0.3 },
					{ autoAlpha: 1, opacity: 1, scale: 1, ease: Elastic.easeInOut },
					0
				)
				.fromTo(".PageServiceText", { autoAlpha: 0, opacity: 0, y: -50 }, { autoAlpha: 1, opacity: 1, y: 0 }, 1)
				.fromTo(
					".listService .gold",
					{ autoAlpha: 0, opacity: 0, scale: 0.3 },
					{ autoAlpha: 1, opacity: 1, scale: 1, ease: Bounce.easeInOut },
					2
				)
				.fromTo(
					".listService .bronze",
					{ autoAlpha: 0, opacity: 0, x: -50 },
					{ autoAlpha: 1, opacity: 1, x: 0 },
					1.3
				)
				.fromTo(
					".listService .silver",
					{ autoAlpha: 0, opacity: 0, x: 50 },
					{ autoAlpha: 1, opacity: 1, x: 0 },
					1.6
				);
		}, 1500);
	}, []);

	return (
		<>
			<div className={`PageService mainPage mb-[20px]`}>
				<img src="/images/bg-service.jpg" alt="" className="absolute left-0 top-0 h-full w-full" />
				<div className="cusContainer relative z-10">
					<div className="heading mx-auto mb-[65px] max-w-[747px] text-center mb:mb-[40px]">
						<h1 className="PageServiceTitle bg-main mb-[8px] !bg-clip-text text-[64px] font-bold uppercase leading-[1.3] text-transparent opacity-0 tl-p:text-[55px] mb:text-[40px]">
							Gói dịch vụ
						</h1>
						<p className="PageServiceText text-[20px] opacity-0 tl-p:text-[18px] mb:text-[16px]">
							Khám phá gói giá của Immi Go: từ ngắn hạn đến dài hạn, chúng tôi đề xuất giá ưu đãi càng
							lâu, càng tiết kiệm.
							<br />
							Đầu tư một lần, tận hưởng lợi ích kéo dài và đưa bạn gần hơn với ước mơ Visa.
						</p>
					</div>
				</div>

				<div className="cusContainer tl-p:overflow-auto tl-p:overflow-y-hidden tl-p:px-0">
					<div className="listService mx-[-15px] flex items-center pb-[40px] tl-p:mx-0 tl-p:w-[1200px] mb:w-[750px]">
						<div className="bronze relative w-[33%] px-[15px] tl-p:w-[400px] mb:w-[250px] mb:px-[10px]">
							<div className="bg-main w-full rounded-[10px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
								<div className="rounded-[8px] bg-[#292536] px-[30px] py-[50px] mb:px-[20px] mb:py-[30px]">
									<h3 className="mb-[50px] text-[48px] font-bold mb:mb-[30px] mb:text-[28px]">
										Đồng
									</h3>

									<div className="mb-[20px] flex justify-between uppercase">
										<p className="text-[24px] mb:text-[14px]">Thời gian</p>
										<p className="text-[24px] font-bold mb:text-[14px]">1 Ngày</p>
									</div>

									<div className="mb-[60px] flex justify-between uppercase mb:mb-[30px]">
										<p className="text-[24px] mb:text-[14px]">Phí dịch vụ</p>
										<p className="text-[24px] font-bold mb:text-[14px]">20.000 vnđ</p>
									</div>

									<p className="text-center text-[32px] mb:text-[20px]">
										<strong className="text-[96px] leading-[1] mb:text-[55px]">1</strong> Ngày
									</p>
								</div>
							</div>

							<div
								className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
								onClick={() => setPopupService(true)}
							>
								<MainButton showDeco={width > 992} decoBottom>
									Bắt đầu
								</MainButton>
							</div>
						</div>

						<div className="gold relative w-[34%] px-[15px] tl-p:w-[400px] mb:w-[250px] mb:px-[10px]">
							<div className="bg-main w-full rounded-[10px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
								<div className="bgGold rounded-[8px] bg-[#292536] px-[35px] py-[60px] mb:px-[20px] mb:py-[35px]">
									<div className="mb-[25px] ml-[7px] h-[13px] w-[75px] rounded-[30px] bg-white mb:mb-[15px] mb:w-[45px]"></div>
									<h3 className="mb-[50px] text-[48px] font-bold mb:mb-[30px] mb:text-[28px]">
										Vàng <span className="text-[30px] mb:text-[18px]">(25% discount)</span>
									</h3>

									<div className="mb-[20px] flex justify-between uppercase">
										<p className="text-[24px] mb:text-[14px]">Thời gian</p>
										<p className="text-[24px] font-bold mb:text-[14px]">30 Ngày</p>
									</div>

									<div className="mb-[60px] flex justify-between uppercase mb:mb-[30px]">
										<p className="text-[24px] mb:text-[14px]">Phí dịch vụ</p>
										<p className="text-[24px] font-bold mb:text-[14px]">350.000 vnđ</p>
									</div>

									<p className="mb-[30px] text-center text-[32px] mb:mb-[20px] mb:text-[20px]">
										<strong className="text-[96px] leading-[1] mb:text-[55px]">30</strong> Ngày
									</p>

									<div className="mx-auto w-fit" onClick={() => setPopupService(true)}>
										<MainButton showDeco={width > 992} decoBottom>
											Bắt đầu
										</MainButton>
									</div>
								</div>
							</div>
						</div>

						<div className="silver relative w-[33%] px-[15px] tl-p:w-[400px] mb:w-[250px] mb:px-[10px]">
							<div className="bg-main w-full rounded-[10px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
								<div className="rounded-[8px] bg-[#292536] px-[30px] py-[50px] mb:px-[20px] mb:py-[30px]">
									<h3 className="mb-[50px] text-[48px] font-bold mb:mb-[30px] mb:text-[28px]">
										Bạc <span className="text-[30px] mb:text-[18px]">(10% discount)</span>
									</h3>

									<div className="mb-[20px] flex justify-between uppercase">
										<p className="text-[24px] mb:text-[14px]">Thời gian</p>
										<p className="text-[24px] font-bold mb:text-[14px]">15 Ngày</p>
									</div>

									<div className="mb-[60px] flex justify-between uppercase mb:mb-[30px]">
										<p className="text-[24px] mb:text-[14px]">Phí dịch vụ</p>
										<p className="text-[24px] font-bold mb:text-[14px]">270.000 vnđ</p>
									</div>

									<p className="text-center text-[32px] mb:text-[20px]">
										<strong className="text-[96px] leading-[1] mb:text-[55px]">15</strong> Ngày
									</p>
								</div>
							</div>

							<div
								className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
								onClick={() => setPopupService(true)}
							>
								<MainButton showDeco={width > 992} decoBottom>
									Bắt đầu
								</MainButton>
							</div>
						</div>
					</div>
				</div>
			</div>

			<PopupService />

			<style jsx global>
				{`
					.PageService {
						.bgGold {
							background: linear-gradient(
								180deg,
								rgba(249, 131, 191, 1) 0%,
								rgba(232, 84, 188, 1) 50%,
								rgba(126, 35, 175, 1) 100%
							);
						}
					}
				`}
			</style>
		</>
	);
}

export default memo(PageService);
