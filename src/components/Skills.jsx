import React from "react";
import { Element } from "react-scroll";

const SkillGroup = ({ title, skills }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 text-sm font-medium shadow-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export const Skills = () => (
  <Element name="skills">
    <section id="skills" className="py-24 scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {skillGroups.map((group, index) => (
              <SkillGroup
                key={index}
                title={group.title}
                skills={group.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  </Element>
);

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: [
      ".NET 8 (C#)",
      "Node/Express",
      "FastAPI",
      "Go (microservices)",
    ],
  },
  {
    title: "DB/Cloud",
    skills: [
      "PostgreSQL/Neon",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Azure",
    ],
  },
  {
    title: "Practices",
    skills: [
      "Agile/Scrum",
      "Unit/Integration Testing",
      "JWT Auth",
      "Accessibility",
    ],
  },
];
