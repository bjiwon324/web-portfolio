import type { Metadata } from "next";
import "@/styles/base/index.scss";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
      <body
      // className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
