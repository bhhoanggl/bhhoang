import { motion } from "framer-motion";
import Link from "next/link";

import ImageOptimize from "../common/ImageOptimize";

import { fadeIn } from "@/lib/animations";

interface PageBannerProps {
  title: string;
  description: string;
  image: string;
  breadcrumbs?: {
    label: string;
    href: string;
  }[];
  cta?: {
    text: string;
    href: string;
  };
  imagePosition?: "left" | "right" | "background";
  theme?: "light" | "dark";
}

export default function PageBanner({
  title,
  description,
  image,
  breadcrumbs,
  cta,
  imagePosition = "right",
  theme = "light",
}: PageBannerProps) {
  const textColorClass = theme === "light" ? "text-gray-900" : "text-white";
  const bgColorClass = theme === "light" ? "bg-white" : "bg-gray-900";

  const renderContent = () => (
    <motion.div
      animate="visible"
      className="flex flex-col max-w-xl"
      initial="hidden"
      variants={fadeIn}
    >
      {breadcrumbs && (
        <div className="flex items-center space-x-2 mb-6">
          <Link
            className={`text-sm hover:underline ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}
            href="/"
          >
            Trang chủ
          </Link>
          {breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span
                className={
                  theme === "light" ? "text-gray-400" : "text-gray-500"
                }
              >
                /
              </span>
              <Link
                className={`text-sm hover:underline ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}
                href={item.href}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}

      <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${textColorClass}`}>
        {title}
      </h1>
      <p
        className={`text-lg mb-8 ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}
      >
        {description}
      </p>

      {cta && (
        <Link
          className={`inline-flex items-center px-6 py-3 rounded-lg transition-colors ${
            theme === "light"
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-white text-black hover:bg-gray-100"
          }`}
          href={cta.href}
        >
          {cta.text} ↗
        </Link>
      )}
    </motion.div>
  );

  if (imagePosition === "background") {
    return (
      <div className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <ImageOptimize
            alt={title}
            className="object-cover w-full h-full"
            src={image}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          {renderContent()}
        </div>
      </div>
    );
  }

  return (
    <div className={`${bgColorClass} py-20 page-banner pl-[285px] shadow-lg`}>
      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            imagePosition === "left" ? "flex-row-reverse" : ""
          }`}
        >
          {imagePosition === "left" ? (
            <>
              <motion.div
                animate="visible"
                className="relative aspect-w-5 aspect-h-4 rounded-lg overflow-hidden"
                initial="hidden"
                variants={fadeIn}
              >
                <ImageOptimize
                  alt={title}
                  className="object-cover"
                  src={image}
                />
              </motion.div>
              {renderContent()}
            </>
          ) : (
            <>
              {renderContent()}
              <motion.div
                animate="visible"
                className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
                initial="hidden"
                variants={fadeIn}
              >
                <ImageOptimize
                  alt={title}
                  className="object-cover"
                  src={image}
                />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
