import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";
import { IconClose } from "@/components/elements/Icons";

function PopupCloseIcon({ ...props }) {
	const router = useRouter();

	return (
		<>
			<div className={`PopupCloseIcon`}>
				<div className="absolute right-[30px] top-[30px] cursor-pointer fill-white duration-700 hover:fill-purple mb:right-0 mb:top-0">
					<IconClose />
				</div>
			</div>
		</>
	);
}

export default memo(PopupCloseIcon);
