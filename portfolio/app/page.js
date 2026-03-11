"use client";

import Navbar from "./components/Navbar";
import Greet from "./components/Greet";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import { useEffect } from "react";

export default function Home() {
  //adjust offset for fixed navbar
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navbarHeight = 64; // Adjust this if your navbar height changes
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("href").substring(1);
        scrollTo(target);
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <Greet />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
