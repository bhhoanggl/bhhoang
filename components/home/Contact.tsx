import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";
import { useState } from "react";
import Typography from "@/components/common/Typography";
import Container from "../common/Container";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "website",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section className="py-20 bg-gray-50 pl-[285px]" id="contact">
            <Container>
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Liên hệ với chúng tôi</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hãy để lại thông tin, chúng tôi sẽ liên hệ và tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Họ và tên
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Dịch vụ quan tâm
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="website">Website doanh nghiệp</option>
                                        <option value="ecommerce">Website thương mại điện tử</option>
                                        <option value="webapp">Web Application</option>
                                        <option value="maintenance">Bảo trì & nâng cấp</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nội dung
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full"
                            >
                                <Typography as='span' className="text-white">
                                    Gửi thông tin
                                </Typography>
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white rounded-lg p-8 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-6">Thông tin liên hệ</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <IconPhone className="w-6 h-6 text-gray-600 mr-4" />
                                <div>
                                    <h4 className="font-medium">Điện thoại</h4>
                                    <p className="text-gray-600">+84 093 177 1893</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <IconMail className="w-6 h-6 text-gray-600 mr-4" />
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <p className="text-gray-600">bhhoanggl@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <IconMapPin className="w-6 h-6 text-gray-600 mr-4" />
                                <div>
                                    <h4 className="font-medium">Địa chỉ</h4>
                                    <p className="text-gray-600">
                                        12 Nguyễn Văn Giai, Đakao, Q.1<br />
                                        Thành phố Hồ Chí Minh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
} 