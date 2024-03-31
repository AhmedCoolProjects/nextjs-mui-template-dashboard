"use client";

import { Button } from "@/components/ui/button";
import LeftSvg from "@/components/icons/left.svg";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white z-[9999] sticky top-0 flex px-7 py-3 flex-row items-center justify-between border-b border-gray-200">
      <div className="flex flex-row items-center space-x-4">
        <Link href="/mui" passHref>
          <Button
            className="w-8 h-8 p-0 flex flex-col items-center justify-center border border-gray-200 rounded-xl"
            variant="ghost"
          >
            <LeftSvg className="w-5" />
          </Button>
        </Link>
        <h1 className="font-medium  !text-[#020617]">Settings</h1>
      </div>
    </nav>
  );
}

export default Navbar;
