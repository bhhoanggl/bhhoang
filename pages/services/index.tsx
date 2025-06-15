import { NextPage } from "next";

import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceDetail from "@/components/services/ServiceDetail";
import ServiceCTA from "@/components/services/ServiceCTA";
import { services } from "@/components/services/data";
import PageBanner from "@/components/banner/PageBanner";

const ServicesPage: NextPage = () => {
  return (
    <>
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
