"use client";

import React from "react";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";
import HoverButton from "./hoverButton";
import Navbar from "./navbar";

export default function Hero() {
  return (
    <div className="h-[400px] text-white relative">
      <GlowingStarsBackgroundCard className="absolute top-10 left-0" />
      <div className="absolute -bottom-10 h-12 left-0 right-0  bg-gradient-to-t from-landing-bg z-40 to-transparent"></div>
      <Navbar />
      <div className="flex flex-col items-center text-center justify-center w-full h-full">
        <h1 className="text-7xl font-semibold leading-[82px]">
          Applications that shine <br /> like the stars.
        </h1>
        <p className="text-[#cbd5e1] text-[16px] mt-4">
          The dashboard samples AI powered <br /> you need to transport your
          business to the next level.
        </p>
        <HoverButton />
      </div>
    </div>
  );
}
