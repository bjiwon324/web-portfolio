import type { Metadata } from "next";
import "@/styles/base/index.scss";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "jiwon-portfolio",
  description: "프론트엔드 & 디자이너 박지원의 포트폴리오 사이트입니다.",
  openGraph: {
    title: "jiwon-portfolio",
    description: "프론트엔드 & 디자이너 박지원의 포트폴리오 사이트입니다.",
    url: "https://web-portfolio-taupe-ten.vercel.app/",
    images: [
      {
        url: "/icons/logo.svg",
        width: 800,
        height: 600,
        alt: "포트폴리오 미리보기 이미지"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head></head>
      <body id="root">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
