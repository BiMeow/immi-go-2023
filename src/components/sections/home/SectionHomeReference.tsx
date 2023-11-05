import { useRouter } from "next/router";
import { memo } from "react";

function SectionHomeReference({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`SectionHomeReference secSpacing`}>
				<div className="cusContainer">
					<div className="mx-[-30px] flex flex-wrap">
						<div className="c1 fadeLeft w-[40%] px-[30px] tl-p:order-2 tl-p:w-full">
							<div className="listReference border-l border-t border-white">
								<div className="itemReference grid grid-cols-2 text-center">
									<p className="border-b border-r border-white p-[5px] font-bold tracking-[5px]">
										Tháng
									</p>
									<p className="border-b border-r border-white p-[5px] font-bold tracking-[5px]">
										Năm
									</p>
								</div>
								{[...Array(20)].map((e: any, i: number) => (
									<div className="itemReference grid grid-cols-2 text-center" key={i}>
										<p className="border-b border-r border-white p-[5px]">07/09</p>
										<p className="border-b border-r border-white p-[5px]">2023</p>
									</div>
								))}
							</div>
						</div>
						<div className="c2 fadeRight relative w-[60%] px-[30px] tl-p:order-1 tl-p:mb-[40px] tl-p:w-full">
							<div className="absolute left-1/2 top-0 w-full -translate-x-[52%] -translate-y-[45%]">
								<img src="/images/home-deco-1.png" alt="" className="" />
							</div>
							<div className="relative z-10">
								<p className="subTitle">Tham khảo</p>
								<h2 className="secTitle mb-[20px]">Lịch sử cổng Immi mở</h2>
								<div
									className={`
                  image bg-main relative w-full rounded-[10px] p-[2px] shadow-[0px_0px_40px_#7E23AF99]
                  `}
								>
									<div className="relative">
										<div className="aspect-[610/370]"></div>
										<div className="absolute left-0 top-0 h-full w-full rounded-[8px] bg-[#292536]">
											<img
												src="/images/home-chart.jpg"
												alt=""
												className="h-full w-full object-contain p-[20px]"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(SectionHomeReference);
