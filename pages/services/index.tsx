import SEO from "@/components/common/SEO";
import { NextPage } from "next";

import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceDetail from "@/components/services/ServiceDetail";
import ServiceCTA from "@/components/services/ServiceCTA";
import { services } from "@/components/services/data";
import PageBanner from "@/components/banner/PageBanner";

const ServicesPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Dịch vụ thiết kế website, phát triển web app, e-commerce - BH Hoang"
        description="Khám phá các dịch vụ thiết kế website, phát triển web app, e-commerce, bảo trì và nâng cấp hệ thống của BH Hoang. Đội ngũ chuyên nghiệp, giải pháp tối ưu cho doanh nghiệp."
        keywords="dịch vụ thiết kế website, phát triển web app, e-commerce, bảo trì website, agency"
      />
      <PageBanner
        description={"Các dịch vụ chuyên nghiệp của chúng tôi"}
        image={"/images/services/web-design/hero.png"}
        title={"Dịch vụ"}
      />
      <ServiceOverview services={services} />
      {services.map((service, index) => (
        <ServiceDetail key={service.id} index={index} service={service} />
      ))}
      <ServiceCTA />
    </>
  );
};

export default ServicesPage;
