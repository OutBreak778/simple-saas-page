"use client"

import React, { useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import cog from "../public/cog.png";
import cylinder from "../public/cylinder.png";
import noodleImg from "../public/noodle.png";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const Hero = () => {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150])
  // useMotionValueEvent(translateY, 'change', (value) => console.log(value))

  return (
    <section ref={ref} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_96%)] overflow-x-clip">
      <div className="container px-5">
        <div className="md:flex items-center justify-between">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-1 py-2 my-4 tracking-tight rounded-lg">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight py-1 bg-gradient-to-b md:bg-gradient-to-b from-slate-900 to-[#001E80] bg-clip-text text-transparent">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010d3e] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts and celebrate your success.
            </p>
 
          </div>
          <div className="mt-20 md:mt-0 md:h-[544px] md:flex-1 relative">
            <motion.img
              src={cog.src}
              alt="hero-image"
              className="md:absolute md:h-[95%] md:w-auto md:max-w-none lg:left-40"
              animate={{
                translateY: [-30, 30]
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut'
              }}
            />
            <motion.img
              src={cylinder.src}
              alt="cylinder image"
              width={180}
              className="hidden md:block bottom-78 -left-26 md:absolute"
              style={{
                translateY: translateY
              }}
            />
            <motion.img
              src={noodleImg.src}
              alt="cylinder image"
              width={200}
              className="hidden xl:block -bottom-24 right-5 rotate-[30deg] md:absolute"
              style={{
                translateY: translateY
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
