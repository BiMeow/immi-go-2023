import { useRouter } from "next/router";
import { memo, useState } from "react";
import { Checkbox, Modal } from "antd";
import { useStorage } from "@/components/context/StorageProvider";
import LayoutModal from "@/components/layout/LayoutModal";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import MainButton from "@/components/elements/MainButton";
import Link from "next/link";
import { useMain } from "@/components/context/MainProvider";

function PopupLoginSuccess({ ...props }) {
	const router = useRouter();

	const { popupLoginSuccess } = useStorage();
	const { closePopup } = useMain();

	return (
		<>
			<Modal
				className="cusPopup popupLoginSuccess"
				open={popupLoginSuccess}
				onCancel={() => console.log(`BiMeow is me!`)}
				title={false}
				closeIcon={false}
				footer={false}
				width={800}
				centered
			>
				<LayoutModal>
					<h3 className="bg-main mb-[20px] !bg-clip-text text-center text-[32px] font-bold uppercase leading-[1.3] text-transparent">
						Thông báo
					</h3>
					<div className="success">
						<p className="mb-[45px] text-center text-[24px]">Chúc mừng bạn đã đăng ký thành công!</p>
						<div onClick={() => closePopup()}>
							<MainButton className={"mx-auto"}>Trang cá nhân</MainButton>
						</div>
					</div>
				</LayoutModal>
			</Modal>
		</>
	);
}

export default memo(PopupLoginSuccess);
