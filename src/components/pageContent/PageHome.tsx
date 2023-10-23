import SectionHomeBanner from "@/components/sections/home/SectionHomeBanner";
import SectionHomeCommit from "@/components/sections/home/SectionHomeCommit";
import SectionHomePartner from "@/components/sections/home/SectionHomePartner";
import SectionHomeProcess from "@/components/sections/home/SectionHomeProcess";
import SectionHomeReference from "@/components/sections/home/SectionHomeReference";
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
          <SectionHomeReference />
          <SectionHomeCommit />
          <SectionHomePartner />
        </div>
      </div>
    </>
  );
}

export default memo(PageHome);
