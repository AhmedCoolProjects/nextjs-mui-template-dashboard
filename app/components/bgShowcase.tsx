"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export default function BgShowcase() {
  return (
    <BackgroundGradient
      containerClassName="mt-24 !h-fit w-fit"
      className="rounded-[22px]  p-0  bg-white dark:bg-zinc-900"
    >
      <Image
        src="/images/ai-jina-pro.png"
        alt="AI Jina Pro"
        width={1152}
        height={648}
        className="object-contain rounded-[22px]"
      />
    </BackgroundGradient>
  );
}
