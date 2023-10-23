import React from "react";
import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import MainButton from "@/components/elements/MainButton";

let listProcess = [
  {
    title: "Đăng ký & thanh toán",
    description:
      "Đăng ký bằng tài khoản Immimi Account của bạn, thực hiện thanh toán và chuẩn bị cho quy trình xin visa.",
    image: "/images/home-process-1.png",
  },
  {
    title: "Điền thông tin cá nhân",
    description:
      "Cung cấp thông tin cá nhân chính xác để đảm bảo quy trình xin visa diễn ra suôn sẻ và nhanh chóng.",
    image: "/images/home-process-2.png",
  },
  {
    title: "Theo dõi trạng thái visa",
    description:
      "Hệ thống tự động theo dõi và cập nhật thông tin visa 462 cho đến khâu thanh toán, giúp bạn không bỏ lỡ bất kỳ cơ hội nào.",
    image: "/images/home-process-3.png",
  },
];

function SectionHomeProcess({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`SectionHomeProcess secSpacing`}>
        <div className="cusContainer mx-auto max-w-[800px]">
          <p className="subTitle">QUY TRÌNH</p>
          <h2 className="secTitle mb-[75px]">Tham gia như thế nào?</h2>
          <div className="listProcess relative mb-[55px] space-y-[55px]">
            <div className="line absolute left-1/2 top-0 h-[93%] w-[1px] -translate-x-1/2 -translate-y-[7%] bg-[#0E0E0E]"></div>

            {listProcess.map((e: any, i: number) => (
              <div
                className={`
                itemProcess item${i} relative z-10 flex flex-auto items-center justify-between
                `}
              >
                <div
                  className={`
                  image bg-main relative order-1 w-[39%] rounded-[10px] p-[2px] shadow-[0px_0px_40px_#7E23AF99]
                  ${i % 2 == 0 ? "order-1" : "order-3"}
                  `}
                >
                  <div className="relative">
                    <div className="aspect-[310/175]"></div>
                    <div className="absolute left-0 top-0 h-full w-full rounded-[8px] bg-[#14171C]">
                      <img
                        src={e.image}
                        alt=""
                        className="h-full w-full object-contain p-[20px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="number bg-main order-2 h-[44px] w-[44px] rounded-full p-[2px] shadow-[0px_0px_40px_#7E23AF]">
                  <div className="relative h-full w-full">
                    <div className="bg-second absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full">
                      <p className="mt-[-3px] text-[24px] font-bold leading-[1]">
                        {i + 1}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`
                  content w-[39%]
                  ${i % 2 == 0 ? "order-3" : "order-1"}
                  `}
                >
                  <h3 className="mb-[10px] text-[24px] font-bold">{e.title}</h3>
                  <p className="font-light">{e.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <MainButton>Xem hướng dẫn chi tiết</MainButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionHomeProcess);
