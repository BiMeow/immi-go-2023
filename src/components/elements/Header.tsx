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

function Header({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`Header sticky top-0 z-[444]`}>
        <div className="cusContainer">
          <div className="flex items-center justify-between">
            <img src="/images/logo.png" alt="" className="max-w-[114px]" />

            <div className="listMenu flex items-center space-x-[20px]">
              {listMenu.map((e: any, i: number) => (
                <div
                  className="itemMenu relative cursor-pointer duration-300 hover:text-purple"
                  key={i}
                >
                  <h4 className="font-semibold">{e.title}</h4>
                  <Link href={e.href} className="absFull" />
                </div>
              ))}
              <Avatar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
