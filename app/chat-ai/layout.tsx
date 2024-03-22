import type { Metadata } from "next";
import { Sidebar } from "./components/sidebar";
import Image from "next/image";
import UpgradeButton from "./components/upgradeButton";
import InputPrompt from "./components/inputPrompt";

export const metadata: Metadata = {
  title: "AI Assistant",
  description: ".",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="hidden md:block">
          <div className="bg-[#F0F1F2]">
            <div className="grid lg:grid-cols-5 h-screen max-h-screen">
              <Sidebar />
              <div className="col-span-3 relative lg:col-span-4 ">
                {children}
                <InputPrompt />
              </div>
            </div>
            <UpgradeButton />
          </div>
        </div>
      </body>
    </html>
  );
}
