"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const enterFromLeft = prefersReducedMotion ? false : { opacity: 0, x: -18 };
  const enterFromRight = prefersReducedMotion ? false : { opacity: 0, x: 18 };

  return (
    <section id="home" className="hero container">
      <motion.div
        className="hero-copy"
        initial={enterFromLeft}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow">Front-End Developer</span>
        <h1>Hi, I&apos;m<br /><span>Rajiur Rahman.</span></h1>
        <h2>I build thoughtful digital experiences.</h2>
        <p>I create responsive, accessible web interfaces that help ideas feel clear, useful, and effortless to use.</p>
        <div className="hero-buttons">
          <motion.a href="#projects" className="btn btn-primary" whileHover={prefersReducedMotion ? undefined : { y: -1 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}>Explore my work <FaArrowRight /></motion.a>
          <motion.a href="#about" className="btn btn-secondary" whileHover={prefersReducedMotion ? undefined : { y: -1 }} whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}>More about me</motion.a>
        </div>
      </motion.div>
      <motion.div
        className="hero-visual"
        initial={enterFromRight}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div className="avatar-frame" whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }} transition={{ duration: 0.28, ease: "easeOut" }}>
          <Image src="/images/Hero-img.png" width={420} height={420} alt="Rajiur Rahman, front-end developer" className="avatar" priority />
        </motion.div>
        <span className="availability">Based in Bangladesh</span>
      </motion.div>
    </section>
  );
}
