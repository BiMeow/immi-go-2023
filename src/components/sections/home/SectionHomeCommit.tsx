import { useEffect, useState, useContext, useRef, memo, useMemo } from "react";
import { useRouter } from "next/router";

const listCommit = [
  {
    title: "Bảo mật",
    description:
      "Immi Go đảm bảo rằng tất cả các thông tin cá nhân và chi tiết thanh toán của bạn sẽ được mã hóa và bảo quản an toàn,áp dụng chuẩn bảo mật quốc tế PCI DSS, (2FA) và thực hiện các kiểm tra bảo mật định kỳ để đảm bảo an toàn của dữ liệu.",
    image: "/images/home-commit-1.png",
  },
  {
    title: "Công nghệ",
    description:
      "Sử dụng công nghệ tiên tiến, Immi Go sẽ tự động theo dõi tình trạng của cổng thông tin Visa 462 và cập nhật cho bạn một cách nhanh chóng khi có sự thay đổi. ",
    image: "/images/home-commit-2.png",
  },
  {
    title: "Hỗ trợ 24/7",
    description:
      "Immi Go cung cấp dịch vụ hỗ trợ khách hàng 24/7 để giải đáp mọi thắc mắc và giúp đỡ bạn trong quá trình sử dụng dịch vụ. Đội ngũ của chúng tôi sẵn lòng giúp đỡ bạn qua nhiều kênh liên hệ như email, điện thoại, và chat trực tuyến.",
    image: "/images/home-commit-3.png",
  },
];

function SectionHomeCommit({ ...props }) {
  const router = useRouter();

  return (
    <>
      <div className={`SectionHomeCommit secSpacing relative`}>
        <div className="absolute left-1/2 top-0 w-full -translate-x-[50%] -translate-y-[45%]">
          <img src="/images/home-deco-1.png" alt="" className="w-full" />
        </div>

        <div className="cusContainer relative z-10">
          <h2 className="bg-second mb-[25px] !bg-clip-text text-center text-[48px] font-semibold uppercase text-transparent">
            Cam kết
          </h2>

          <div className="listCommit mx-[-60px] flex">
            {listCommit.map((e: any, i: number) => (
              <div className="itemCommit w-1/3 px-[60px]" key={i}>
                <div className="image relative mb-[10px] h-[200px] w-[179px]">
                  <img
                    src={e.image}
                    alt=""
                    className="absFull object-contain object-left-bottom"
                  />
                </div>

                <h3 className="mb-[10px] text-[48px] font-semibold">
                  {e.title}
                </h3>
                <p className="text-[20px]">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(SectionHomeCommit);
