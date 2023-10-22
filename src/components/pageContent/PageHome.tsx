import { useRouter } from "next/router";
import { memo } from "react";

function PageHome({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`PageHome mainPage`}>PageHome</div>
    </>
  );
}

export default memo(PageHome);
