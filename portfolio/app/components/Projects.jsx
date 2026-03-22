import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Amazon Price Tracker",
    description:
      "A full-stack web app that monitors Amazon product prices, stores price history, and helps users track when an item drops below a target threshold.",
    tags: ["javascript", "next.js", "react", "tailwindcss", "prisma", "sqlite"],
    github: "https://github.com/callumLG/amazon-productprice-monitor",
    // Add this later if you create an image:
    // image: "/amazon-price-tracker/cover.png",
    status: "In Progress",
  },
  {
    title: "DocFlow",
    description:
      "A study-focused writing tool with a clean interface designed for distraction-free note taking and document editing.",
    image: "/docflow/image.png",
    tags: [
      "javascript",
      "html",
      "css",
      "tailwindcss",
      "react",
      "next.js",
      "framer-motion",
      "lucide-react",
      "tiptap",
    ],
    github: "https://github.com/callumLG/docflow",
  },
  {
    title: "Maze Game",
    description:
      "A simple maze game built with React where players navigate through the maze to reach the end goal.",
    image: "/maze_game/maze_game.png",
    tags: ["react", "tailwindcss", "typescript"],
    github: "https://github.com/callumLG/mazegamep1",
    demo: "https://mazegamep1.vercel.app",
  },
  {
    title: "Responsive Business Website",
    description:
      "A responsive food distribution landing page focused on clean UI design, reusable components, and fast client-side performance.",
    image: "/demoSite/demoSite.png",
    tags: ["javascript", "html", "css", "react"],
    github: "https://github.com/callumLG/react-food-distribution-website",
    demo: "https://react-food-distribution-website.vercel.app",
  },
];

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} preview`}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#111111] via-[#171717] to-[#0B0B0B] px-4 text-center">
      <span className="text-xs uppercase tracking-[0.2em] text-[#A8C5E8]/70 mb-2">
        {project.status || "Project"}
      </span>
      <h4 className="text-lg sm:text-xl font-semibold text-white">
        {project.title}
      </h4>
      <p className="text-xs sm:text-sm text-white/60 mt-2">
        Portfolio preview coming soon
      </p>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center gap-2">
          Projects
          <Link
            href="/projects"
            className="ml-2"
            aria-label="View all projects"
          >
            <MoveRight className="hover:text-[#A8C5E8] transition-colors duration-200 w-8 h-8" />
          </Link>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-4xl overflow-hidden bg-[#111111] border border-[#222222] hover:border-[#A8C5E8] transition-all duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden h-40 sm:h-44 md:h-48 bg-[#0F0F0F]">
                <ProjectImage project={project} />
              </div>

              <div className="p-5 sm:p-6 flex flex-col grow">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="shrink-0 px-2 py-1 text-[10px] sm:text-xs rounded-full border border-[#333333] bg-[#0B0B0B] text-[#A8C5E8]">
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base opacity-80 mb-4 leading-relaxed grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-[#0B0B0B] border border-[#333333] text-[#A8C5E8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 sm:gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg border border-[#A8C5E8] text-[#A8C5E8] hover:bg-[#A8C5E8] hover:text-[#0B0B0B] transition-colors duration-200 text-sm sm:text-base"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    GitHub
                  </motion.a>

                  {project.demo && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#F5A3A3] text-[#0B0B0B] hover:bg-[#E89393] transition-colors duration-200 text-sm sm:text-base"
                    >
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
