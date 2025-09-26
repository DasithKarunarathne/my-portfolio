import React from "react";
import { Element } from "react-scroll";
import { Github, ExternalLink } from "lucide-react";

const Project = ({ title, description, role, outcome, stack, image, github, live, caseStudy }) => (
  <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={`${title} project thumbnail`} className="h-full w-full object-cover" />
    </div>

    <div className="p-6">
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{description}</p>

      <div className="mb-4">
        <h4 className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Role:</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
      </div>

      <div className="mb-4">
        <h4 className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Outcome:</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{outcome}</p>
      </div>

      <div className="mb-6">
        <h4 className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">Tech Stack:</h4>
        <div className="flex flex-wrap gap-1">
          {stack.map((tech, i) => (
            <span
              key={i}
              className="inline-block rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            <Github className="mr-1 h-4 w-4" />
            GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            <ExternalLink className="mr-1 h-4 w-4" />
            Live Demo
          </a>
        )}
        {caseStudy && (
          <a
            href={caseStudy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            <ExternalLink className="mr-1 h-4 w-4" />
            Case Study
          </a>
        )}
      </div>
    </div>
  </div>
);

export const Projects = () => {
  const projects = [
    {
      title: "SkillLink",
      description: "Local skills & job platform",
      role:
        "Designed auth, multi-role dashboards (job seeker / employer / admin), profile CRUD, job posts, filtering.",
      outcome: "Robust auth flow, responsive UI, clean REST endpoints.",
      stack: ["React", ".NET 8", "PostgreSQL", "JWT", "BCrypt", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1470&auto=format&fit=crop",
      github: "https://github.com/username/skilllink",
      live: "https://skilllink-demo.example.com",
    },
    {
      title: "Life on Land",
      description: "Wildlife & forest protection mobile app",
      role: "Personas & user stories, reporting flows, alert UX, evidence capture.",
      outcome: "Clear incident reporting, improved information flow for users in the field.",
      stack: ["React Native", "Node/Express", "Offline notes", "Push alerts"],
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1632&auto=format&fit=crop",
      github: "https://github.com/username/life-on-land",
      live: "https://figma.com/file/life-on-land-prototype",
    },
    {
      title: "EcoMarineWay",
      description: "Marine Protected Area reporting & map views",
      role: "Incident forms, map overlays, data visualization and basic analytics.",
      outcome: "Guided report submission; cleaner data for analysis.",
      stack: ["Next.js", "FastAPI", "MongoDB", "Map views", "Data viz"],
      image:
        "https://images.unsplash.com/photo-1498623116890-37e912163d5d?q=80&w=1470&auto=format&fit=crop",
      github: "https://github.com/username/ecomarineway",
      live: "https://ecomarineway.example.com",
    },
    {
      title: "ICAO Store UX",
      description: "E-commerce redesign for aviation publications",
      role: "Information architecture, high-fidelity UI, cart/checkout UX, heuristics review.",
      outcome: "Reduced friction in browsing and purchasing; improved clarity & accessibility.",
      stack: ["React", "Tailwind", "Accessibility", "Checkout flow"],
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1470&auto=format&fit=crop",
      caseStudy: "https://example.com/icao-case-study",
      github: "https://github.com/username/icao-store",
    },
    {
      title: "Verifibee",
      description: "Identity verification microservice",
      role: "Domain models, OTP verification, repository pattern, JSON (un)marshalling.",
      outcome: "Secure, modular verification pipeline.",
      stack: ["Go", "Event-driven", "MySQL", "JWT", "Encryption"],
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
      github: "https://github.com/username/verifibee",
    },
  ];

  return (
    <Element name="projects">
      + <section id="projects" className="py-24 scroll-mt-24 md:scroll-mt-28 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};
