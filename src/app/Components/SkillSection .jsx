import React from 'react';
import SkillBar from './SkillBar';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'JavaScript', level: 95 },
    { name: 'React Js', level: 90 },
    { name: 'Node Js', level: 75 },
    { name: 'MongoDB', level: 70 },
  ];

  return (
    <section id="skills" className="text-white p-4">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="w-full max-w-md">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
