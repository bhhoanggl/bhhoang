import { Link } from "@heroui/link";

import { Head } from "./head";

import { Sidebar } from "@/components/navbar/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head />
      <div className="relative flex min-h-screen">
        <Sidebar />
        <main className="flex-1 ml-[285px]">
          {children}
        </main>
      </div>
    </>
  );
}
