import MasterPage from "@/components/layout/MasterPage";
import dynamic from "next/dynamic";

const PageHome = dynamic(() => import("@/components/pageContent/PageHome"));

export default function Home() {
  return (
    <MasterPage activeNav={2} pageName={"Trang chủ"}>
      <PageHome />
    </MasterPage>
  );
}
