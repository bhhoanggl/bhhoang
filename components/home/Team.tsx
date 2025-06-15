import { motion } from "framer-motion";
import Image from "next/image";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandDribbble,
  IconBrandBehance,
  IconBrandCodepen,
  IconBrandStackoverflow,
} from "@tabler/icons-react";

import Container from "../common/Container";

import { assets } from "@/config/assets";
import { fadeIn } from "@/lib/animations";

type SocialLinks = {
  github?: string;
  linkedin?: string;
  dribbble?: string;
  behance?: string;
  codepen?: string;
  stackoverflow?: string;
  [key: string]: string | undefined;
};

export default function Team() {
  const renderSocialIcons = (socials: SocialLinks) => {
    return Object.entries(socials).map(([platform, url]) => {
      if (!url) return null;
      const iconProps = {
        size: 20,
        className: "text-gray-600 hover:text-blue-600 transition-colors",
      };

      switch (platform) {
        case "github":
          return (
            <a
              key={platform}
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconBrandGithub {...iconProps} />
            </a>
          );
        case "linkedin":
          return (
            <a
              key={platform}
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconBrandLinkedin {...iconProps} />
            </a>
          );
        case "dribbble":
          return (
            <a
              key={platform}
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconBrandDribbble {...iconProps} />
            </a>
          );
        case "behance":
          return (
            <a
              key={platform}
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconBrandBehance {...iconProps} />
            </a>
          );
        case "codepen":
          return (
            <a
              key={platform}
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconBrandCodepen {...iconProps} />
            </a>
          );
        case "stackoverflow":
          return (
            <a
              key={platform}
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconBrandStackoverflow {...iconProps} />
            </a>
          );
        default:
          return null;
      }
    });
  };

  return (
    <section className="py-20 bg-gray-50 pl-[285px]" id="team">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          variants={fadeIn}
          viewport={{ once: true }}
          whileInView="visible"
        >
          <h2 className="text-4xl font-bold mb-4">Đội ngũ của chúng tôi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Đội ngũ chuyên gia giàu kinh nghiệm, luôn nỗ lực mang đến những sản
            phẩm chất lượng cao
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {assets.team.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              custom={index}
              initial="hidden"
              variants={fadeIn}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <div className="aspect-w-1 aspect-h-1 relative">
                <Image
                  fill
                  alt={member.name}
                  className="object-cover"
                  src={member.image}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  {renderSocialIcons(member.socials)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
