import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconBrandDribbble, IconBrandBehance, IconBrandInstagram } from "@tabler/icons-react";
import styles from "./home.module.sass";
import Container from "@/components/common/Container";

export default function Home() {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <Container className="min-h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left Content */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col"
                >
                    <motion.div variants={textVariants} className="space-y-4">
                        <motion.h2 variants={textVariants} className="text-2xl font-medium">
                            MY NAME
                        </motion.h2>
                        <motion.h1 variants={textVariants} className={`text-6xl font-bold leading-tight ${styles.gradientText}`}>
                            IS FAWZI<br />SAYED...
                        </motion.h1>
                        <motion.div variants={textVariants} className="flex items-center space-x-2">
                            <span className="text-2xl italic font-medium">Product Designer</span>
                            <span className="text-xl">based in Egypt</span>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={textVariants} className="mt-8">
                        <Link
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                            Let's talk with me ↗
                        </Link>
                    </motion.div>

                    <motion.div variants={textVariants} className="mt-12 space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-lg">+20 11 43 63 73 41</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-lg">fawzisayed1209@gmail.com</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                    className="relative"
                >
                    <div className={styles.profileImage}>
                        <Image
                            src="/profile.jpg"
                            alt="Fawzi Sayed"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -right-4 top-4">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="text-2xl"
                        >
                            ✧
                        </motion.div>
                    </div>
                    <div className="absolute right-0 bottom-12">
                        <div className={styles.decorativeDot}></div>
                    </div>

                    {/* Social Links */}
                    <motion.div
                        variants={textVariants}
                        className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4"
                    >
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-600 transition-colors">
                            <IconBrandInstagram size={24} />
                        </Link>
                        <Link href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-600 transition-colors">
                            <IconBrandDribbble size={24} />
                        </Link>
                        <Link href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-600 transition-colors">
                            <IconBrandBehance size={24} />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </Container>
    );
}; 