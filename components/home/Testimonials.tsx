import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Container from "../common/Container";

import { fadeIn } from "@/lib/animations";
import { assets } from "@/config/assets";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white pl-[285px]" id="testimonials">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <h2 className="text-4xl font-bold mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sự hài lòng của khách hàng là thước đo thành công và động lực phát
            triển của chúng tôi
          </p>
        </motion.div>

        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-slider pb-12"
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          spaceBetween={30}
        >
          {assets.testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="bg-gray-50 p-8 rounded-lg"
                custom={index}
                initial="hidden"
                variants={fadeIn}
                viewport={{ once: true }}
                whileInView="visible"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                    <Image
                      fill
                      alt={testimonial.name}
                      className="object-cover"
                      src={testimonial.image}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
