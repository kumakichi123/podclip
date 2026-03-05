import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ポッドクリップ | PodcastからSNS用の動画や記事を作成",
  description:
    "话すだけでOK。PodcastをSNS用ショート動画・note記事・X投稿に変換するコンテンツ制作サービス。まずは無料の切り抜き動画をリクエスト。",
  openGraph: {
    title: "ポッドクリップ",
    description: "PodcastからSNS用の動画や記事を作成するサービス",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
