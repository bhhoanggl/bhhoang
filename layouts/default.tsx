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

  return (
    <>
      <Head />
      <div className="relative flex min-h-screen">
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 sm:hidden ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsSidebarOpen(false)}
        />
        <div className={`fixed top-0 left-0 h-full z-30 transition-transform duration-300 sm:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:relative`}>
          <Sidebar />
        </div>
        <main className="flex-1 ml-0 sm:ml-[285px]">
          {children}
        </main>
        <button
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 bg-[#141313] text-white rounded-full shadow-lg sm:hidden hover:bg-gray-800 transition-colors duration-200"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>
    </>
  );
}
