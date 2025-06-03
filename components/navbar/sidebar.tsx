import { siteConfig } from "@/config/site";
import ImageOptimize from "../common/ImageOptimize";
import Link from "next/link";
import { IconBrandBehance, IconBrandDribbbleFilled, IconBrandInstagram } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathName = usePathname();

  return (
    <aside className="sideBar h-full w-[285px] bg-[#141313] flex flex-col shadow-xl">
      <div className="p-6 sm:p-12 flex flex-col h-full">
        <div className="mb-[60px] sm:mb-[102px]">
          <h1 className="text-[30px] font-bold text-center">
            <Link href="/" className="flex items-center justify-center">
              <ImageOptimize
                src="/logo.svg"
                alt="Logo"
                loading="eager"
              />
            </Link>
          </h1>
        </div>

        <nav className="flex flex-col space-y-[20px] gap-5">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-xl font-normal leading-[22px] uppercase nav-link transition-colors duration-200 hover:text-gray-300 ${pathName === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex items-center justify-center sm:justify-start gap-5">
          <Link href="https://behance.net" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center min-w-[40px] h-[40px] bg-[#fff] rounded-full hover hover-gradient">
            <IconBrandBehance color="#141313" />
          </Link>
          <Link href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center min-w-[40px] h-[40px] bg-[#fff] rounded-full hover hover-gradient">
            <IconBrandDribbbleFilled color="#141313" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center min-w-[40px] h-[40px] bg-[#fff] rounded-full hover hover-gradient">
            <IconBrandInstagram color="#141313" />
          </Link>
        </div>

        <div className="mt-[30px]">
          <p className="text-[14px] sm:text-[16px] font-normal text-white leading-[22px] text-center">
            Copyright ©2025 Gà Con.<br /> All right reserved.
          </p>
        </div>
      </div>
    </aside>
  );
};
