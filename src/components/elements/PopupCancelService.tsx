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

function PopupCancelService({ ...props }) {
	const router = useRouter();

	const { popupCancelService } = useStorage();
	const { closePopup } = useMain();

	const [cancelSuccess, setCancelSuccess] = useState(false);

	return (
		<>
			<Modal
				className="cusPopup popupCancelService"
				open={popupCancelService}
				onCancel={() => {
					closePopup();
					setCancelSuccess(false);
				}}
				title={false}
				closeIcon={<PopupCloseIcon />}
				footer={false}
				width={800}
				centered
			>
				<LayoutModal>
					<h3 className="bg-main mb-[20px] !bg-clip-text text-center text-[32px] font-bold uppercase leading-[1.3] text-transparent">
						Thông báo
					</h3>
					{!cancelSuccess ? (
						<div className="areusure">
							<p className="mb-[35px] text-center text-[24px]">Bạn có muốn hủy gói dịch vụ?</p>

							<div className="flex justify-center space-x-[30px] mb:flex-col mb:space-x-0 mb:space-y-[40px]">
								<div onClick={() => closePopup()}>
									<MainButton className={"mx-auto"}>Tôi không muốn hủy</MainButton>
								</div>
								<div onClick={() => setCancelSuccess(true)}>
									<MainButton className={"mx-auto"}>Tôi muốn hủy</MainButton>
								</div>
							</div>
						</div>
					) : (
						<div className="cancelSuccess">
							<p className="mb-[35px] text-center text-[24px]">Hủy gói dịch vụ thành công!</p>

							<div className="flex justify-center space-x-[30px]">
								<div onClick={() => closePopup()}>
									<MainButton className={"mx-auto"}>Đóng</MainButton>
								</div>
							</div>
						</div>
					)}
				</LayoutModal>
			</Modal>
		</>
	);
}

export default memo(PopupCancelService);
