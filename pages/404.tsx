import ImageOptimize from "@/components/common/ImageOptimize";
import DefaultLayout from "@/layouts/default";
import Link from "next/link";

export default function Error404() {
    return (
        <DefaultLayout>
            <div className="flex items-center justify-center h-screen flex-col">
                <ImageOptimize
                    src="/assets/images/404.png"
                    alt="404 gà con"
                    width={400}
                    height={400}
                    className="mx-auto"
                    lazyLoad={false}
                />
                <p className="mt-4 text-2xl text-gray-800 font-semibold">Không tìm thấy trang!</p>
                <p className="mt-2 text-gray-600">Có vẻ bạn đang lạc vào thế giới chưa được tạo ra 🐣</p>
                <Link
                    href="/"
                    className="mt-6 inline-block rounded-xl bg-yellow-500 text-white px-5 py-2 hover:bg-pink-500 transition"
                >
                    Về trang chủ
                </Link>
            </div>
        </DefaultLayout>
    );
}
