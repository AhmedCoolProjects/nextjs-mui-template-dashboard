"use client";

import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex pt-6 flex-col items-center justify-center w-full">
      <div className="md:max-w-6xl w-full flex flex-row items-center justify-between ">
        <Link href="/" passHref className="z-50">
          <Image
            src="/horizontal-logo.svg"
            alt="Jina.Pro Logo"
            width={140}
            height={50}
          />
        </Link>
        <div className="flex flex-row items-center space-x-3">
          <Button
            variant="link"
            className="text-lg text-white hover:no-underline font-medium z-50"
          >
            Features
          </Button>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black z-50  text-white flex items-center space-x-2"
          >
            <span>Get Started</span>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
