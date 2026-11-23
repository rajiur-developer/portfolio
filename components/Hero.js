"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const roles = ["Web Developer", "Website Engineer", "Front-End Developer", "Backend Developer"];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [role, setRole] = useState(roles[0]);
  const enterFromLeft = prefersReducedMotion ? false : { opacity: 0, x: -18 };
  const enterFromRight = prefersReducedMotion ? false : { opacity: 0, x: 18 };

  useEffect(() => {
    if (prefersReducedMotion) {
      setRole(roles[0]);
      return;
    }

    let roleIndex = 0;
    let characterIndex = roles[0].length;
    let deleting = false;
    let timeout;

    const typeNextCharacter = () => {
      const currentRole = roles[roleIndex];

      if (!deleting && characterIndex < currentRole.length) {
        characterIndex += 1;
        setRole(currentRole.slice(0, characterIndex));
        timeout = setTimeout(typeNextCharacter, 95);
        return;
      }

      if (!deleting) {
        deleting = true;
        timeout = setTimeout(typeNextCharacter, 1200);
        return;
      }

      if (characterIndex > 0) {
        characterIndex -= 1;
        setRole(currentRole.slice(0, characterIndex));
        timeout = setTimeout(typeNextCharacter, 45);
        return;
      }

      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      timeout = setTimeout(typeNextCharacter, 250);
    };

    timeout = setTimeout(typeNextCharacter, 1400);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  return (
    <section id="home" className="hero container">
      <motion.div
        className="hero-copy"
        initial={enterFromLeft}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow">Front-End Developer</span>
        <span>Hi, I&apos;m<br /></span>
        <h1><span>Rajiur Rahman.</span></h1>
        <h2 aria-label={roles.join(", ")}>
          <span className="hero-role" aria-hidden="true">{role}</span>
        </h2>
        <p>I build modern, responsive websites with HTML, CSS, Bootstrap, JavaScript, React, and Next.js. I also work with MongoDB, Supabase, InsForge, WordPress, and Git & GitHub to create practical, user-friendly web experiences.</p>
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
