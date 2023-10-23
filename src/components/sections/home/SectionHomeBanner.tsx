import React from "react";
import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import MainButton from "@/components/elements/MainButton";

function SectionHomeBanner({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`SectionHomeBanner secSpacing`}>
        <div className="cusContainer space-y-[40px] text-center">
          <h1 className="bg-main !bg-clip-text font-Bebas text-[110px] font-bold uppercase leading-[1] text-transparent">
            Immi go
          </h1>

          <h2 className="text-[75px] font-medium">Công Nghệ Kết Nối Ước Mơ!</h2>

          <p className="mx-auto max-w-[915px]">
            Immi Go tự động hóa quá trình đăng ký Visa Úc 462. Hệ thống của
            chúng tôi phát hiện khi cổng thông tin mở, tự động điền đơn chính
            xác và thực hiện thanh toán tự động. Cam kết sự bảo mật dữ liệu, hỗ
            trợ trực tiếp và quá trình hoàn toàn tự động. Tham gia Immi Go hôm
            nay!
          </p>

          <div className="flex justify-center">
            <MainButton showDeco decoTop decoBottom>
              Tham gia ngay!
            </MainButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionHomeBanner);
