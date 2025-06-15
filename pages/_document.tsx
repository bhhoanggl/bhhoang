import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

export default function Document() {
  return (
    <Html suppressHydrationWarning lang="vi">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#141313" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="description" content="BH Hoang - Dịch vụ thiết kế và phát triển website chuyên nghiệp. Chúng tôi cung cấp các giải pháp web toàn diện cho doanh nghiệp của bạn." />
        <meta name="keywords" content="thiết kế website, phát triển website, web development, web design, digital agency" />
        <meta name="author" content="BH Hoang" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BH Hoang" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className={clsx("min-h-screen bg-background antialiased")}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
