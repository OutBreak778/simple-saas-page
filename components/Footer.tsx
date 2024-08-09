import Image from "next/image"
import logo from "../public/logosaas.png"
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
        <div className="container">
            <div className="inline-flex relative before:content-[''] before:top-0 before:bottom-0 before:w-full before:blur-lg before:bg-gradient-to-r from-pink-400 via-yellow-400 to-green-500 before:absolute">
            <Image src={logo} alt="logo" width={50} className="relative" />

            </div>
            <nav className="flex flex-col md:flex-row md:justify-center my-5 gap-7 text-white/70 items-center">
              <a href="#">About</a>
              <a href="#">features</a>
              <a href="#">customers</a>
              <a href="#">help</a>
            </nav>
            <p className="mt-6">&copy; 2024 your company name, Inc. All rights reserved</p>
        </div>
    </footer>
)
}

export default Footer