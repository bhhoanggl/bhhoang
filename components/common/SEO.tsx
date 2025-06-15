import Head from "next/head";
import { useRouter } from "next/router";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
}

export default function SEO({
    title = "BH Hoang - Dịch vụ thiết kế và phát triển website chuyên nghiệp",
    description = "BH Hoang - Dịch vụ thiết kế và phát triển website chuyên nghiệp. Chúng tôi cung cấp các giải pháp web toàn diện cho doanh nghiệp của bạn.",
    keywords = "thiết kế website, phát triển website, web development, web design, digital agency",
    ogImage = "/assets/images/og-image.jpg",
    ogType = "website",
    twitterCard = "summary_large_image",
}: SEOProps) {
    const router = useRouter();
    const canonicalUrl = `https://bhhoang.netlify.app${router.asPath}`;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Additional Meta Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="Vietnamese" />
            <meta name="revisit-after" content="7 days" />
        </Head>
    );
} 