import { useStorage } from "@/components/context/StorageProvider";
import Avatar from "@/components/elements/Avatar";
import MainButton from "@/components/elements/MainButton";
import PopupCancelService from "@/components/elements/PopupCancelService";
import PopupDeposit from "@/components/elements/PopupDeposit";
import PopupWithdraw from "@/components/elements/PopupWithdraw";
import SectionAccountCheckFile from "@/components/sections/account/SectionAccountCheckFile";
import SectionAccountCheckInfo from "@/components/sections/account/SectionAccountCheckInfo";
import { useRouter } from "next/router";
import { memo, useMemo, useState } from "react";

function PageAccount({ ...props }) {
	const router = useRouter();

	const { setPopupCancelService, setPopupDeposit, setPopupWithdraw } = useStorage();

	const [isActive, setIsActive] = useState("");

	const formContent = useMemo(() => {
		switch (isActive) {
			case "fill":
				return <SectionAccountCheckInfo />;

			case "file":
				return <SectionAccountCheckFile />;

			default:
				return <></>;
				break;
		}
	}, [isActive]);

	return (
		<>
			<div className={`PageAccount mainPage pt-[20px]`}>
				<img src="/images/bg-service.jpg" alt="" className="absolute left-0 top-0 h-full w-full" />

				<div className="cusContainer relative z-10">
					<div className="mx-[-15px] flex flex-wrap items-stretch">
						<div className="mb-[30px] w-[25%] px-[15px] tl-p:w-full mb:mb-[16px]">
							<div className="bg-main w-full rounded-[10px] p-[2px] shadow-[0px_0px_20px_#7E23AF77] tl-p:hidden">
								<div className="rounded-[8px] bg-[#292536] p-[30px] text-center mb:p-[20px]">
									<div className="mx-auto mb-[25px] w-fit">
										<Avatar large />
									</div>

									<p className="mb-[5px] text-[24px] font-bold">BiMeow</p>
									<p className="font-light">Lorem ipsum dolor</p>
								</div>
							</div>

							<div className="hidden items-center space-x-[20px] tl-p:flex">
								<Avatar />
								<div>
									<p className="mb-[5px] text-[24px] font-bold">BiMeow</p>
									<p className="font-light">Lorem ipsum dolor</p>
								</div>
							</div>
						</div>

						<div className="mb-[30px] w-[75%] px-[15px] tl-p:w-full mb:mb-[16px]">
							<div className="bg-main h-full w-full rounded-[10px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
								<div className="flex h-full flex-col justify-between space-y-[8px] rounded-[8px] bg-[#292536] p-[30px] mb:p-[20px]">
									<h2 className="bg-main !bg-clip-text text-[32px] font-medium text-transparent">
										E-Wallet
									</h2>
									<p className="text-[18px] font-medium">Amount - Số dư</p>
									<div className="flex max-w-[280px] items-center justify-between rounded-[8px] bg-[#14171C] px-[20px] py-[15px] text-[14px] leading-[1] text-white shadow-[0px_0px_40px_#00000033]">
										<p>0</p>
										<p>VNĐ</p>
									</div>
									<p className="text-[#D2D2D2]">
										* Số tiền ở trong ví điện tử sẽ được dùng để thanh toán lệ phí Visa 462 (Số dư
										tối thiểu nên là 11.000.000 VNĐ) và mua các gói dịch vụ
										<br />
										** Thời gian rút tiền sẽ được xử lý chậm nhất trong 24h kể từ khi có lệnh rút
										tiền
									</p>
									<div className="listBtn flex max-w-[280px] items-center justify-between">
										<div onClick={() => setPopupDeposit(true)}>
											<MainButton small>Nạp tiền</MainButton>
										</div>
										<div onClick={() => setPopupWithdraw(true)}>
											<MainButton small>Rút tiền tiền</MainButton>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="mb-[30px] w-[25%] px-[15px] tl-p:w-full mb:mb-[16px]">
							<div className="bg-main w-full rounded-[10px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
								<div className="rounded-[8px] bg-[#292536] p-[30px] mb:p-[20px]">
									<h2 className="bg-main mb-[20px] !bg-clip-text text-[32px] font-medium text-transparent">
										Lịch sử nạp tiền
									</h2>

									<div className="listHistory">
										{[...Array(10)].map((e: any, i: number) => (
											<div
												className="itemHistory flex flex-auto items-center border-b border-[#3A3939] py-[5px] text-[20px] font-medium"
												key={i}
											>
												<p>03/06/2024</p>
												<div className="mx-[3px] mt-[12px] w-full border-b border-dotted"></div>
												<p>15.000.000đ</p>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>

						<div className="mb-[30px] w-[75%] px-[15px] tl-p:w-full mb:mb-[16px]">
							<div className="bg-main h-full w-full rounded-[10px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
								<div className="flex h-full flex-col justify-between rounded-[8px] bg-[#292536] p-[30px] mb:p-[20px]">
									<div className="listInput mx-[-10px] mb-[30px] flex mb:flex-col mb:space-y-[20px]">
										<div className="w-1/2 px-[10px] mb:w-full">
											<div className="bg-main w-full rounded-[50px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
												<input
													className="w-full rounded-[48px] bg-[#292536] px-[30px] py-[20px] leading-[1.2]"
													placeholder="Immi email"
												/>
											</div>
										</div>

										<div className="w-1/2 px-[10px] mb:w-full">
											<div className="bg-main w-full rounded-[50px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
												<input
													className="w-full rounded-[48px] bg-[#292536] px-[30px] py-[20px] leading-[1.2]"
													placeholder="Immi password"
												/>
											</div>
										</div>
									</div>

									<div className="currentRank">
										<h2 className="bg-main mb-[20px] !bg-clip-text text-[32px] font-medium text-transparent">
											Gói hiện tại
										</h2>

										<div className="mb-[30px] rounded-[8px] bg-[#14171C] px-[30px] py-[25px] shadow-[0px_0px_40px_#00000033]">
											<div className="flex justify-between">
												<div className="c1">
													<div className="mb-[10px] flex items-center text-[32px] text-transparent">
														<h2 className="bg-main mr-[50px] !bg-clip-text font-Bebas">
															IMMI GO
														</h2>
														<h3 className="bg-main mb-[5px] !bg-clip-text">Đồng</h3>
													</div>
													<p className="text-[#D2D2D2]">Subsrciption expiry: 20/09/2023</p>
												</div>

												<div className="c2 flex flex-col items-center mb:hidden">
													<button
														className="bg-main mb-[20px] !bg-clip-text text-[24px] text-transparent hover:bg-bottom"
														onClick={() => setPopupCancelService(true)}
													>
														Dừng dịch vụ
													</button>

													<MainButton medium>Gia hạn</MainButton>
												</div>
											</div>
										</div>

										<div className="mb-[30px] hidden items-center space-x-[16px] mb:flex">
											<MainButton medium>Gia hạn</MainButton>
											<button
												className="bg-main !bg-clip-text text-[24px] text-transparent hover:bg-bottom"
												onClick={() => setPopupCancelService(true)}
											>
												Dừng dịch vụ
											</button>
										</div>

										<div className="listBtnFill mx-[-8px] flex mb:flex-col mb:space-y-[20px]">
											<div className="w-1/2 px-[8px] mb:w-full">
												<div
													className="bg-main w-full cursor-pointer rounded-[32px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]"
													onClick={() => setIsActive("fill")}
												>
													<div
														className={`
														rounded-[30px]  p-[16px] text-center text-[24px]
														${isActive == "fill" ? "bg-second" : "bg-[#14171C]"}
														`}
													>
														Check 462 infomation filling
													</div>
												</div>
											</div>
											<div className="w-1/2 px-[8px] mb:w-full">
												<div
													className="bg-main w-full cursor-pointer rounded-[32px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]"
													onClick={() => setIsActive("file")}
												>
													<div
														className={`
														rounded-[30px] bg-[#14171C] p-[16px] text-center text-[24px]
														${isActive == "file" ? "bg-second" : "bg-[#14171C]"}
														`}
													>
														Check your file attachment
													</div>
												</div>
											</div>
										</div>

										{formContent}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<PopupCancelService />
			<PopupDeposit />
			<PopupWithdraw />
		</>
	);
}

export default memo(PageAccount);
