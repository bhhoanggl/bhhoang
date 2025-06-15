import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LogoProps {
    width?: number;
    height?: number;
    className?: string;
    href?: string;
}

const Logo = ({ width = 100, height = 100, className = "", href = "/" }: LogoProps) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const LogoImage = (
        <Image
            src={isDark ? "/logo-white.svg" : "/logo.svg"}
            alt="BH Hoang Studio Logo"
            width={width}
            height={height}
            className={className}
            priority
        />
    );

    if (href) {
        return (
            <Link href={href} className="inline-block">
                {LogoImage}
            </Link>
        );
    }

    return LogoImage;
};

export default Logo; 