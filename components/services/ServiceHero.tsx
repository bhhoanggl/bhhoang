import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const ServiceHero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        {isMounted ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dịch vụ của chúng tôi
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Chúng tôi cung cấp các giải pháp chuyên nghiệp để đáp ứng mọi nhu
              cầu của bạn
            </p>
            <Link
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300"
              href="/contact"
            >
              Liên hệ Ngay
            </Link>
          </motion.div>
        ) : (
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dịch vụ của chúng tôi
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Chúng tôi cung cấp các giải pháp chuyên nghiệp để đáp ứng mọi nhu
              cầu của bạn
            </p>
            <Link
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-300"
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

export default ServiceHero;
