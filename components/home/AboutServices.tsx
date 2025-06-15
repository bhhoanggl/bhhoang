import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import Container from "../common/Container";

const services = [
    {
        icon: "💻",
        title: "Thiết kế Website",
        description: "Thiết kế website chuyên nghiệp, responsive và tối ưu trải nghiệm người dùng"
    },
    {
        icon: "🛍️",
        title: "E-commerce",
        description: "Xây dựng website thương mại điện tử với đầy đủ tính năng quản lý và thanh toán"
    },
    {
        icon: "📱",
        title: "Web Application",
        description: "Phát triển ứng dụng web phức tạp với công nghệ hiện đại"
    },
    {
        icon: "🔧",
        title: "Bảo trì & Nâng cấp",
        description: "Dịch vụ bảo trì, nâng cấp và tối ưu hiệu suất website"
    }
];

export default function AboutServices() {
    return (
        <section className="py-20 bg-gray-50 pl-[285px]" id="about">
            <Container>
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Dịch vụ của chúng tôi</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Chúng tôi cung cấp đầy đủ các dịch vụ thiết kế và phát triển website,
                        giúp doanh nghiệp của bạn tạo dấu ấn mạnh mẽ trên không gian số.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
} 