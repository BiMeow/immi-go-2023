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

function PopupDeposit({ ...props }) {
	const router = useRouter();

	const { popupDeposit } = useStorage();
	const { closePopup } = useMain();
	const { formatNumber } = useMain();

	const [much, setMuch] = useState<any>("");
	const [step, setStep] = useState<any>(1);
	const [activeMethod, setActiveMethod] = useState<any>("");

	const Step1 = () => {
		return (
			<>
				<div className="mx-auto mb-[35px] max-w-[600px] ">
					<p className="text-[24px]">Nhập số tiền bạn muốn nạp</p>
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
							<p className="rounded-[6px] bg-[#C1C1C1] px-[5px]">VNĐ</p>
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
				<div className="listMethod mx-[-8px] mb-[45px] flex items-center justify-center">
					{listMethod.map((e: any, i: number) => (
						<div className="itemMethod w-1/3 px-[8px]" key={i} onClick={() => setActiveMethod(e)}>
							<div className="bg-main w-full cursor-pointer rounded-[12px] p-[2px] shadow-[0px_0px_20px_#7E23AF77] hover:bg-bottom">
								<div className="rounded-[10px] bg-[#14171C] px-[20px] py-[16px]">
									<div className="image relative mb-[10px] h-[170px] w-full overflow-hidden rounded-[10px]">
										<img
											src={e.image}
											alt=""
											className="absFull object-contain duration-700 group-hover:scale-110"
										/>
									</div>
									<p className="mb-[45px] text-center text-[20px] font-light">Immidiately</p>

									<div className="bg-main mx-auto h-[55px]  w-[55px] cursor-pointer rounded-full p-[2px] shadow-[0px_0px_20px_#7E23AF77] hover:bg-bottom">
										<div
											className={`
                                            h-[50px] w-[50px] rounded-full duration-700
                                            ${activeMethod.name == e.name ? "bg-purple" : "bg-[#14171C]"}
                                            `}
										></div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="flex justify-center space-x-[30px]">
					<div onClick={() => setStep(1)}>
						<MainButton className={"mx-auto"}>Quay lại</MainButton>
					</div>
					<div onClick={() => setStep(3)}>
						<MainButton className={"mx-auto"}>Thanh toán</MainButton>
					</div>
				</div>
			</>
		);
	};

	const Step3 = () => {
		return (
			<>
				<div className="mb-[35px] mt-[20px] flex items-center justify-between">
					<div className="w-[70%] space-y-[10px] text-[24px] font-medium">
						<p>Chủ tài khoản: Nguyen Cat Tuong</p>
						<p>Nội dung chuyển khoản:”Code gen form VN Pay” </p>
						<p>Amount: {formatNumber(parseInt(much))} VNĐ</p>
					</div>

					<img src={activeMethod.qr} alt="" className="w-[30%] max-w-[255px]" />
				</div>

				<div className="flex justify-center space-x-[30px]">
					<div onClick={() => setStep(2)}>
						<MainButton className={"mx-auto"}>Quay lại</MainButton>
					</div>
					<div onClick={() => setStep(4)}>
						<MainButton className={"mx-auto"}>Hoàn tất thanh toán</MainButton>
					</div>
				</div>
			</>
		);
	};

	const Step4 = () => {
		return (
			<>
				<div className="mb-[35px] space-y-[10px] text-[24px]">
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

			case 4:
				return <Step4 />;

			default:
				return <></>;
				break;
		}
	}, [step, activeMethod]);

	return (
		<>
			<Modal
				className="cusPopup popupDeposit"
				open={popupDeposit}
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
						{step != 4 ? "Nạp tiền" : "Thông báo"}
					</h3>

					{stepContent}
				</LayoutModal>
			</Modal>
		</>
	);
}

export default memo(PopupDeposit);
