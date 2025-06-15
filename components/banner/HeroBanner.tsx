import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";
import React from "react";

import ImageOptimize from "../common/ImageOptimize";
import Typography from "../common/Typography";
import Container from "../common/Container";

import { assets } from "@/config/assets";

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
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.2,
      },
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.6, // Start after text animations
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-[auto] sm:min-h-screen flex items-center pt-10 sm:py-0 px-4 sm:px-0 sm:pl-[285px]">
      <Container>
        <Swiper
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          className="w-full h-full min-h-[auto] sm:min-h-screen"
          effect="fade"
          loop={true}
          modules={[EffectFade, Autoplay]}
          speed={1000}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full bg-white min-h-[auto] sm:min-h-screen">
                  {/* Left Content */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        animate="visible"
                        className="flex flex-col h-full justify-center"
                        exit="exit"
                        initial="hidden"
                      >
                        <div className="space-y-2 sm:space-y-4">
                          <motion.h2
                            className="text-xl sm:text-2xl font-medium m-0 p-0"
                            custom={0}
                            variants={textVariants}
                          >
                            {slide.title}
                          </motion.h2>
                          <motion.h1
                            className="primary-title"
                            custom={1}
                            variants={textVariants}
                          >
                            {slide.heading.split("\\n").map((line, i) => (
                              <React.Fragment key={i}>
                                {line}
                                {i < slide.heading.split("\\n").length - 1 && (
                                  <br />
                                )}
                              </React.Fragment>
                            ))}
                          </motion.h1>
                          <motion.div
                            className="flex items-start flex-col sm:flex-wrap flex-nowrap space-x-1 sm:space-x-2"
                            custom={2}
                            variants={textVariants}
                          >
                            <span className="text-xl sm:text-2xl italic font-medium m-0 p-0">
                              {slide.role}
                            </span>
                            <span className="text-base sm:text-xl m-0 p-0">
                              {slide.location}
                            </span>
                          </motion.div>
                        </div>

                        {slide.cta && (
                          <motion.div
                            className="mt-8"
                            custom={3}
                            variants={textVariants}
                          >
                            <Link
                              className="btn btn-primary"
                              href={slide.cta.href}
                            >
                              <Typography as="span" className="text-white">
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
                        animate="visible"
                        className="relative"
                        exit="exit"
                        initial="hidden"
                        variants={imageVariants}
                      >
                        <div className="aspect-w-5 aspect-h-4 relative rounded-lg overflow-hidden">
                          <ImageOptimize
                            fill
                            alt={`${slide.role} - ${slide.location}`}
                            className="object-cover"
                            priority={index === 0}
                            src={assets.hero[index % assets.hero.length].image}
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
