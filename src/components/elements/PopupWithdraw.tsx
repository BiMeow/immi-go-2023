import { useRouter } from "next/router";
import { memo, useMemo, useState } from "react";
import { Checkbox, Modal } from "antd";
import { useStorage } from "@/components/context/StorageProvider";
import LayoutModal from "@/components/layout/LayoutModal";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import MainButton from "@/components/elements/MainButton";
import Link from "next/link";
import { useMain } from "@/components/context/MainProvider";
import PopupCloseIcon from "@/components/elements/PopupCloseIcon";

let listMethod = [
	{
		image: "/images/method-1.png",
		name: "vnpay",
		qr: "/images/method-1-qr.png",
	},
	{
		image: "/images/method-2.png",
		name: "paypal",
		qr: "/images/method-3-qr.png",
	},
	{
		image: "/images/method-3.png",
		name: "momo",
		qr: "/images/method-3-qr.png",
	},
];

function PopupWithdraw({ ...props }) {
	const router = useRouter();

	const { popupWithdraw } = useStorage();
	const { closePopup } = useMain();
	const { formatNumber } = useMain();

	const [much, setMuch] = useState<any>("");
	const [step, setStep] = useState<any>(1);
	const [activeMethod, setActiveMethod] = useState<any>("");

	const onChange = (e: CheckboxChangeEvent) => {
		console.log(`checked = ${e.target.checked}`);
	};

	const Step1 = () => {
		return (
			<>
				<div className="mx-auto mb-[35px] max-w-[600px]">
					<p className="text-[24px]">Nhập số tiền bạn muốn rút</p>
					<div className="rounded-[8px] bg-[#D9D9D9] px-[15px] py-[3px] pr-[4px]">
						<div className="flex items-center justify-between text-[24px] leading-[1]">
							<input
								type="number"
								placeholder="15000000"
								className="w-full border-none bg-transparent text-black outline-none"
								onChange={(e: any) => {
									setMuch(e.target.value);
								}}
							/>
							<p className="rounded-[6px] bg-[#C1C1C1] px-[5px] text-black">VNĐ</p>
						</div>
					</div>
				</div>

				<div className="flex justify-center space-x-[30px]">
					<div onClick={() => setStep(2)}>
						<MainButton className={"mx-auto"}>Đồng ý</MainButton>
					</div>
				</div>
			</>
		);
	};

	const Step2 = () => {
		return (
			<>
				<div className="mb-[35px] space-y-[10px]">
					<div>
						<p className="mr-[20px] text-[24px]">Số tiền bạn muốn rút</p>
						<div className="rounded-[8px] bg-[#686262] px-[15px] py-[3px] pr-[4px]">
							<div className="flex items-center justify-between text-[24px] leading-[1]">
								<p className="text-black">{formatNumber(much)}</p>
								<p className="rounded-[6px] bg-[#C1C1C1] px-[5px] text-black">VNĐ</p>
							</div>
						</div>
					</div>
					<div>
						<p className="mr-[20px] text-[24px]">Số dư trong tài khoản</p>
						<div className="rounded-[8px] bg-[#686262] px-[15px] py-[3px] pr-[4px]">
							<div className="flex items-center justify-between text-[24px] leading-[1]">
								<p className="text-black">15.000.000</p>
								<p className="rounded-[6px] bg-[#C1C1C1] px-[5px] text-black">VNĐ</p>
							</div>
						</div>
					</div>
					<div>
						<p className="mr-[20px] text-[24px]">Số tiền còn lại</p>
						<div className="rounded-[8px] bg-[#686262] px-[15px] py-[3px] pr-[4px]">
							<div className="flex items-center justify-between text-[24px] leading-[1]">
								<p className="text-black">15.000.000</p>
								<p className="rounded-[6px] bg-[#C1C1C1] px-[5px] text-black">VNĐ</p>
							</div>
						</div>
					</div>
					<div>
						<p className="text-[24px]">Tài khoản Paypal</p>
						<div className="rounded-[8px] bg-[#D9D9D9] px-[15px] py-[3px] pr-[4px]">
							<div className="flex items-center justify-between text-[24px] leading-[1]">
								<input
									type="email"
									placeholder="BiMeow@gmail.com"
									className="w-full border-none bg-transparent text-black outline-none"
									onChange={(e: any) => {
										setMuch(e.target.value);
									}}
								/>
								<p className="rounded-[6px] bg-[#C1C1C1] px-[5px] text-black">VNĐ</p>
							</div>
						</div>
					</div>
					<div>
						<p className="text-[24px]">Mật khẩu Immi</p>
						<div className="rounded-[8px] bg-[#D9D9D9] px-[15px] py-[3px] pr-[4px]">
							<div className="flex items-center justify-between text-[24px] leading-[1]">
								<input
									type="password"
									placeholder="123456"
									className="w-full border-none bg-transparent text-black outline-none"
									onChange={(e: any) => {
										setMuch(e.target.value);
									}}
								/>
								<p className="rounded-[6px] bg-[#C1C1C1] px-[5px] text-black">VNĐ</p>
							</div>
						</div>
					</div>
					<div>
						<Checkbox onChange={onChange}>
							<p className="font-Barlow text-[20px] text-white">
								Tôi cam kết tài khoản Paypal mà tôi cung cấp phía trên là chính xác
							</p>
						</Checkbox>
						<p className="text-[14px]">
							* Immi Go sẽ không chịu trách nhiệm nếu bạn điền sai thông tin Paypal
						</p>
					</div>
				</div>

				<div className="flex justify-center space-x-[30px]">
					<div onClick={() => setStep(1)}>
						<MainButton className={"mx-auto"}>Quay lại</MainButton>
					</div>
					<div onClick={() => setStep(3)}>
						<MainButton className={"mx-auto"}>Xác nhận</MainButton>
					</div>
				</div>
			</>
		);
	};

	const Step3 = () => {
		return (
			<>
				<div className="mb-[45px] space-y-[10px] text-[24px]">
					<p>
						Chúng tôi đang kiểm tra thanh toán của bạn. Hãy kiểm tra tình trạng ở trang cá nhân của bạn
						trong vòng 10 phút Nếu chưa được cập nhật thanh toán vui lòng liên hệ.
					</p>
					<p>Email: nirannguyen50@gmail.com</p>
					<p>Zalo: 0338800754</p>
				</div>

				<div className="flex justify-center space-x-[30px]">
					<div onClick={() => closePopup()}>
						<MainButton className={"mx-auto"}>Đóng</MainButton>
					</div>
				</div>
			</>
		);
	};

	const stepContent = useMemo(() => {
		switch (step) {
			case 1:
				return <Step1 />;

			case 2:
				return <Step2 />;

			case 3:
				return <Step3 />;

			default:
				return <></>;
				break;
		}
	}, [step]);

	return (
		<>
			<Modal
				className="cusPopup popupWithdraw"
				open={popupWithdraw}
				onCancel={() => {
					closePopup();
					setStep(1);
				}}
				title={false}
				closeIcon={<PopupCloseIcon />}
				footer={false}
				width={800}
				centered
			>
				<LayoutModal>
					<h3 className="bg-main mb-[20px] !bg-clip-text text-center text-[32px] font-bold uppercase leading-[1.3] text-transparent">
						{step != 3 ? "Rút tiền" : "Thông báo"}
					</h3>

					{stepContent}
				</LayoutModal>
			</Modal>
		</>
	);
}

export default memo(PopupWithdraw);
