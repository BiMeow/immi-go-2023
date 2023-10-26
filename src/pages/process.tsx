import MasterPage from "@/components/layout/MasterPage";
import dynamic from "next/dynamic";

const PageProcess = dynamic(() => import("@/components/pageContent/PageProcess"));

export default function Home() {
	return (
		<MasterPage activeNav={3} pageName={"Trang chủ"}>
			<PageProcess />
		</MasterPage>
	);
}
