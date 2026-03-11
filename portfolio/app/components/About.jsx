import React from "react";

function About() {
  return (
    <div
      id="about"
      className="text-white tracking-tight mx-auto my-50 flex flex-col items-center gap-4 max-w-3xl text-center"
    >
      <h1 className="text-5xl font-bold mb-12 text-center">About Me</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <p className="text-base  leading-relaxed opacity-90 w-screen px-5 lg:w-250 text-left">
          I'm a junior web developer focused on building clean, reliable web
          interfaces using modern tools. I care about structure, readability,
          and writing code that's easy to maintain. I'm actively improving my
          skills through hands-on projects and learning by building, breaking,
          and fixing real things.
        </p>
        <img
          src="/avitar.avif"
          alt="avitar"
          className="w-50  lg:w-100  rounded-full ml-4 border-2 border-gray-800"
        />
      </div>
    </div>
  );
}

export default About;
