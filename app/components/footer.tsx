"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="h-[38rem] w-full bg-landing-bg flex flex-col items-center justify-center overflow-hidden rounded-md">
        <Image
          src="/horizontal-logo.svg"
          alt="Jina.Pro Logo"
          width={400}
          height={300}
          className="-mb-5"
        />
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-landing-bg [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="flex border-t px-12 border-gray-700 flex-row items-center justify-between py-6 w-full">
        <span className="text-gray-400 text-sm">
          Copyright © {new Date().getFullYear()} Jina.Pro team
        </span>
        <div></div>
      </div>
    </div>
  );
}
