"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Marquee from "react-fast-marquee";
import {
  FaRegUser,
  FaPhoneAlt,
  FaEnvelope,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <Marquee direction="right">
        <div className="inline-block  animate-marquee">
          <Image
            src="/images/react.svg"
            alt="React"
            width={80}
            height={80}
            className="inline-block rounded mx-4"
          />
          <Image
            src="/images/git.svg"
            alt="Github"
            width={80}
            height={80}
            className="inline-block rounded mx-4"
          />
          <Image
            src="/images/GA4.png"
            alt="Google Analytics 4"
            width={180}
            height={180}
            className="inline-block rounded mx-4"
          />
          <Image
            src="/images/html.svg"
            alt="HTML"
            width={80}
            height={80}
            className="inline-block rounded mx-4"
          />
          <Image
            src="/images/sass.png"
            alt="SCSS"
            width={80}
            height={80}
            className="inline-block rounded mx-4"
          />
          <Image
            src="/images/css.svg"
            alt="CSS"
            width={80}
            height={80}
            className="inline-block rounded mx-4"
          />
          <Image
            src="/images/js.png"
            alt="JavaScript"
            width={100}
            height={100}
            className="inline-block rounded mx-4"
          />
          <Image
            src="/images/bootstrap.svg"
            alt="Bootstrap"
            width={80}
            height={80}
            className="inline-block rounded mx-4"
          />

          <Image
            src="/images/vitejs.svg"
            alt="vitejs"
            width={80}
            height={80}
            className="inline-block rounded mx-4"
          />
          <Image
            src="/images/materialui.svg"
            alt="materialui"
            width={80}
            height={80}
            className="inline-block rounded mx-4"
          />
          <Image
            src="/images/tailwind.svg"
            alt="Tailwind CSS"
            width={80}
            height={80}
            className="inline-block rounded mx-4"
          />

          <Image
            src="/images/next.png"
            alt="Next.js"
            width={80}
            height={80}
            className="inline-block rounded mx-4"
          />
        </div>
      </Marquee>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BTech Computer Science</li>
        <li>Higher Secondary School</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>GA4 Certification</li>
        <li>MEARN Stack Certification</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Experience Card 1 */}
        <div className=" bg-gray-800 p-4 rounded-lg text-white">
          <div className="flex items-center mb-2">
            <h3 className=" text-xl font-bold mr-2">2023 - present</h3>
          </div>
          <p className="mb-6 ">Frontend Developer</p>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>{" "}
            {/* Added margin to separate the dot from text */}
            <p className="w-full">StratAgile Private Limited</p>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div className=" bg-gray-800 p-4 rounded-lg text-white">
          <div className="flex items-center mb-2">
            <h3 className=" text-xl font-bold mr-2">2022 - 2023</h3>
          </div>

          <p className="mb-6 ">Frontend Developer</p>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>{" "}
            {/* Added margin to separate the dot from text */}
            <p className="w-full">
              Standered Chartered Bank via StratAgile Private Limited
            </p>
          </div>
        </div>

        {/* Experience Card 3 */}
        <div className=" bg-gray-800 p-4 rounded-lg text-white">
          <div className="flex items-center mb-2">
            <h3 className=" text-xl font-bold mr-2">2022 -2023</h3>
          </div>

          <p className="mb-6 ">Google Analytics 4</p>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>{" "}
            {/* Added margin to separate the dot from text */}
            <p className="w-full">StratAgile Private Limited</p>
          </div>
        </div>

        {/* Experience Card 4 */}
        <div className=" bg-gray-800 p-4 rounded-lg text-white">
          <div className="flex items-center mb-2">
            <h3 className=" text-xl font-bold mr-2">2022</h3>
          </div>

          <p className="mb-6 ">MEA(R)N Stack Web Development</p>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>{" "}
            {/* Added margin to separate the dot from text */}
            <p className="w-full">Luminar Technolab , Kochi</p>
          </div>
        </div>

        {/* Add more experience cards here (following the same structure) */}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="About Me"
          width={500}
          height={500}
          className="rounded-[28px]"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-[12px]">
            {/* I am a passionate React developer with [X years] of experience
            building dynamic, responsive web applications. My expertise lies in
            creating seamless user interfaces, optimizing performance, and
            ensuring high-quality code. I have a strong foundation in
            JavaScript, HTML, CSS, and have extensive experience with modern
            libraries like React.js, Redux, and Next.js. */}
            I&apos;m a Front End Developer specializing in building visually stunning
            and intuitive websites with React and other modern
            technologies. Experienced in using GA4 to track user behavior and
            enhance user privacy.
          </p>
          {/* Contact Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 text-left mt-4 ">
            {/* Left side: Name, Email, Education */}
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2 mb-4">
                <FaRegUser className="text-red-500" />
                <p>Dhanish Mohammed C</p>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <FaEnvelope className="text-red-500" />
                <p className="md:break-all">dhanishmohammed6253@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <FaGraduationCap className="text-red-500" />
                <p>BTECH Computer Science</p>
              </div>
            </div>

            {/* Right side: Phone, Date of Birth, Address */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaPhoneAlt className="text-red-500" />
                <p>+91 9495661814</p>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <FaCalendarAlt className="text-red-500" />
                <p>Born on 21 June, 1999</p>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <FaMapMarkerAlt className="text-red-500" />
                <p>Malappuram , kerala , India</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            {/* <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton> */}
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
