import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";

function Avatar({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div
        className={`Avatar bg-main relative h-[67px] w-[67px] cursor-pointer overflow-hidden rounded-full hover:bg-bottom`}
      >
        <div className="absolute left-1/2 top-1/2 h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-[#4a1b42]">
          <div className="asdasd absolute left-1/2 top-1/2 h-[57px] w-[57px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
            <img src="/images/avatar.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Avatar);
