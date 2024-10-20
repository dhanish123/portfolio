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
      <div className="space-y-4 mt-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {/* Skills Progress Bars */}
          {[
            {
              src: "/images/html.svg",
              alt: "HTML5",
              name: "HTML5",
              width: "w-[90%]",
              fontSize: "text-[16px]",
            },
            {
              src: "/images/css.svg",
              alt: "CSS3",
              name: "CSS3",
              width: "w-[85%]",
              fontSize: "text-[16px]",
            },
            {
              src: "/images/tailwind.svg",
              alt: "Tailwind CSS",
              name: "Tailwind CSS",
              width: "w-[80%]",
              fontSize: "text-[16px]",
            },
            {
              src: "/images/js.png",
              alt: "JavaScript",
              name: "JavaScript",
              width: "w-[75%]",
              fontSize: "text-[16px]",
            },
            {
              src: "/images/react.svg",
              alt: "React JS",
              name: "React JS",
              width: "w-[80%]",
              fontSize: "text-[16px]",
            },
            {
              src: "/images/bootstrap.svg",
              alt: "Bootstrap",
              name: "Bootstrap",
              width: "w-[80%]",
              fontSize: "text-[16px]",
            },
            {
              src: "/images/GA4.png",
              alt: "GA4",
              name: "GA4",
              width: "w-[60%]",
              fontSize: "text-[16px]",
            },
            {
              src: "/images/git.svg",
              alt: "Git",
              name: "Git",
              width: "w-[60%]",
              fontSize: "text-[16px]",
            },
            {
              src: "/images/materialui.svg",
              alt: "MaterialUI",
              name: "MaterialUI",
              width: "w-[55%]",
              fontSize: "text-[16px]",
            },
            {
              src: "/images/next.png",
              alt: "Next js",
              name: "Next js",
              width: "w-[70%]",
              fontSize: "text-[16px]",
            },
            {
              src: "/images/sass.png",
              alt: "Sass",
              name: "Sass",
              width: "w-[55%]",
              fontSize: "text-[16px]",
            },
            {
              src: "/images/excel.png",
              alt: "Excel",
              name: "Excel",
              width: "w-[55%]",
              fontSize: "text-[16px]",
            },
          ].map((skill, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Image
                src={skill.src}
                alt={skill.alt}
                width={40}
                height={40}
                className="rounded"
              />
              <div className="w-full">
                <div className={`${skill.fontSize} text-white mb-1`}>
                  {skill.name}
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className={`${skill.width} bg-gradient-to-r from-primary-400 to-secondary-600 h-2.5 rounded-full`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // {
  //   title: "Education",
  //   id: "education",
  //   content: (
  //     <ul className="list-disc pl-5">
  //       <li>BTech in Computer Science</li>
  //       <li>Higher Secondary School</li>
  //     </ul>
  //   ),
  // },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5">
        <li>GA4 Certification</li>
        <li>MEARN Stack Certification</li>
      </ul>
    ),
  },
  {
    title: "Experience & Education",
    id: "experience & education",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Experience Card */}
        {[
          {
            year: "2024 - present",
            role: "Frontend Developer",
            company: "StratAgile Private Limited, Kochi",
          },
          {
            year: "2023 - 2024",
            role: "Frontend Developer",
            company: "Standard Chartered Bank via StratAgile Private Limited, Kochi",
          },
          {
            year: "2023 - 2024",
            role: "Google Analytics 4",
            company: "StratAgile Private Limited, Kochi",
          },
          {
            year: "2022 - 2023",
            role: "MEA(R)N Stack Web Development",
            company: "Luminar Technolab, Kochi",
          },
          {
            year: "2018 - 2022",
            role: "BTECH COMPUTER SCIENCE",
            company: "MEA Engineering College , Perinthalmanna , Malappuram",
          },
        ].map((exp, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg text-white">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-bold mr-2">{exp.year}</h3>
            </div>
            <p className="mb-6">{exp.role}</p>
            <div className="flex items-center">
              <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
              <p className="w-full">{exp.company}</p>
            </div>
          </div>
        ))}
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
          <p className="text-base lg:text-lg mb-4">
            I&apos;m a Front End Developer specializing in building visually
            stunning and intuitive websites with React and other modern
            technologies. Experienced in using GA4 to track user behavior and
            enhance user privacy.
          </p>

          {/* Contact Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left mt-4">
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
                <p>BTECH COMPUTER SCIENCE</p>
              </div>
            </div>

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
                <p>Malappuram, Kerala, India</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-start mt-8">
            {["Skills", "Experience & Education"].map((tabName) => (
              <TabButton
                key={tabName}
                selectTab={() => handleTabChange(tabName.toLowerCase())}
                active={tab === tabName.toLowerCase()}
              >
                {tabName}
              </TabButton>
            ))}
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
