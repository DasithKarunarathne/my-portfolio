import React from "react";
import { Element } from "react-scroll";

import { Briefcase } from "lucide-react";

const ExperienceItem = ({ title, duration, description }) => (
  <div className="relative mb-10">
    <div className="absolute left-0 top-1 -ml-3.5 mt-1 rounded-full border-4 border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-900">
      {/* Use your brand accent; requires :root { --accent: #2563EB } in index.css */}
      <Briefcase className="h-6 w-6 text-[var(--accent)] dark:opacity-90" />
    </div>

    <div className="ml-8 border-l-2 border-gray-200 pl-6 pb-4 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{duration}</p>
      <ul className="list-disc space-y-2 pl-4">
        {description.map((item, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const Experience = () => (
  <Element name="experience">
    <section id="experience" className="py-24 scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Experience</h2>
          <div className="relative pl-4">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                title={exp.title}
                duration={exp.duration}
                description={exp.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  </Element>
);

const experiences = [
  {
    title: "Student Team Lead - SLIIT Software Engineering Project",
    duration: "Jan 2023 - Present",
    description: [
      "Led a team of 5 in developing a full-stack job marketplace application using React and .NET.",
      "Implemented Agile methodologies, resulting in on-time delivery of all sprint goals.",
      "Architected the authentication system and role-based access control.",
    ],
  },
  {
    title: "Frontend Developer - University Hackathon",
    duration: "Aug 2022",
    description: [
      "Built a responsive React Native mobile app for wildlife conservation in 48 hours.",
      "Implemented offline-first functionality for users with limited connectivity.",
      "Won 2nd place among 20 competing teams.",
    ],
  },
  {
    title: "IT Volunteer - Local Community Center",
    duration: "Jun 2022 - Aug 2022",
    description: [
      "Developed a simple inventory management system using React and Firebase.",
      "Trained staff on basic system administration and troubleshooting.",
      "Reduced manual record keeping time by 70%.",
    ],
  },
];
