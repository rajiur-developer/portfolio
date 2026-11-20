"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Navbar() {
  const prefersReducedMotion = useReducedMotion();

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
            <motion.a href="#about" whileHover={prefersReducedMotion ? undefined : { color: "#f8fafc" }}>About</motion.a>
            <motion.a href="#skills" whileHover={prefersReducedMotion ? undefined : { color: "#f8fafc" }}>Skills</motion.a>
            <motion.a href="#projects" whileHover={prefersReducedMotion ? undefined : { color: "#f8fafc" }}>Projects</motion.a>
          </nav>
          <motion.a href="#contact" className="btn btn-primary btn-small" whileHover={prefersReducedMotion ? undefined : { y: -1 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}>Let&apos;s talk</motion.a>
        </div>
      </div>
    </motion.header>
  );
}
