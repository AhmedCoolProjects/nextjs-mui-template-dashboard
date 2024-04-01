"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import SmallLogoSvg from "@/components/icons/small-logo.svg";
import Image from "next/image";

export default function HoverButton() {
  return (
    <div className="mt-8 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black z-50  text-white flex items-center space-x-2"
      >
        <Image
          src="/small-logo.svg"
          alt="Jina.Pro Logo"
          width={24}
          height={24}
        />
        <span>Book a demo</span>
      </HoverBorderGradient>
    </div>
  );
}
