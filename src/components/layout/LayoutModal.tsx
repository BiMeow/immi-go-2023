import { useMain } from "@/components/context/MainProvider";
import { IconClose } from "@/components/elements/Icons";
import { useRouter } from "next/router";
import { memo } from "react";

function CusPopup({ children, ...props }: any) {
	const router = useRouter();

	const { closePopup } = useMain();

	return (
		<>
			<div className={`CusPopup w-full font-Barlow text-white`}>
				<div className="bg-main w-full rounded-[10px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
					<div className="relative rounded-[8px] bg-[#292536] px-[30px] py-[60px] mb:px-[15px] mb:py-[40px]">
						<img
							src="/images/logo-icon.png"
							alt=""
							className="absolute left-[30px] top-[30px] max-w-[45px] mb:left-[15px] mb:top-[15px]"
						/>
						{/* <div
							className="absolute right-[30px] top-[30px] cursor-pointer fill-white duration-700 hover:fill-purple"
							onClick={closePopup}
						>
							<IconClose />
						</div> */}
						{children}
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(CusPopup);
