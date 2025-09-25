import React from "react";
import { Element } from "react-scroll";
import { GraduationCapIcon, BookOpenIcon } from "lucide-react";

const coursework = [
  "Data Structures & Algorithms",
  "Database Systems",
  "Software Engineering",
  "Web Development",
  "Operating Systems",
  "Computer Networks",
  "Object-Oriented Programming",
  "Project Management",
];

export const Education = () => (
  <Element name="education">
    <section id="education" className="py-24 scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-6 mb-8">
            <div className="flex items-start">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-xl mr-4">
                <GraduationCapIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  BSc (Hons) in Information Technology (Software Engineering)
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">
                  Sri Lanka Institute of Information Technology (SLIIT)
                </p>
                <p className="text-gray-500 dark:text-gray-500">
                  2021 - Present (3rd Year)
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-6">
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              <BookOpenIcon className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
              Key Coursework
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coursework.map((course, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-600 px-4 py-2 rounded-lg text-gray-800 dark:text-gray-200"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Element>
);
