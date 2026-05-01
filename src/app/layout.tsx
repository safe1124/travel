import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ソウル4日間旅行ガイド",
  description: "日本から来る友人のためのソウル旅行日程、移動ルート、食事ガイド",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
