import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Valentines Project",
    description: "A Valentines letter for a special someone",
    image: "/val_proj/valentines_proj.png",
    tags: ["javascript", "html", "css"],
    github: "https://github.com/callumLG/valentines_proj",
  },
  {
    title: "Maze Game",
    description:
      "A simple maze game built with React, where players navigate through a maze to reach the end goal.",
    image: "/maze_game/maze_game.png",
    tags: ["React", "tailwindcss", "typescript"],
    github: "https://github.com/callumLG/mazegamep1",
    demo: "https://mazegamep1.vercel.app",
  },
  {
    title: "Demo Project",
    description: "A demo site to showcase my seo skills",
    image: "/demoSite/demoSite.png",
    tags: ["javascript", "html", "css"],
    github: "https://github.com/callumLG/react-food-distribution-website",
    demo: "https://react-food-distribution-website.vercel.app",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-lg overflow-hidden bg-[#111111] border border-[#222222] hover:border-[#A8C5E8] transition-all duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden h-40 sm:h-44 md:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col grow">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base opacity-80 mb-4 leading-relaxed grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-[#0B0B0B] border border-[#333333] text-[#A8C5E8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg border border-[#A8C5E8] text-[#A8C5E8] hover:bg-[#A8C5E8] hover:text-[#0B0B0B] transition-colors duration-200 text-sm sm:text-base"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#F5A3A3] text-[#0B0B0B] hover:bg-[#E89393] transition-colors duration-200 text-sm sm:text-base"
                    >
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
