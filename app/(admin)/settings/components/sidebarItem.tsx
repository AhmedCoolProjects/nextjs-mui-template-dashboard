"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

function SidebarItem({
  title,
  href,
  Icon,
  className,
  onClick,
  to,
}: {
  title: string;
  href?: string;
  Icon?: any;
  className?: string;
  onClick?: () => void;
  to?: string;
}) {
  const pathname = usePathname();

  if (href) {
    return (
      <Link href={href} passHref>
        <Button
          variant={pathname === href ? "secondary" : "ghost"}
          className={cn("w-full mt-1 justify-start pl-2", className)}
        >
          {Icon && <Icon className="mr-3  w-5" />}

          {title}
        </Button>
      </Link>
    );
  } else {
    return (
      <ScrollLink offset={-85} to={to as string} smooth={true} duration={500}>
        <Button
          variant={pathname === href ? "secondary" : "ghost"}
          className={cn("w-full mt-1 justify-start pl-2", className)}
        >
          {Icon && <Icon className="mr-3  w-5" />}

          {title}
        </Button>
      </ScrollLink>
    );
  }
}

export default SidebarItem;
