import { motion } from "framer-motion";
import { IconPhone, IconMail, IconMapPin } from "@tabler/icons-react";
import { useState } from "react";

import Container from "../common/Container";

import Typography from "@/components/common/Typography";
import { fadeIn } from "@/lib/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "website",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic here
    // For now, just reset the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "website",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="py-20 bg-gray-50 pl-[285px]" id="contact">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <h2 className="text-4xl font-bold mb-4">Liên hệ với chúng tôi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hãy để lại thông tin, chúng tôi sẽ liên hệ và tư vấn giải pháp phù
            hợp nhất cho doanh nghiệp của bạn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
          >
            <form
              className="bg-white rounded-lg p-8 shadow-lg"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="name"
                  >
                    Họ và tên
                  </label>
                  <input
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="phone"
                  >
                    Số điện thoại
                  </label>
                  <input
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-2"
                    htmlFor="service"
                  >
                    Dịch vụ quan tâm
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="website">Website doanh nghiệp</option>
                    <option value="ecommerce">
                      Website thương mại điện tử
                    </option>
                    <option value="webapp">Web Application</option>
                    <option value="maintenance">Bảo trì & nâng cấp</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="message"
                >
                  Nội dung
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary w-full" type="submit">
                <Typography as="span" className="text-white">
                  Gửi thông tin
                </Typography>
              </button>
            </form>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-8 shadow-lg"
            initial="hidden"
            variants={fadeIn}
            viewport={{ once: true }}
            whileInView="visible"
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
                    12 Nguyễn Văn Giai, Đakao, Q.1
                    <br />
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
