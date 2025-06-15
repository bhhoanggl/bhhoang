import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

import Container from "@/components/common/Container";
import ImageOptimize from "@/components/common/ImageOptimize";
import Typography from "@/components/common/Typography";
import DefaultLayout from "@/layouts/default";

export default function Error404() {
    return (
        <DefaultLayout>
            <Container>
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
                        className="mt-6 btn btn-primary"
                    >
                        <Typography as="span" className="flex items-center">
                            <IconArrowLeft size={24} className="mr-2" />
                            Về trang chủ
                        </Typography>
                    </Link>
                </div>
            </Container>
        </DefaultLayout>
    );
}
