/* eslint-disable @next/next/no-page-custom-font */
import Providers from "@/components/context/compose/Providers";
import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import Head from "next/head";
import { useRouter } from "next/router";

function MasterPage({
  isHome = true,
  activeNav = 2,
  pageName = "Trang chủ",
  title = "Công Nghệ Kết Nối Ước Mơ!",
  description = "Immi Go tự động hóa quá trình đăng ký Visa Úc 462. Hệ thống của chúng tôi phát hiện khi cổng thông tin mở, tự động điền đơn chính xác và thực hiện thanh toán tự động. Cam kết sự bảo mật dữ liệu, hỗ trợ trực tiếp và quá trình hoàn toàn tự động. Tham gia Immi Go hôm nay!",
  ...props
}: any) {
  const router = useRouter();

  const { children } = props;

  return (
    <>
      {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-RNRQXSSZVJ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());   
 
          gtag('config', 'G-RNRQXSSZVJ');
        `}
      </Script> */}

      <Head>
        <title>Immi Go | {pageName}</title>

        <meta charSet="UTF-8" key="charset" />

        <link rel="shortcut icon" href={`/images/favicon.svg`} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://google-cdn.digitop.vn/strategycoast/banner.jpg?fbclid=IwAR1VfBaKysv8MHY_JizgSgOK4d2HYU5qdDdTw-I02rn7jPz5qeMAqnt3bsU`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700;800;900&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Providers>
        <main
          className={`
          MasterPage flex min-h-screen flex-col justify-between pt-[85px]
          `}
        >
          <div>
            <Header isHome={isHome} activeNav={activeNav} />
            <div className={`pageContent`}>{children}</div>
          </div>
          <Footer isHome={isHome} />
        </main>
      </Providers>
    </>
  );
}

export default MasterPage;
