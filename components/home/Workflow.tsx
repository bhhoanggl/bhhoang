import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import Container from "../common/Container";

const workflowSteps = [
    {
        number: "01",
        title: "Tư vấn & Phân tích",
        description: "Tìm hiểu nhu cầu và mục tiêu của doanh nghiệp, phân tích đối thủ cạnh tranh"
    },
    {
        number: "02",
        title: "Lên kế hoạch",
        description: "Xây dựng kế hoạch chi tiết, thiết kế giao diện và chức năng website"
    },
    {
        number: "03",
        title: "Phát triển",
        description: "Lập trình website với công nghệ hiện đại, tối ưu tốc độ và bảo mật"
    },
    {
        number: "04",
        title: "Kiểm thử",
        description: "Kiểm tra kỹ lưỡng mọi chức năng, đảm bảo website hoạt động hoàn hảo"
    },
    {
        number: "05",
        title: "Triển khai",
        description: "Đưa website lên môi trường thực tế, cấu hình domain và hosting"
    },
    {
        number: "06",
        title: "Hỗ trợ",
        description: "Đào tạo sử dụng, bảo trì và hỗ trợ kỹ thuật thường xuyên"
    }
];

export default function Workflow() {
    return (
        <section className="py-20 bg-gray-50 pl-[285px]" id="workflow">
            <Container>
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Quy trình làm việc</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Quy trình làm việc chuyên nghiệp, minh bạch giúp đảm bảo dự án của bạn được thực hiện đúng tiến độ và chất lượng
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {workflowSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
                        >
                            <div className="text-8xl font-bold text-gray-100 absolute -top-4 -right-4">
                                {step.number}
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
} 