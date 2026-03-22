import React from "react";
import { motion } from "framer-motion";
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

const container = {
  // Parent
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const items = {
  //Children
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

function Skills() {
  return (
    <div id="skills" className="mx-auto bg-[#111111] text-white py-24">
      <div
        className="max-w-6xl mx-auto
"
      >
        <h1 className="text-5xl font-bold text-center mb-12 ">My Skills</h1>
        {/* Parent */}
        <motion.div
          variants={container}
          initial={"hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              // Children
              <motion.div
                variants={items}
                key={skill.name}
                className="rounded-4xl mx-3 p-6 sm:p-7 md:p-8  bg-[#0B0B0B] border-[#222222] hover:border-[#A8C5E8] transition-colors duration-300 group"
              >
                <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mb-3 sm:mb-4 text-[#A8C5E8] group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  {skill.name}
                </h3>
                <p className="text-sm sm:text-base opacity-80 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;

// bg-[#0B0B0B
