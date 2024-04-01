"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import InputAce from "@/components/ui/inputAce";

export function ContactUs() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-landing-bg relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl z-10 mx-auto p-4">
        <h1 className="relative font-landing  text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center font-landing relative z-10">
          Welcome to Jina.pro! We are here to help you with any queries you
          have. Please fill out the form below and we will get back to you as
          soon as possible. Jina.pro has got you covered!
        </p>
        <InputAce
          id="firstname"
          className=" !bg-landing-bg"
          placeholder="Email Address"
          type="email"
        />
        <div className="flex flex-row items-end mt-6">
          <button
            disabled={false}
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send &rarr;
            {true && <BottomGradient />}
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
