"use client"

import React, { useRef } from "react";
import { Button } from "./ui/button";
import star from "../public/star.png";
import spring from "../public/spring.png";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const CallToAction = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-12 md:py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <div className="flex flex-col justify-center">
            <h2 className="text-center text-3xl font-bold tracking-tighter my-3 py-2 bg-gradient-to-b md:bg-gradient-to-b from-slate-900 to-[#001E80] bg-clip-text text-transparent md:text-5xl">
              Sign-up for free today
            </h2>
            <p className="text-center text-xl md:text-2xl md:leading-10 leading-7 tracking-tight text-[#001E80] mt-2">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </p>
            <motion.img
              src={star.src}
              alt="star-image"
              width={400}
              height={300}
              className="absolute -top-[180px] md:-top-[100px] -left-[350px] md:-left-[400px] lg:-left-[550px]"
              style={{
                translateY
              }}
            />
            <motion.img
              src={spring.src}
              alt="spring-image"
              width={400}
              height={300}
              className="absolute -top-[14px] -right-[450px]"
              style={{
                translateY
              }}
            />
          </div>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <Button variant="default">Get for free</Button>
          <Button variant="ghost">
            Learn more <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
