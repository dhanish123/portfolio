"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="lg:py-16">
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between md:flex-row md:justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hi, I&apos;m
            </span>
            <br />
         <span class="italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
  Dhanish Mohammed
</span>

          </h1>
          <p className="text-white mb-4 text-2xl lg:text-4xl lg:leading-normal italic text-[23px]">
            I&apos;m a {" "}
            <span className="text-yellow-500">
              <TypeAnimation
                sequence={[
                  "Front End Developer",
                  1000,
                  "React Js Developer",
                  1000,
                  "Google Data Analyst",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </p>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {/* I am a Front End Developer motivated by a passion for creating websites that emphasize visual design and user interaction. */}
            I&apos;m a Front End Developer passionate about interactive, visually
            engaging websites, with GA4 proficiency for tracking and privacy.{" "}
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/dhanish-mohammed-15165222a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
                {/* Hire Me */}
                Connect Me
              </button>
            </a>

            <a
              href="/resume/Dhanish Mohammed latest.pdf" // Path to the CV in the public folder
              download="Dhanish-Mohammed-CV.pdf" // Sets the downloaded file name
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </motion.div>

        {/* Image without the Rotating Dashed Border */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 mb-4 lg:mt-0"
        >
          <div className="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden">
            <Image
              src="/heroImage.png"
              alt="hero image"
              className="absolute inset-0 w-full h-full object-cover"
              width={300}
              height={300}
            />
          </div>
        </motion.div> */}

        {/* Image with Rotating Dashed Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 mb-4 lg:mt-0"
        >
          <div className="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden">
            {/* Main Image */}
            <Image
              // src="/fd.jpg"
              // src="/heroImage.png"
              src="/m.png"


              alt="hero image"
              // className="absolute inset-0 w-full h-full object-cover"
              className="absolute inset-0 w-full object-cover"

              width={300}
              height={300}
            />

            {/* Rotating Dashed Circle Border */}
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="50" // Center X position
                cy="50" // Center Y position
                r="48" // Radius of the circle; adjust if needed
                stroke="#00FFB3" // Border color
                strokeWidth="0.8" // Thickness of the dashed border
                strokeDasharray="5 5" // Dashed pattern (adjust values as needed)
                fill="none"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10, // Duration of one full rotation
                  ease: "linear", // Smooth continuous rotation
                }}
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
