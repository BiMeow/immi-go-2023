import MasterPage from "@/components/layout/MasterPage";
import dynamic from "next/dynamic";

const PageBlog = dynamic(() => import("@/components/pageContent/PageBlog"));

export default function Home() {
	return (
		<MasterPage activeNav={4} pageName={"Dịch vụ"}>
			<PageBlog />
		</MasterPage>
	);
}
