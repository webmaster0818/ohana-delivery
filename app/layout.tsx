import type { Metadata } from "next";
import { Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ohana-delivery.com"),
  title:
    "お花の定期便おすすめ5選を徹底比較【2026年最新】失敗しない選び方ガイド",
  description:
    "お花の定期便（花のサブスク）人気5社を料金・送料・届き方・花の本数で徹底比較。bloomee・medelu・AND PLANTS・hanamekuなど、あなたにぴったりのサービスが見つかる診断付き。一人暮らし・プレゼント・コスパ重視など目的別おすすめも紹介。",
  keywords:
    "お花の定期便,花のサブスク,比較,おすすめ,bloomee,medelu,AND PLANTS,hanameku,花の定期便",
  openGraph: {
    title:
      "お花の定期便おすすめ5選を徹底比較【2026年最新】失敗しない選び方ガイド",
    description:
      "お花の定期便（花のサブスク）人気5社を料金・送料・届き方で徹底比較。あなたにぴったりのサービスが見つかる診断付き。",
    url: "https://ohana-delivery.com",
    siteName: "お花の定期便ナビ",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "お花の定期便おすすめ5選を徹底比較【2026年最新】失敗しない選び方ガイド",
    description:
      "お花の定期便（花のサブスク）人気5社を料金・送料・届き方で徹底比較。あなたにぴったりのサービスが見つかる診断付き。",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${cormorant.variable} ${notoSansJP.className} h-full antialiased`}>
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
