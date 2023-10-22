import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";

function Footer({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`Footer`}>Footer</div>
    </>
  );
}

export default memo(Footer);
