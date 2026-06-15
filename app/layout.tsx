import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "한신대 학사구조개편 공론화",
  description: "한신대학교 학사구조개편 쟁점과 대안을 중립적으로 공유하는 공론화 페이지"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
