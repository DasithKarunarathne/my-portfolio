import React from "react";
import { Element } from "react-scroll";
import { AwardIcon, TrophyIcon } from "lucide-react";

const Achievement = ({ title, organization, date, icon }) => {
  const renderIcon = () => {
    switch (icon) {
      case "award":
        return (
          <AwardIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
        );
      case "trophy":
        return (
          <TrophyIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
        );
      case "certificate":
        return (
          <div className="h-5 w-5 text-primary-600 dark:text-primary-400" />
        );
      default:
        return null;
    }
  };
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="flex items-start">
        <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg mr-3">
          {renderIcon()}
        </div>
        <div>
          <h3 className="font-medium text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {organization}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Achievements = () => {
  const achievements = [
    {
      title: "Dean's List - Faculty of Computing",
      organization: "SLIIT",
      date: "2022, 2023",
      icon: "award",
    },
  
  
   
  ];
  return (
    <Element name="achievements">
      <section id="achievements" className="py-24 scroll-mt-24 md:scroll-mt-28 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Achievements & Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Achievement
                  key={index}
                  title={achievement.title}
                  organization={achievement.organization}
                  date={achievement.date}
                  icon={achievement.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};