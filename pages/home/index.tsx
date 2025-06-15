import SEO from "@/components/common/SEO";
import HeroBanner from "@/components/banner/HeroBanner";
import AboutServices from "@/components/home/AboutServices";
import Contact from "@/components/home/Contact";
import Portfolio from "@/components/home/Portfolio";
import Pricing from "@/components/home/Pricing";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import Workflow from "@/components/home/Workflow";

const heroSlides = [
  {
    title: "CHÀO MỪNG ĐẾN VỚI",
    heading: "BH HOANG\\nSTUDIO",
    role: "Thiết kế & Phát triển Website",
    location: "Chuyên nghiệp - Sáng tạo",
    image: "/images/hero/slide1.jpg",
    cta: {
      text: "Khám phá dịch vụ",
      href: "#services",
    },
  },
  {
    title: "CHÚNG TÔI CUNG CẤP",
    heading: "GIẢI PHÁP\\nTOÀN DIỆN",
    role: "Website - Web App - E-commerce",
    location: "Tối ưu cho doanh nghiệp",
    image: "/images/hero/slide2.jpg",
    cta: {
      text: "Xem bảng giá",
      href: "#pricing",
    },
  },
  {
    title: "CÔNG NGHỆ",
    heading: "HIỆN ĐẠI\\nTIÊN TIẾN",
    role: "Next.js - React - Node.js",
    location: "Tốc độ & Bảo mật cao",
    image: "/images/hero/slide3.jpg",
    cta: {
      text: "Liên hệ ngay",
      href: "#contact",
    },
  },
];

export default function HomePage() {
  return (
    <>
      <SEO
        title="BH Hoang Studio - Thiết kế & Phát triển Website chuyên nghiệp"
        description="Dịch vụ thiết kế website, phát triển web app, e-commerce, tối ưu cho doanh nghiệp. Công nghệ hiện đại, bảo mật, tốc độ cao."
        keywords="thiết kế website, phát triển web, web app, e-commerce, nextjs, react, agency"
      />
      {/* Hero Banner */}
      <HeroBanner slides={heroSlides} />

      {/* About Services Section */}
      <AboutServices />

      {/* Pricing Section */}
      <Pricing />

      {/* Workflow Section */}
      <Workflow />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Team Section */}
      <Team />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />
    </>
  );
}
