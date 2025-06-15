import React from "react";

import SEO from "@/components/common/SEO";
import HomePage from "./home";

const Home = () => {
  return (
    <>
      <SEO
        title="BH Hoang - Dịch vụ thiết kế và phát triển website chuyên nghiệp"
        description="BH Hoang cung cấp dịch vụ thiết kế website, phát triển web application và các giải pháp digital marketing toàn diện cho doanh nghiệp của bạn."
        keywords="thiết kế website, phát triển website, web development, web design, digital agency, digital marketing"
      />
      <HomePage />
    </>
  );
};

export default Home;
