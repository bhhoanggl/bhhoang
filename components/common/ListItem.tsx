import React from "react";
import { Link } from "@heroui/link";

interface ListItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  linkClassName?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  href,
  children,
  className,
  linkClassName,
}) => (
  <li className={className}>
    <Link className={linkClassName} href={href}>
      {children}
    </Link>
  </li>
);
