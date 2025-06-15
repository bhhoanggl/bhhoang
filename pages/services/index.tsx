import { NextPage } from 'next';
import Head from 'next/head';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceOverview from '@/components/services/ServiceOverview';
import ServiceDetail from '@/components/services/ServiceDetail';
import ServiceCTA from '@/components/services/ServiceCTA';
import { services } from '@/components/services/data';
import PageBanner from '@/components/banner/PageBanner';

const ServicesPage: NextPage = () => {
    return (
        <>
            <PageBanner title={'Dịch vụ'} description={'Các dịch vụ chuyên nghiệp của chúng tôi'} image={'/images/services/web-design/hero.png'} />
            <ServiceOverview services={services} />
            {services.map((service, index) => (
                <ServiceDetail key={service.id} service={service} index={index} />
            ))}
            <ServiceCTA />
        </>
    );
};

export default ServicesPage; 