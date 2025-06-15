import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Container from "../common/Container";

import { fadeIn } from "@/lib/animations";
import { assets } from "@/config/assets";
import Typography from "@/components/common/Typography";

export default function Portfolio() {
  return (
    <section className="py-20 bg-white pl-[285px]" id="portfolio">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <h2 className="text-4xl font-bold mb-4">Dự án tiêu biểu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Những dự án chúng tôi đã thực hiện cho khách hàng với chất lượng và
            sự hài lòng cao
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assets.projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg"
              custom={index}
              initial="hidden"
              variants={fadeIn}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  fill
                  alt={project.title}
                  className="object-cover transition-transform group-hover:scale-110"
                  src={project.image}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center p-4">
                  <span className="text-sm text-gray-300">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white bg-opacity-20 rounded text-xs text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <Link
                      className="btn btn-primary"
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Typography as="span" className="text-white">
                        Xem chi tiết ↗
                      </Typography>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
