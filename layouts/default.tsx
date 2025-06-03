import { Link } from "@heroui/link";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Head } from "./head";
import { Sidebar } from "@/components/navbar/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    const sidebarElement = document.querySelector('.sideBar');
    const overlayElement = document.querySelector('.sidebar-overlay');
    sidebarElement?.classList.toggle('active');
    overlayElement?.classList.toggle('active');
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Head />
      <div className="relative flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-0 sm:pl-[285px] overflow-x-hidden">
          {children}
        </main>
        <button
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 bg-[#141313] text-white rounded-full shadow-lg sm:hidden hover:bg-gray-800 transition-colors duration-200"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>
    </>
  );
}
