import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const ServiceCTA = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {isMounted ? (
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
        ) : (
          <div className="text-center">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCTA;
