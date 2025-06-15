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
                <div className="flex h-screen flex-col items-center justify-center">
                    <ImageOptimize
                        alt="404 gà con"
                        className="mx-auto"
                        height={400}
                        lazyLoad={false}
                        src="/assets/images/404.png"
                        width={400}
                    />
                    <p className="mt-4 text-2xl font-semibold text-gray-800">Không tìm thấy trang!</p>
                    <p className="mt-2 text-gray-600">Có vẻ bạn đang lạc vào thế giới chưa được tạo ra 🐣</p>
                    <Link className="mt-6 btn btn-primary" href="/">
                        <Typography as="span" className="flex items-center">
                            <IconArrowLeft className="mr-2" size={24} />
                            Về trang chủ
                        </Typography>
                    </Link>
                </div>
            </Container>
        </DefaultLayout>
    );
}
