import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { assets } from "@/config/assets";
import Container from "../common/Container";

export default function Testimonials() {
    return (
        <section className="py-20 bg-white pl-[285px]" id="testimonials">
            <Container>
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Khách hàng nói gì về chúng tôi</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Sự hài lòng của khách hàng là thước đo thành công và động lực phát triển của chúng tôi
                    </p>
                </motion.div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="testimonials-slider pb-12"
                >
                    {assets.testimonials.map((testimonial, index) => (
                        <SwiperSlide key={testimonial.id}>
                            <motion.div
                                variants={fadeIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={index}
                                className="bg-gray-50 p-8 rounded-lg"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
} 