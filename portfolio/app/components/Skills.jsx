import React from "react";
import {
  Code,
  Palette,
  Database,
  Smartphone,
  Zap,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    icon: Code,
    name: "HTML & CSS",
    description: "Semantic HTML, modern CSS, Flexbox, Grid, and clean layouts",
  },
  {
    icon: Zap,
    name: "JavaScript",
    description:
      "Core JavaScript, ES6+, DOM manipulation, basic async patterns",
  },
  {
    icon: Palette,
    name: "React",
    description: "Functional components, hooks, props, basic state management",
  },
  {
    icon: Database,
    name: "Backend Fundamentals",
    description:
      "Basic Node.js concepts, REST APIs, and understanding how data flows",
  },
  {
    icon: Smartphone,
    name: "Responsive Design",
    description:
      "Mobile-first layouts, media queries, and practical responsiveness",
  },
  {
    icon: GitBranch,
    name: "Git & GitHub",
    description:
      "Version control, branching, commits, and managing personal projects",
  },
];
function Skills() {
  return (
    <div className="mx-auto bg-[#111111] text-white py-24">
      <div
        className="max-w-6xl mx-auto
"
      >
        <h1 className="text-5xl font-bold text-center mb-12 ">Skills</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="p-6 sm:p-7 md:p-8 rounded-lg bg-[#0B0B0B] border border-[#222222] hover:border-[#A8C5E8] transition-colors duration-300 group"
              >
                <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mb-3 sm:mb-4 text-[#A8C5E8] group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {skill.name}
                </h3>
                <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
