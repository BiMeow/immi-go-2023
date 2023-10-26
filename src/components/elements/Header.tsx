import Avatar from "@/components/elements/Avatar";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo } from "react";

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
];

function Header({ activeNav, ...props }: any) {
	const router = useRouter();

	return (
		<>
			<div className={`Header sticky top-0 z-[444]`}>
				<div className="cusContainer">
					<div className="flex items-center justify-between">
						<Link href={"/"}>
							<img src="/images/logo.png" alt="" className="max-w-[100px]" />
						</Link>

						<div className="listMenu flex items-center space-x-[20px]">
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
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(Header);
