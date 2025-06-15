import React from "react";

interface ColProps {
  children: React.ReactNode;
  span?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  full?: boolean;
  className?: string;
}

const Col: React.FC<ColProps> = ({
  children,
  span,
  sm,
  md,
  lg,
  xl,
  full,
  className = "",
}) => {
  const responsiveClasses = [
    full ? "col-span-full" : "",
    span ? `col-span-${span}` : "",
    sm ? `sm:col-span-${sm}` : "",
    md ? `md:col-span-${md}` : "",
    lg ? `lg:col-span-${lg}` : "",
    xl ? `xl:col-span-${xl}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={`${responsiveClasses} ${className}`}>{children}</div>;
};

export default Col;
