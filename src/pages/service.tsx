import MasterPage from "@/components/layout/MasterPage";
import dynamic from "next/dynamic";

const PageService = dynamic(
  () => import("@/components/pageContent/PageService"),
);

export default function Home() {
  return (
    <MasterPage activeNav={2} pageName={"Trang chủ"}>
      <PageService />
    </MasterPage>
  );
}
