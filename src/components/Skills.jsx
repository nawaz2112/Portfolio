import React from 'react';

const skills = [
  "React.js", "Python", "HTML", "CSS", "JavaScript", "Java", "MongoDB"
];

const Skills = () => (
  <section className="py-8 max-w-3xl mx-auto">
    <h3 className="text-2xl font-semibold mb-4">Skills</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-800 dark:text-white">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
