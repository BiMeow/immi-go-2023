import Avatar from "@/components/elements/Avatar";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useState } from "react";
import { useWindowSize } from "usehooks-ts";

let listMenu = [
	{
		title: "Trang chủ",
		href: "/",
	},
	{
		title: "Cá nhân",
		href: "/account",
		private: true,
	},
	{
		title: "Dịch vụ",
		href: "/service",
	},
	{
		title: "Theo dõi tiến trình",
		href: "/process",
	},
	{
		title: "Bài viết",
		href: "/blog",
	},
];

function Header({ activeNav, ...props }: any) {
	const router = useRouter();

	const { width } = useWindowSize();

	const [showNav, setShowNav] = useState<any>(false);

	return (
		<>
			<div className={`Header sticky top-0 z-[444] mb:pt-[20px]`}>
				<div className="cusContainer">
					<div className="flex items-center justify-between">
						<Link href={"/"}>
							<img
								src={width > 767 ? "/images/logo.png" : "/images/logo-icon.png"}
								alt=""
								className="max-w-[100px] tl-p:max-w-[75px] mb:max-w-[55px]"
							/>
						</Link>

						<div
							className={`
							listMenu flex items-center space-x-[20px]
							mb:absolute mb:left-0 mb:top-0 mb:h-[100dvh] mb:w-screen mb:flex-col mb:justify-center mb:space-x-0 mb:space-y-[20px] mb:bg-black mb:backdrop-blur-[20px] mb:duration-700
							${showNav ? "translate-x-0" : "-translate-x-full opacity-0"}
							`}
						>
							{listMenu.map((e: any, i: number) => (
								<div
									className={`
									itemMenu relative duration-500 hover:text-purple
									${activeNav == i ? "text-purple underline underline-offset-8" : ""}
									`}
									key={i}
								>
									<h4 className="font-semibold">{e.title}</h4>
									<Link
										href={e.href}
										className={`
										absFull
										${activeNav == i ? "cursor-not-allowed" : ""}
										`}
									/>
								</div>
							))}
							<Link href={"/login"}>
								<Avatar />
							</Link>
						</div>

						<div
							className={`
							hamburger-lines absolute right-[20px] top-[20px] z-20 hidden mb:block
							${showNav ? "active" : ""}
							`}
							onClick={() => setShowNav(!showNav)}
						>
							<span className="line line1"></span>
							<span className="line line2"></span>
							<span className="line line3"></span>
						</div>
					</div>
				</div>
			</div>

			<style jsx global>{`
				.Header {
					.hamburger-lines {
						display: block;
						height: 26px;
						width: 32px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
					}

					.hamburger-lines .line {
						display: block;
						height: 4px;
						width: 100%;
						border-radius: 10px;
						background: #fff;
					}

					.hamburger-lines .line1 {
						transform-origin: 0% 0%;
						transition: transform 0.4s ease-in-out;
					}

					.hamburger-lines .line2 {
						transition: transform 0.2s ease-in-out;
					}

					.hamburger-lines .line3 {
						transform-origin: 0% 100%;
						transition: transform 0.4s ease-in-out;
					}

					.hamburger-lines.active .line1 {
						transform: rotate(45deg);
					}

					.hamburger-lines.active .line2 {
						transform: scaleY(0);
					}

					.hamburger-lines.active .line3 {
						transform: rotate(-45deg);
					}
				}
			`}</style>
		</>
	);
}

export default memo(Header);
