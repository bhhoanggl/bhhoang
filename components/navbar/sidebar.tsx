import { Image } from "@heroui/react";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import ImageOptimize from "../common/ImageOptimize";
import Link from "next/link";
import { IconBrandBehance, IconBrandDribbbleFilled, IconBrandInstagram } from "@tabler/icons-react";

export const Sidebar = () => {

  return (
    <aside className="fixed left-0 top-0 h-full w-[285px] bg-[#141313] flex flex-col">
      <div className="p-[48px] flex flex-col h-full">
        <div className="mb-[102px]">
          <h1 className="text-[30px] font-bold text-center">
            <Link href="/" className="flex items-center">
              <ImageOptimize
                src="/logo.svg"
                alt="Logo"
                width={150}
                height={150}
              />
            </Link>
          </h1>
        </div>

        <nav className="flex flex-col space-y-[20px] gap-5">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center text-[20px] font-normal text-white leading-[22px] uppercase"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col space-y-[12px]">
          <Link href="https://behance.net" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[40px] h-[40px] bg-[#fff] rounded-full">
            <IconBrandBehance color="#141313" />
          </Link>
          <Link href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[40px] h-[40px] bg-[#fff] rounded-full">
            <IconBrandDribbbleFilled color="#141313" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[40px] h-[40px] bg-[#fff] rounded-full">
            <IconBrandInstagram color="#141313" />
          </Link>
          <ThemeSwitch />
        </div>

        <div className="mt-[30px]">
          <p className="text-[16px] font-normal text-white leading-[22px]">
            Copyright ©2024 Fawzi Sayed. All right reserved.
          </p>
        </div>
      </div>
    </aside>
  );
};
