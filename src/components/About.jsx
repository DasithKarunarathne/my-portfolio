import React from "react";
import { Element } from "react-scroll";
import { CheckIcon } from "lucide-react";

const highlights = [
  "Agile Team Player",
  "API Design",
  "UI/UX Focused",
  "Continuous Learner",
  "Clean Code Advocate",
  "Problem Solver",
];

export const About = () => (
  <Element name="about">
    <section id="about" className="py-24 scroll-mt-24 md:scroll-mt-28 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm a passionate software engineering student with a focus on
            building practical solutions that solve real problems. I thrive in
            team environments where I can contribute to Agile sprints and ship
            features that enhance usability. My approach combines technical
            excellence with a strong emphasis on clean APIs and intuitive user
            experiences. I'm constantly learning and adapting to new
            technologies while maintaining a solid foundation in software
            engineering principles.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center">
                <CheckIcon className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                <span className="text-gray-800 dark:text-gray-200">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Element>
);
