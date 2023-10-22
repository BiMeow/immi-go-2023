import React from "react";
import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import { useStorage } from "@/components/context/StorageProvider";
import { useWindowSize } from "usehooks-ts";

function Loading({ ...props }) {
  const router = useRouter();

  const { width } = useWindowSize();

  const { isLoading } = useStorage();

  return (
    <>
      <div className={`Loading`}>
        <div
          className={`
          fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center overflow-hidden duration-700
          ${isLoading ? "" : "scale-0 rounded-full opacity-0"}
          `}
        >
          <div className="overlay absolute left-0 top-0 h-full w-full bg-[#0007]  backdrop-blur-[40px]"></div>

          <img src="/images/logo.png" alt="" className="relative z-10" />
        </div>
      </div>
    </>
  );
}

export default memo(Loading);
