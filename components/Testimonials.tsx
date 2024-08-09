"use client";

import React from "react";
import avatar1 from "../public/avatar-1.png";
import avatar2 from "../public/avatar-2.png";
import avatar3 from "../public/avatar-3.png";
import avatar4 from "../public/avatar-4.png";
import avatar5 from "../public/avatar-5.png";
import avatar6 from "../public/avatar-6.png";
import avatar7 from "../public/avatar-7.png";
import avatar8 from "../public/avatar-8.png";
import avatar9 from "../public/avatar-9.png";
import Image from "next/image";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    id: 2,
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    id: 3,
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    id: 4,
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    id: 5,
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    id: 6,
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    id: 7,
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    id: 8,
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    id: 9,
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

export const TestimonailCard = (props: {
  className?: string;
  testimonaials: typeof testimonials;
  duration?: number;
  direction?: string;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: props.direction || "-55%",
      }}
      transition={{
        repeat: Infinity,
        duration: props.duration || 10,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 mt-12"
    >
      {[...new Array(12)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonaials.map((item) => (
            <div
              className="pt-10 p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full"
              key={item.id}
            >
              <div>{item.text}</div>
              <div className="flex gap-2 items-center justify-start mt-5">
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  className="h-10 w-10 rounded-full"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col ">
                  <div className="font-medium tracking-tight leading-5">
                    {item.name}
                  </div>
                  <div className="leading-5 tracking-tight">
                    {item.username}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6);
const thirdCol = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-white mb-10 py-10">
      <div className="container">
        <div className="max-w-[540px] max-h-[648px] mx-auto">
          <div className="flex justify-center">
            <div className="text-md inline-flex border border-[#222]/10 px-3 py-2 my-4 tracking-tight rounded-lg">
              Appreciation page
            </div>
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tighter my-3 py-2 bg-gradient-to-b md:bg-gradient-to-b from-slate-900 to-[#001E80] bg-clip-text text-transparent md:text-5xl">
            What our users says about us
          </h2>
          <p className="text-center text-xl md:text-2xl md:leading-10 leading-7 tracking-tight text-[#001E80] mt-2">
            From intutive design to powerfull features, our app has became an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center items-center gap-3 md:gap-5 masks-img-1 mt-10 max-h-[648px] overflow-hidden">
          <TestimonailCard
            testimonaials={firstCol}
            duration={163}
            direction="50%"
          />
          <TestimonailCard
            duration={159}
            testimonaials={secondCol}
            className="gap-4 hidden md:block"
          />
          <TestimonailCard
            duration={168}
            testimonaials={thirdCol}
            direction="50%"
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
