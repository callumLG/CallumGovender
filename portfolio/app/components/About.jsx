import React from "react";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";

function About() {
  const techStack = [
    { name: "Html5", color: "#61DAFB" },
    { name: "CSS3", color: "#61DAFB" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#000000" },
    { name: "Tailwind CSS", color: "#38B2AC" },
  ];
  return (
    <div
      id="about"
      className="w-full h-[70vh] text-white tracking-tight mx-auto my-40 flex flex-col items-center gap-4 max-w-3xl text-center"
    >
      <h1 className="text-5xl font-bold mb-12 text-center">About Me</h1>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <p className="w-screen md:w-150 lg:w-157.5 text-base leading-relaxed opacity-90  px-5  text-center md:text-left ">
          I&apos;m a junior web developer focused on building clean, reliable
          web interfaces using modern tools. I care about structure,
          readability, and writing code that&apos;s easy to maintain. I&apos;m
          actively improving my skills through hands-on projects and learning by
          building, breaking, and fixing real things.
        </p>

        <div className="flex gap-5">
          {/* <Image
            src="/avatar.avif"
            alt="avitar"
            width={200}
            height={200}
            className="w-50  lg:w-100  rounded-full ml-4 border-2 border-gray-800 "
          /> */}
          {/* links */}
          <div className="flex md:flex-col items-center py-12 justify-center gap-3 sm:gap-4 lg:flex-col">
            <h3 className="font-bold text-2xl">My links:</h3>
            <a
              href="https://www.linkedin.com/in/callum-govender-027a9b29a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 sm:px-4 sm:py-2 hover:text-[#A8C5E8] hover:border-[#A8C5E8]/50 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">
                LinkedIn
              </span>
            </a>

            <a
              href="https://github.com/callumLG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-2 sm:px-4 sm:py-2 hover:text-[#A8C5E8] hover:border-[#A8C5E8]/50 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-17 px-4 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          My Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="text-sm sm:text-base rounded-full border border-gray-400 px-4 py-2 hover:border-[#A8C5E8] transition-all duration-300"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
