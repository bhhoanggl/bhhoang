import { motion } from "framer-motion";
import Link from "next/link";
import Container from "../common/Container";

const ServiceCTA = () => {
  return (
    <section className="py-20 bg-white pl-[285px]">
      <Container>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bắt đầu Dự án của Bạn
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Liên hệ với chúng tôi để được tư vấn chi tiết về các dịch vụ
          </p>
          <Link
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300"
            href="/contact"
          >
            Liên hệ Ngay
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServiceCTA;
