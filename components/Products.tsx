"use client"

import React, { useRef } from "react";
import product from "../public/product-image.png";
import pyramid from "../public/pyramid.png";
import tube from "../public/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Products = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['start end', 'end start']
    })
  
    const translateY = useTransform(scrollYProgress, [0,1], [150, -150])

  return (
    <section ref={ref} className="bg-gradient-to-r from-[#FFFFFF] to-[#D2DCFF] py-20 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="text-md inline-flex border border-[#222]/10 px-3 py-2 my-4 tracking-tight rounded-lg">
              Boost your productivity
            </div>
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tighter my-3 py-2 bg-gradient-to-b md:bg-gradient-to-b from-slate-900 to-[#001E80] bg-clip-text text-transparent md:text-5xl">
            A more effective way to track progress
          </h2>
          <p className="text-center text-xl md:text-2xl md:leading-10 leading-7 tracking-tight text-[#001E80] mt-2">
            Effortlessly turn your saas ideas into fully functional, responsive
            SaaS website in just minutes with this template
          </p>
        </div>
        <div className="relative">
          <Image src={product} alt="product-image" className="mt-10" />
          <motion.img
            src={pyramid.src}
            alt="pyramid-image"
            width={240}
            height={240}
            className="mt-10 hidden md:block absolute -right-12 -top-36"
            style={{
                translateY
            }}
          />
          <motion.img
            src={tube.src}
            alt="tube-image"
            width={300}
            className="absolute hidden md:block bottom-24 -left-36"
            style={{
                translateY
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
