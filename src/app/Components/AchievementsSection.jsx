"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  {
    ssr: false,
  }
);

const achievementsList = [
  {
    metric: "Years of Experience",
    value: "1.5",
  },
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Technology Used",
    value: "12",
  },
  // {
  //   // prefix: "~",
  //   metric: "Code Commits",
  //   value: "40 ",
  // }
  {
    metric: "Analytics in GA4",
    value: "8",
    postfix: "+"
  }
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-custom-md py-8 sm:px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                   {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseFloat(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 2,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-center">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
