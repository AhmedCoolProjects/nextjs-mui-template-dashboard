import { Metadata } from "next";
import Hero from "./components/hero";
import BgShowcase from "./components/bgShowcase";
import Stacks from "./components/products";
import Footer from "./components/footer";
import { Reviews } from "./components/reviews";
import Sample from "./components/sample";
import { ContactUs } from "./components/contactUs";

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
        <Stacks />
      </div>
      <Sample />
      <Reviews />
      <ContactUs />

      <Footer />
    </div>
  );
}
