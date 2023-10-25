import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";

function Footer({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`Footer`}>
        <div className="cusContainer">Footer</div>
      </div>
    </>
  );
}

export default memo(Footer);
