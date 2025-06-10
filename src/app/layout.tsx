import type { Metadata } from "next";
import "@/styles/base/index.scss";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "jiwon-portfolio",
  description: "프론트엔드 & 디자이너 박지원의 포트폴리오 사이트입니다."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head></head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
