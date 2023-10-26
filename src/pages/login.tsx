import MasterPage from "@/components/layout/MasterPage";
import dynamic from "next/dynamic";

const PageLogin = dynamic(() => import("@/components/pageContent/PageLogin"));

export default function Home() {
	return (
		<MasterPage activeNav={-1} pageName={"Trang chủ"} pageLogin>
			<PageLogin />
		</MasterPage>
	);
}
