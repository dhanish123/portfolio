"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "Langages : Next js, Tailwind Css, Javascript",
    image: "/images/projects/pf.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    // previewUrl: "/",
  },
  {
    id: 2,
    title: "Netflix React",
    description: "Langages : React , HTML, CSS, Javascript",
    image: "/images/projects/n.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhanish123/Netflix-React",
    // previewUrl: "/",
  },
  {
    id: 2,
    title: "Employee Management System In React ",
    description: "Langages : React , HTML, CSS, Javascript",
    image: "/images/projects/EMS.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhanish123/EmployeeManagementSystem-React",
    // previewUrl: "/",
  },


  {
    id: 4,
    title: "GitHub Dashboard In React",
    description: "Langages : React , HTML, CSS, Javascript",
    image: "/images/projects/gi.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhanish123/React-Github-Dashboard",
    // previewUrl: "/",
  },

  {
    id: 5,
    title: "Restaurant App In React",
    description: "Langages : React , HTML, CSS, Javascript",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dhanish123/Restaurant-App-React",
    // previewUrl: "/",
  },
  {
    id: 6,
    title: "GOOGLE ANALYTICS 4",
    description: "Using GA4 to track user behavior, analyze data, and create reports that help businesses improve user experiences while respecting privacy.",
    image: "/images/projects/ga.png",
    tag: ["All", "GA4"],
    gitUrl: "/",
    // previewUrl: "/",
  },
  {
    id: 7,
    title: "Google Tag Manager",
    description: "Set up tags, triggers, and integrated GA4 through Google Tag Manager to track interactions and improve analytics insights",
    image: "/images/projects/gtm.png",
    tag: ["All", "GA4"],
    gitUrl: "/",
    // previewUrl: "/",
  },
  {
    id: 8,
    title: "Looker Studio",
    description: "Using Looker Studio to build interactive dashboards and visualizations, turning complex data into actionable insights",
    image: "/images/projects/l.png",
    tag: ["All", "GA4"],
    gitUrl: "/",
    // previewUrl: "/",
  },

];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVarients = {
    initial: { opacity: 0, y: 20 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="services">
      <h2 className="text-center text-4xl font-bold mt-4 tracking-custom" style={{ fontStyle: 'oblique' }}>My Services</h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white  py-6">
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "All"}
          name="All"
        />
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "Web"}
          name="Web"
        />
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "GA4"}
          name="GA4"
        />
      </div>
      {/* <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12"> */}

      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVarients}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
