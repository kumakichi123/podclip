import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ポッドクリップ | Podcastを見られる短尺コンテンツへ再設計",
  description:
    "出して終わりのPodcastを、採用候補者や見込み客に届く短尺コンテンツへ再設計。SNS展開だけでなく、営業・採用・広報で使える二次利用素材まで設計します。",
  openGraph: {
    title: "ポッドクリップ",
    description: "Podcastを採用・営業・広報で使える短尺コンテンツへ再設計するサービス",
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
      <body>{children}</body>
    </html>
  );
}
