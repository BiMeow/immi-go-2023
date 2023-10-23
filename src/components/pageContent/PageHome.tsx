import SectionHomeBanner from "@/components/sections/home/SectionHomeBanner";
import SectionHomeProcess from "@/components/sections/home/SectionHomeProcess";
import { useRouter } from "next/router";
import { memo } from "react";

function PageHome({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`PageHome mainPage`}>
        <img
          src="/images/bg-home.jpg"
          alt=""
          className="absolute left-0 top-0 w-full"
        />
        <div className="relative z-10">
          <SectionHomeBanner />
          <SectionHomeProcess />
        </div>
      </div>
    </>
  );
}

export default memo(PageHome);
