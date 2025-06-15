import { motion } from "framer-motion";
import Link from "next/link";

import Container from "../common/Container";

import { fadeIn } from "@/lib/animations";
import Typography from "@/components/common/Typography";

const pricingPlans = [
  {
    name: "Cơ bản",
    price: "4,990,000",
    description: "Giải pháp tối ưu cho doanh nghiệp nhỏ",
    features: [
      "Thiết kế website responsive",
      "Tối ưu SEO cơ bản",
      "Form liên hệ",
      "Tích hợp mạng xã hội",
      "Bảo hành 6 tháng",
      "Miễn phí hosting 1 năm",
    ],
  },
  {
    name: "Chuyên nghiệp",
    price: "9,990,000",
    description: "Phù hợp cho doanh nghiệp vừa",
    features: [
      "Tất cả tính năng gói Cơ bản",
      "Thiết kế tùy chỉnh",
      "Tối ưu SEO nâng cao",
      "Blog/Tin tức",
      "Quản lý sản phẩm/dịch vụ",
      "Bảo hành 12 tháng",
    ],
  },
  {
    name: "Doanh nghiệp",
    price: "Liên hệ",
    description: "Giải pháp toàn diện cho doanh nghiệp lớn",
    features: [
      "Tất cả tính năng gói Chuyên nghiệp",
      "Tích hợp thanh toán",
      "Quản lý đơn hàng",
      "Tích hợp API tùy chỉnh",
      "Báo cáo phân tích",
      "Bảo hành vĩnh viễn",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white pl-[285px]" id="pricing">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <h2 className="text-4xl font-bold mb-4">Bảng giá dịch vụ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chọn gói dịch vụ phù hợp với nhu cầu của doanh nghiệp bạn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-shadow"
              custom={index}
              initial="hidden"
              variants={fadeIn}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-4">
                {plan.price}
                <span className="text-lg font-normal text-gray-600"> VNĐ</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                className="btn btn-primary w-full flex justify-center"
                href="#contact"
              >
                <Typography as="span" className="text-white">
                  Chọn gói này
                </Typography>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
