import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  href?: string;
}

const Logo = ({
  width = 100,
  height = 100,
  className = "",
  href = "/",
}: LogoProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const LogoImage = (
    <Image
      priority
      alt="BH Hoang Studio Logo"
      className={className}
      height={height}
      src={isDark ? "/logo-white.svg" : "/logo.svg"}
      width={width}
    />
  );

  if (href) {
    return (
      <Link className="inline-block" href={href}>
        {LogoImage}
      </Link>
    );
  }

  return LogoImage;
};

export default Logo;
