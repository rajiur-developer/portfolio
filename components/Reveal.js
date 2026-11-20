"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Reveal({
  as = "div",
  className = "",
  children,
  delay = 0,
  whileHover,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionElement = motion[as] || motion.div;

  return (
    <MotionElement
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={prefersReducedMotion ? undefined : whileHover}
      {...props}
    >
      {children}
    </MotionElement>
  );
}
