"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const prefersReducedMotion = useReducedMotion();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme = savedTheme === "light" ? "light" : "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  return (
    <motion.header
      className="nav"
      initial={prefersReducedMotion ? false : { y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner">
        <a href="#home" className="logo"><span>R</span>ajiur Rahman</a>
        <div className="nav-actions">
          <nav className="nav-links" aria-label="Main navigation">
            <motion.a href="#about" whileHover={prefersReducedMotion ? undefined : { color: "#d4a6ff" }}>About</motion.a>
            <motion.a href="#skills" whileHover={prefersReducedMotion ? undefined : { color: "#d4a6ff" }}>Skills</motion.a>
            <motion.a href="#projects" whileHover={prefersReducedMotion ? undefined : { color: "#d4a6ff" }}>Projects</motion.a>
            <motion.a href="#experience" whileHover={prefersReducedMotion ? undefined : { color: "#d4a6ff" }}>Experience</motion.a>
          </nav>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>
          <motion.a href="#contact" className="btn btn-primary btn-small" whileHover={prefersReducedMotion ? undefined : { y: -1 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}>Let&apos;s talk</motion.a>
        </div>
      </div>
    </motion.header>
  );
}
