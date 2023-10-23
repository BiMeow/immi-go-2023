import { useRouter } from "next/router";
import { memo } from "react";

function MainButton({
  children,
  className = "",
  showDeco = false,
  decoTop = false,
  decoBottom = false,
  ...props
}: any) {
  const router = useRouter();

  return (
    <>
      <div
        className={`MainButton bg-main group relative w-fit cursor-pointer rounded-[30px] px-[64px] py-[16px] leading-[1] hover:bg-bottom ${className}`}
      >
        <div className="relative z-10 text-[24px] font-bold leading-[1] text-white duration-500 group-hover:text-[#4A0D99]">
          {children}
        </div>
        <div className="bg-second shadow-inset absolute left-1/2 top-1/2 h-[calc(100%-4px)] w-[calc(100%-4px)] -translate-x-1/2 -translate-y-1/2 rounded-[35px]"></div>
        {showDeco && (
          <>
            {decoTop && (
              <img
                src="/images/deco-btn-1.png"
                alt=""
                className="absolute left-1/2 top-[40%] z-[5] w-[300%] max-w-[unset] -translate-x-1/2"
              />
            )}
            {decoBottom && (
              <img
                src="/images/deco-btn-2.png"
                alt=""
                className="absolute left-1/2 top-1/2 z-[-1] w-[150%] max-w-[unset] -translate-x-1/2 -translate-y-1/2"
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default memo(MainButton);
