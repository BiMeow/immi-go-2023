import { useStorage } from "@/components/context/StorageProvider";
import MainButton from "@/components/elements/MainButton";
import PopupLoginSuccess from "@/components/elements/PopupLoginSuccess";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useState } from "react";

function PageLogin({ ...props }) {
	const router = useRouter();

	const { setPopupLoginSuccess } = useStorage();

	const [isLogin, setIsLogin] = useState(true);

	const onChange = (e: CheckboxChangeEvent) => {
		console.log(`checked = ${e.target.checked}`);
	};

	const LoginForm = () => {
		return (
			<>
				<h2 className="bg-main mb-[30px] !bg-clip-text text-center text-[64px] font-bold uppercase leading-[1.3] text-transparent">
					Đăng nhập
				</h2>

				<div className="bg-main mb-[16px] w-full rounded-[50px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
					<input
						className="w-full rounded-[48px] bg-[#292536] px-[30px] py-[20px] leading-[1.2]"
						placeholder="Immi email"
					/>
				</div>

				<div className="bg-main mb-[16px] w-full rounded-[50px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
					<input
						className="w-full rounded-[48px] bg-[#292536] px-[30px] py-[20px] leading-[1.2]"
						placeholder="Immi password"
					/>
				</div>

				<div className="mb-[30px]">
					<Checkbox onChange={onChange}>
						<p className="font-Barlow text-[16px] text-[#A6A6A6]">Remember me</p>
					</Checkbox>
				</div>

				<div className="mx-auto mb-[45px] w-fit">
					<MainButton showDeco decoTop decoBottom>
						Đăng nhập
					</MainButton>
				</div>

				<p
					className="mx-auto w-fit cursor-pointer text-[24px] text-[#A6A6A6] duration-500 hover:text-purple"
					onClick={() => setIsLogin(false)}
				>
					Đăng ký
				</p>
			</>
		);
	};

	const RegisterForm = () => {
		return (
			<>
				<h2 className="bg-main mb-[30px] !bg-clip-text text-center text-[64px] font-bold uppercase leading-[1.3] text-transparent">
					Đăng ký
				</h2>

				<div className="bg-main mb-[16px] w-full rounded-[50px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
					<input
						className="w-full rounded-[48px] bg-[#292536] px-[30px] py-[20px] leading-[1.2]"
						placeholder="Immi email"
					/>
				</div>

				<div className="bg-main mb-[16px] w-full rounded-[50px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
					<input
						className="w-full rounded-[48px] bg-[#292536] px-[30px] py-[20px] leading-[1.2]"
						placeholder="Immi password"
					/>
				</div>

				<div className="bg-main mb-[16px] w-full rounded-[50px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
					<input
						className="w-full rounded-[48px] bg-[#292536] px-[30px] py-[20px] leading-[1.2]"
						placeholder="Phone number"
					/>
				</div>

				<div className="bg-main mb-[45px] w-full rounded-[50px] p-[2px] shadow-[0px_0px_20px_#7E23AF77]">
					<input
						className="w-full rounded-[48px] bg-[#292536] px-[30px] py-[20px] leading-[1.2]"
						placeholder="Nickname"
					/>
				</div>

				<div className="mx-auto mb-[45px] w-fit" onClick={() => setPopupLoginSuccess(true)}>
					<MainButton showDeco decoTop decoBottom>
						Đăng kỳ
					</MainButton>
				</div>

				<p
					className="mx-auto w-fit cursor-pointer text-[24px] text-[#A6A6A6] duration-500 hover:text-purple"
					onClick={() => setIsLogin(true)}
				>
					Đăng nhập
				</p>
			</>
		);
	};

	return (
		<>
			<div className={`PageLogin`}>
				<img src="/images/bg-login.jpg" alt="" className="absolute left-0 top-0 h-full w-full object-cover" />

				<div className="cusContainer relative z-10 mx-auto max-w-[400px] py-[50px]">
					<Link href={"/"}>
						<img src="/images/logo-icon.png" alt="" className="mx-auto mb-[15px] max-w-[200px]" />
					</Link>

					{isLogin ? <LoginForm /> : <RegisterForm />}
				</div>
			</div>

			<PopupLoginSuccess />
		</>
	);
}

export default memo(PageLogin);
