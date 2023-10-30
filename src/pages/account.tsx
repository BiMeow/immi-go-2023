import MasterPage from "@/components/layout/MasterPage";
import dynamic from "next/dynamic";

const PageAccount = dynamic(() => import("@/components/pageContent/PageAccount"));

export default function Home() {
	return (
		<MasterPage activeNav={1} pageName={"Dịch vụ"}>
			<PageAccount />
		</MasterPage>
	);
}
