"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { GrInstallOption } from "react-icons/gr";

function PluginCard() {
  return (
    <div className="border border-gray-200 rounded-xl p-4">
      <div className="flex flex-row items-center space-x-4">
        <Image src="/logos/cvemap.png" width={84} height={84} alt="CveMap" />
        <div className="flex flex-col space-y-4 h-full">
          <h1 className="font-semibold text-xl">CVEMap</h1>
          <Button>
            Install
            <GrInstallOption className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
      <div className="flex space-y-8 flex-col items-start mt-4">
        <span className="text-sm">
          Efficiently explore CVE databases, linking vulnerabilities to exploits
          and remediations.
        </span>
        <Link className="text-xs flex flex-row " href="/" passHref>
          View on GitHub
          <FaCode className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default PluginCard;
