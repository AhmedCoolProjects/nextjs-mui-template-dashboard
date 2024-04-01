import { Metadata } from "next";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import BgShowcase from "./components/bgShowcase";

export const metadata: Metadata = {
  title: "Jina Templates | jina.pro",
  description: ".",
};

export default function LandingPage() {
  return (
    <div className="bg-landing-bg min-h-screen font-landing ">
      <Hero />
      <div className="flex flex-col items-center w-full">
        <BgShowcase />
      </div>
    </div>
  );
}
