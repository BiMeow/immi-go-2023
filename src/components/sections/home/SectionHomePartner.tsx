import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";

const listPartner = [
  {
    image: "/images/partner-1.png",
  },
  {
    image: "/images/partner-2.png",
  },
  {
    image: "/images/partner-3.png",
  },
];

function SectionHomePartner({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`SectionHomePartner secSpacing relative`}>
        <h2 className="bg-second mb-[25px] !bg-clip-text text-center text-[48px] font-semibold uppercase text-transparent">
          Đối tác
        </h2>

        <div className="listPartner overflow-hidden">
          <div className="list animationLeft flex items-center">
            {listPartner.map((e: any, i: number) => (
              <div className="itemPartner relative h-[150px] w-[300px] flex-none pr-[40px]">
                <img
                  src={e.image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
            {listPartner.map((e: any, i: number) => (
              <div className="itemPartner relative h-[150px] w-[300px] flex-none pr-[40px]">
                <img
                  src={e.image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
            {listPartner.map((e: any, i: number) => (
              <div className="itemPartner relative h-[150px] w-[300px] flex-none pr-[40px]">
                <img
                  src={e.image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
            {listPartner.map((e: any, i: number) => (
              <div className="itemPartner relative h-[150px] w-[300px] flex-none pr-[40px]">
                <img
                  src={e.image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
            {listPartner.map((e: any, i: number) => (
              <div className="itemPartner relative h-[150px] w-[300px] flex-none pr-[40px]">
                <img
                  src={e.image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
            {listPartner.map((e: any, i: number) => (
              <div className="itemPartner relative h-[150px] w-[300px] flex-none pr-[40px]">
                <img
                  src={e.image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --total-brand: ${listPartner.length};
          --duration: calc((var(--total-brand) * 6) * 1.5s);
        }

        .SectionHomePartner {
          .list {
            width: calc(${listPartner.length} * 6 * 300px);
          }

          .animationLeft {
            animation: sliderLeft var(--duration) linear infinite;
          }

          .animationLeft:hover {
            animation-play-state: paused;
          }
        }

        @keyframes sliderLeft {
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}

export default memo(SectionHomePartner);
