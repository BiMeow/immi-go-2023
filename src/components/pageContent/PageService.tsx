import { useStorage } from "@/components/context/StorageProvider";
import MainButton from "@/components/elements/MainButton";
import PopupService from "@/components/elements/PopupService";
import LayoutModal from "@/components/layout/LayoutModal";
import { useRouter } from "next/router";
import { memo } from "react";

function PageService({ ...props }) {
	const router = useRouter();

	const { setPopupService } = useStorage();

	return (
		<>
			<div className={`PageService mainPage`}>
				<img src="/images/bg-service.jpg" alt="" className="absolute left-0 top-0 h-full w-full" />
				<div className="cusContainer relative z-10">
					<div className="heading mx-auto mb-[65px] max-w-[747px] text-center">
						<h1 className="bg-main mb-[8px] !bg-clip-text text-[64px] font-bold uppercase leading-[1.3] text-transparent">
							Gói dịch vụ
						</h1>
						<p className="text-[20px]">
							Khám phá gói giá của Immi Go: từ ngắn hạn đến dài hạn, chúng tôi đề xuất giá ưu đãi càng
							lâu, càng tiết kiệm.
							<br />
							Đầu tư một lần, tận hưởng lợi ích kéo dài và đưa bạn gần hơn với ước mơ Visa.
						</p>
					</div>
					<div className="listService mx-[-15px] flex items-center">
						<div className="bronze relative w-[33%] px-[15px]">
							<div className="bg-main w-full rounded-[10px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
								<div className="rounded-[8px] bg-[#292536] px-[30px] py-[50px]">
									<h3 className="mb-[50px] text-[48px] font-bold">Đồng</h3>

									<div className="mb-[20px] flex justify-between uppercase">
										<p className="text-[24px]">Thời gian</p>
										<p className="text-[24px] font-bold">1 Ngày</p>
									</div>

									<div className="mb-[60px] flex justify-between uppercase">
										<p className="text-[24px]">Phí dịch vụ</p>
										<p className="text-[24px] font-bold">20.000 vnđ</p>
									</div>

									<p className="text-center text-[32px]">
										<strong className="text-[96px] leading-[1]">1</strong> Ngày
									</p>
								</div>
							</div>

							<div
								className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
								onClick={() => setPopupService(true)}
							>
								<MainButton showDeco decoBottom>
									Bắt đầu
								</MainButton>
							</div>
						</div>

						<div className="gold relative w-[34%] px-[15px]">
							<div className="bg-main w-full rounded-[10px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
								<div className="bgGold rounded-[8px] bg-[#292536] px-[35px] py-[60px]">
									<div className="mb-[25px] ml-[7px] h-[13px] w-[75px] rounded-[30px] bg-white"></div>
									<h3 className="mb-[50px] text-[48px] font-bold">
										Vàng <span className="text-[30px]">(25% discount)</span>
									</h3>

									<div className="mb-[20px] flex justify-between uppercase">
										<p className="text-[24px]">Thời gian</p>
										<p className="text-[24px] font-bold">30 Ngày</p>
									</div>

									<div className="mb-[60px] flex justify-between uppercase">
										<p className="text-[24px]">Phí dịch vụ</p>
										<p className="text-[24px] font-bold">350.000 vnđ</p>
									</div>

									<p className="text-center text-[32px]">
										<strong className="text-[96px] leading-[1]">30</strong> Ngày
									</p>
								</div>
							</div>

							<div
								className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
								onClick={() => setPopupService(true)}
							>
								<MainButton showDeco decoBottom>
									Bắt đầu
								</MainButton>
							</div>
						</div>

						<div className="silver relative w-[33%] px-[15px]">
							<div className="bg-main w-full rounded-[10px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
								<div className="rounded-[8px] bg-[#292536] px-[30px] py-[50px]">
									<h3 className="mb-[50px] text-[48px] font-bold">
										Bạc <span className="text-[30px]">(10% discount)</span>
									</h3>

									<div className="mb-[20px] flex justify-between uppercase">
										<p className="text-[24px]">Thời gian</p>
										<p className="text-[24px] font-bold">15 Ngày</p>
									</div>

									<div className="mb-[60px] flex justify-between uppercase">
										<p className="text-[24px]">Phí dịch vụ</p>
										<p className="text-[24px] font-bold">270.000 vnđ</p>
									</div>

									<p className="text-center text-[32px]">
										<strong className="text-[96px] leading-[1]">15</strong> Ngày
									</p>
								</div>
							</div>

							<div
								className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
								onClick={() => setPopupService(true)}
							>
								<MainButton showDeco decoBottom>
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
