import React from "react";
import { ArrowRight, MenuIcon } from "lucide-react";
import Image from "next/image";

const Headers = () => {
  return (
    <header className="sticky top-0 border-b z-20">
      <div className="py-3 bg-black text-white text-sm flex items-center justify-center gap-3">
        <p className="text-white/60 hidden md:block">
          streamline your workflow and your productivity
        </p>
      </div>
      <div className="py-5 px-3 backdrop-blur-sm">
        <div className="items-center justify-between px-5 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
            <Image src="/logosaas.png" alt="logo" width={40} height={40} />
            <p className="text-2xl font-extrabold ml-2">OUTBREAK</p>
            </div>
            <MenuIcon className="w-5 h-5 m-2 md:hidden" />
            <nav className="hidden md:flex gap-7 text-black/60 items-center">
              <a href="">About</a>
              <a href="">features</a>
              <a href="">customers</a>
              <a href="">help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
