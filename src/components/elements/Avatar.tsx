import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";

function Avatar({ large = false, ...props }) {
	const router = useRouter();

	return (
		<>
			<div
				className={`
        Avatar bg-main relative cursor-pointer overflow-hidden rounded-full hover:bg-bottom
        ${large ? "h-[155px] w-[155px]" : "h-[67px] w-[67px]"}
        `}
			>
				<div
					className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full
          ${large ? "h-[150px] w-[150px] bg-[#292536]" : "h-[62px] w-[62px] bg-[#4a1b42]"}
        `}
				>
					<div
						className={`
            asdasd absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full
            ${large ? "h-[140px] w-[140px]" : "h-[57px] w-[57px]"}
            `}
					>
						<img src="/images/avatar.jpg" alt="" />
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(Avatar);
