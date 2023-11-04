import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";

function Footer({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`Footer relative py-[40px]`}>
				<img src="/images/bg-footer.jpg" alt="" className="absFull" />
				<div className="cusContainer relative z-10">Footer</div>
			</div>
		</>
	);
}

export default memo(Footer);
