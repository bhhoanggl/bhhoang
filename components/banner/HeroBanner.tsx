import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { fadeIn } from "@/lib/animations";
import Link from "next/link";
import ImageOptimize from "../common/ImageOptimize";
import React, { useState } from "react";
import { assets } from "@/config/assets";
import Typography from "../common/Typography";
import Container from "../common/Container";

interface HeroBannerProps {
    slides: {
        title: string;
        heading: string;
        role: string;
        location: string;
        cta?: {
            text: string;
            href: string;
        };
    }[];
}

export default function HeroBanner({ slides }: HeroBannerProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const textVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: custom * 0.2,
            }
        }),
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3
            }
        }
    };

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 1.1
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                delay: 0.6 // Start after text animations
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className="min-h-[auto] sm:min-h-screen flex items-center pt-10 sm:py-0 px-4 sm:px-0 sm:pl-[285px]">
            <Container>
                <Swiper
                    modules={[EffectFade, Autoplay]}
                    effect="fade"
                    speed={1000}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="w-full h-full min-h-[auto] sm:min-h-screen"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full bg-white min-h-[auto] sm:min-h-screen">
                                    {/* Left Content */}
                                    <AnimatePresence mode="wait">
                                        {isActive && (
                                            <motion.div
                                                className="flex flex-col h-full justify-center"
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                            >
                                                <div className="space-y-2 sm:space-y-4">
                                                    <motion.h2
                                                        variants={textVariants}
                                                        custom={0}
                                                        className="text-xl sm:text-2xl font-medium m-0 p-0"
                                                    >
                                                        {slide.title}
                                                    </motion.h2>
                                                    <motion.h1
                                                        variants={textVariants}
                                                        custom={1}
                                                        className="primary-title"
                                                    >
                                                        {slide.heading.split('\\n').map((line, i) => (
                                                            <React.Fragment key={i}>
                                                                {line}
                                                                {i < slide.heading.split('\\n').length - 1 && <br />}
                                                            </React.Fragment>
                                                        ))}
                                                    </motion.h1>
                                                    <motion.div
                                                        variants={textVariants}
                                                        custom={2}
                                                        className="flex items-start flex-col sm:flex-wrap flex-nowrap space-x-1 sm:space-x-2"
                                                    >
                                                        <span className="text-xl sm:text-2xl italic font-medium m-0 p-0">{slide.role}</span>
                                                        <span className="text-base sm:text-xl m-0 p-0">{slide.location}</span>
                                                    </motion.div>
                                                </div>

                                                {slide.cta && (
                                                    <motion.div
                                                        variants={textVariants}
                                                        custom={3}
                                                        className="mt-8"
                                                    >
                                                        <Link
                                                            href={slide.cta.href}
                                                            className="btn btn-primary"
                                                        >
                                                            <Typography as='span' className="text-white">
                                                                {slide.cta.text} ↗
                                                            </Typography>
                                                        </Link>
                                                    </motion.div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Right Content */}
                                    <AnimatePresence mode="wait">
                                        {isActive && (
                                            <motion.div
                                                className="relative"
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                variants={imageVariants}
                                            >
                                                <div className="aspect-w-5 aspect-h-4 relative rounded-lg overflow-hidden">
                                                    <ImageOptimize
                                                        src={assets.hero[index % assets.hero.length].image}
                                                        alt={`${slide.role} - ${slide.location}`}
                                                        fill
                                                        className="object-cover"
                                                        priority={index === 0}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
} 