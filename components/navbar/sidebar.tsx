import { siteConfig } from "@/config/site";
import Link from "next/link";
import { IconBrandBehance, IconBrandDribbbleFilled, IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import Logo from "../common/Logo";
import { useEffect, useState } from "react";

export const Sidebar = () => {
  const pathName = usePathname();
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    setActiveHref(pathName || "");
  }, [pathName]);

  const handleOverlayClick = () => {
    const sidebarElement = document.querySelector('.sideBar');
    const overlayElement = document.querySelector('.sidebar-overlay');
    sidebarElement?.classList.remove('active');
    overlayElement?.classList.remove('active');
  };

  return (
    <>
      <div className="z-20 sidebar-overlay" onClick={handleOverlayClick} />
      <aside className="sideBar w-[285px] bg-[#141313] flex flex-col shadow-xl">
        <div className="p-6 sm:p-12 flex flex-col h-full">
          <div className="mb-[60px] sm:mb-[102px]">
            <h1 className="text-[30px] font-bold text-center">
              <Logo href="/" />
            </h1>
          </div>

          <nav className="flex flex-col space-y-[20px] gap-5">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xl font-normal leading-[22px] uppercase nav-link transition-colors duration-200 ${activeHref === item.href ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex items-center justify-center sm:justify-start gap-5">
            <Link href="https://behance.net" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center min-w-[32px] h-[32px] bg-[#fff] rounded-full">
              <IconBrandBehance color="#141313" size={20} />
            </Link>
            <Link href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center min-w-[32px] h-[32px] bg-[#fff] rounded-full">
              <IconBrandDribbbleFilled color="#141313" size={20} />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center min-w-[32px] h-[32px] bg-[#fff] rounded-full">
              <IconBrandFacebook color="#141313" size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center min-w-[32px] h-[32px] bg-[#fff] rounded-full">
              <IconBrandInstagram color="#141313" size={20} />
            </Link>
          </div>

          <div className="mt-[30px]">
            <p className="text-[14px] sm:text-[16px] font-normal text-white leading-[22px] text-center">
              Copyright ©2024 {siteConfig.name}.<br /> All right reserved.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
