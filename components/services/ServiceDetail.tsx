import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Service, colorClasses } from './types';
import { useEffect, useState } from 'react';
import Container from '../common/Container';
import Typography from '../common/Typography';
import ImageOptimize from '../common/ImageOptimize';

interface ServiceDetailProps {
    service: Service;
    index: number;
}

const ServiceDetail = ({ service, index }: ServiceDetailProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const bgColor = colorClasses[service.color];

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : ''} relative overflow-hidden pl-[285px]`}
            style={{
                backgroundImage: `url(${service.bgPattern})`,
                backgroundRepeat: 'repeat',
                backgroundSize: '200px'
            }}
        >
            <Container>
                <div className="absolute inset-0 bg-current opacity-5" />
                <div className="container mx-auto px-4 relative">
                    {/* Service Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <div className="relative h-52 mb-8 rounded-xl overflow-hidden">
                            <ImageOptimize
                                src={service.heroImage}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-5xl mb-6">{service.icon}</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {service.title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {service.description}
                        </p>
                    </motion.div>

                    {/* Features */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                            Tính năng nổi bật
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {service.features.map((feature, featureIndex) => (
                                isMounted ? (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                                        className="bg-white rounded-xl shadow-lg p-6 overflow-hidden"
                                    >
                                        {feature.image && (
                                            <div className="relative aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
                                                <ImageOptimize
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    fill
                                                />
                                            </div>
                                        )}
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ) : (
                                    <div
                                        key={feature.title}
                                        className="bg-white rounded-xl shadow-lg p-6 overflow-hidden"
                                    >
                                        {feature.image && (
                                            <div className="relative w-full h-[200px] mb-6 rounded-lg overflow-hidden">
                                                <Image
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </div>
                                        )}
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Benefits */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                            Lợi ích
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {service.benefits.map((benefit, benefitIndex) => (
                                isMounted ? (
                                    <motion.div
                                        key={benefit.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: benefitIndex * 0.1 }}
                                        className={`bg-white rounded-xl shadow-lg p-6 overflow-hidden`}
                                    >
                                        {benefit.image && (
                                            <div className="relative aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden">
                                                <Image
                                                    src={benefit.image}
                                                    alt={benefit.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </div>
                                        )}
                                        <div className="text-4xl mb-4">{benefit.icon}</div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-gray-600">
                                            {benefit.description}
                                        </p>
                                    </motion.div>
                                ) : (
                                    <div
                                        key={benefit.title}
                                        className={`${bgColor.split(' ')[0].replace('bg-', 'bg-').replace('600', '50')} rounded-xl p-6 overflow-hidden`}
                                    >
                                        {benefit.image && (
                                            <div className="relative w-full h-[200px] mb-6 rounded-lg overflow-hidden">
                                                <Image
                                                    src={benefit.image}
                                                    alt={benefit.title}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </div>
                                        )}
                                        <div className="text-4xl mb-4">{benefit.icon}</div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-gray-600">
                                            {benefit.description}
                                        </p>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mt-16"
                    >
                        <Link
                            href="/contact"
                            className={`btn btn-primary`}
                        >
                            <Typography as="span" className="text-white">
                                Tư vấn {service.title}
                            </Typography>
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default ServiceDetail; 