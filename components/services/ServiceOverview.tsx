import { motion } from 'framer-motion';
import { Service } from './types';
import { useEffect, useState } from 'react';
import Container from '../common/Container';

interface ServiceOverviewProps {
    services: Service[];
}

const ServiceOverview = ({ services }: ServiceOverviewProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="py-20 pl-[285px]">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Giải pháp Toàn diện
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Khám phá các dịch vụ chuyên nghiệp của chúng tôi
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        isMounted ? (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group h-full"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </motion.div>
                        ) : (
                            <div
                                key={service.id}
                                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group h-full"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        )
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default ServiceOverview; 