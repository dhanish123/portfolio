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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {" "}
              Hello, I'm {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Dhanish Mohammed",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Front End Developer",
                1000,
                "React Js Developer",
                1000,
                "UI Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I’m a  skilled and passionate Front End Developer with experience in creating visually appealing and user-friendly websites      
          </p> */}
          <div>
          <a href="https://www.linkedin.com/in/dhanish-mohammed-15165222a/" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              {/* Hire Me */}
              Connect Me
            </button>
            </a>
            {/* <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white  mt-3">
      <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
        Download CV
      </span>
    </button> */}
            <a
              href="/Resume/DHANISH.pdf" // Path to the CV in the public folder
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
        {/* <motion.div
  initial={{ opacity: 0 , scale:0.5 }}
  animate={{ opacity: 1 , scale:1 }}
  transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
  <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]   relative">
    <Image
      src="/Images/hero-image.png"
      alt="hero image"
      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      // className="absolute inset-0 w-full h-full object-cover"

      width={300}
      height={300}
    // // for my image
    //   width={230}
    //   height={230}
    />
  </div>
</motion.div> */}

        {/* my image */}
        {/* <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="col-span-4 place-self-center mt-4 lg:mt-0"
  >
    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
      <Image
        src="/Images/hero-image3.png"
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
              src="/Images/hero-image.png"
              alt="hero image"
              className="absolute inset-0 w-full h-full object-cover"
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
