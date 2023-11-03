import { useRouter } from "next/router";
import { memo, useState } from "react";
import { Checkbox, Modal } from "antd";
import { useStorage } from "@/components/context/StorageProvider";
import LayoutModal from "@/components/layout/LayoutModal";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import MainButton from "@/components/elements/MainButton";
import Link from "next/link";
import { useMain } from "@/components/context/MainProvider";
import PopupCloseIcon from "@/components/elements/PopupCloseIcon";

function PopupService({ ...props }) {
	const router = useRouter();

	const { popupService } = useStorage();
	const { closePopup } = useMain();

	const [success, setSuccess] = useState(false);

	const onChange = (e: CheckboxChangeEvent) => {
		console.log(`checked = ${e.target.checked}`);
	};

	return (
		<>
			<Modal
				className="cusPopup popupService"
				open={popupService}
				onCancel={() => closePopup()}
				title={false}
				closeIcon={<PopupCloseIcon />}
				footer={false}
				width={800}
				centered
			>
				<LayoutModal>
					<h3 className="bg-main mb-[20px] !bg-clip-text text-center text-[32px] font-bold uppercase leading-[1.3] text-transparent">
						Dịch vụ
					</h3>
					{!success ? (
						<div className="confirm">
							<div className="mb-[20px] flex items-center">
								<p className="mr-[20px] w-[115px] text-[24px]">Số dư của bạn</p>
								<div className="w-[calc(100%-135px)] rounded-[8px] bg-[#686262] px-[15px] py-[3px] pr-[4px]">
									<div className="flex items-center justify-between text-[24px] leading-[1]">
										<p className="text-black">15.000.000</p>
										<p className="rounded-[6px] bg-[#C1C1C1] px-[5px]">VNĐ</p>
									</div>
								</div>
							</div>
							<div className="mb-[20px] flex items-center">
								<p className="mr-[20px] w-[115px] text-[24px]">Số dư của bạn</p>
								<div className="w-[calc(100%-135px)] rounded-[8px] bg-[#686262] px-[15px] py-[3px] pr-[4px]">
									<div className="flex items-center justify-between text-[24px] leading-[1]">
										<p className="text-black">15.000.000</p>
										<p className="rounded-[6px] bg-[#C1C1C1] px-[5px]">VNĐ</p>
									</div>
								</div>
							</div>
							<div className="mb-[30px] flex items-center">
								<p className="mr-[20px] w-[115px] text-[24px]">Số dư của bạn</p>
								<div className="w-[calc(100%-135px)] rounded-[8px] bg-[#686262] px-[15px] py-[3px] pr-[4px]">
									<div className="flex items-center justify-between text-[24px] leading-[1]">
										<p className="text-black">15.000.000</p>
										<p className="rounded-[6px] bg-[#C1C1C1] px-[5px]">VNĐ</p>
									</div>
								</div>
							</div>

							<div className="mb-[20px]">
								<Checkbox onChange={onChange}>
									<p className="font-Barlow text-[20px] text-white">
										Tôi đã đọc kỹ điều khoản dịch vụ và hoàn toàn đồng ý:{" "}
										<Link
											href={
												"https://docs.google.com/document/d/1Hnz7Yz5lL47gsra9ue3GELG6PUpdB-J6sw648KA5zi8/edit"
											}
											target="_blank"
											className="italic text-[#6F74FF]"
										>
											Term & condition
										</Link>
									</p>
								</Checkbox>
							</div>

							<div onClick={() => setSuccess(true)}>
								<MainButton className={"mx-auto"}>Xác nhận</MainButton>
							</div>
						</div>
					) : (
						<div className="success">
							<p className="mb-[45px] text-center text-[24px]">
								Chúc mừng bạn đã thanh toán gói dịch vụ thành công
							</p>
							<div onClick={() => closePopup()}>
								<MainButton className={"mx-auto"}>Trang cá nhân</MainButton>
							</div>
						</div>
					)}
				</LayoutModal>
			</Modal>
		</>
	);
}

export default memo(PopupService);
