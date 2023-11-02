import MasterPage from "@/components/layout/MasterPage";
import dynamic from "next/dynamic";

const PageBlogDetail = dynamic(() => import("@/components/pageContent/PageBlogDetail"));

export default function Home() {
	return (
		<MasterPage activeNav={-1} pageName={"Dịch vụ"}>
			<PageBlogDetail />
		</MasterPage>
	);
}
