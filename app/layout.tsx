import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '许启征｜平面设计师',
  description: '许启征的个人设计作品集，专注品牌视觉、文旅宣传与新媒体内容设计。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
