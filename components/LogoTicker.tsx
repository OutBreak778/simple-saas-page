"use client";

import React from "react";
import acmeLogo from "../public/logo-acme.png";
import quantLogo from "../public/logo-quantum.png";
import echoLogo from "../public/logo-echo.png";
import celestLogo from "../public/logo-celestial.png";
import pulseLogo from "../public/logo-pulse.png";
import apexogo from "../public/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageMap = [
  {
    id: 1,
    label: "acmeLogo",
    source: acmeLogo,
  },
  {
    id: 2,
    label: "quantLogo",
    source: quantLogo,
  },
  {
    id: 3,
    label: "echoLogo",
    source: echoLogo,
  },
  {
    id: 4,
    label: "celestLogo",
    source: celestLogo,
  },
  {
    id: 5,
    label: "pulseLogo",
    source: pulseLogo,
  },
  {
    id: 6,
    label: "apexogo",
    source: apexogo,
  },
];

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="flex container overflow-hidden masks-img">
        <motion.div
          className="flex gap-14 pr-14"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {ImageMap.map((item) => (
            <div key={item.id} className="flex flex-none">
              <Image
                src={item.source}
                alt={item.label}
                className="h-9 ml-2 w-auto"
              />
            </div>
          ))}
          {ImageMap.map((item) => (
            <div key={item.id} className="flex flex-none">
              <Image
                src={item.source}
                alt={item.label}
                className="h-9 ml-2 w-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoTicker;
