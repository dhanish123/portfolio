import React from 'react';

// SkillBar component to display individual skill
const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded">
        <div
          className="h-full bg-orange-500 rounded"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
