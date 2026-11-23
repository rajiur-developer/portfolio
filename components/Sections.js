"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaCheckCircle,
  FaWordpress,
  FaArrowRight,
} from "react-icons/fa";
import { SiNextdotjs, SiSupabase, SiMongodb } from "react-icons/si";
import Reveal from "./Reveal";

const skills = [
  { icon: <FaHtml5 />, name: "HTML", description: "Structure web pages with semantic and accessible markup.", percent: 90 },
  { icon: <FaCss3Alt />, name: "CSS", description: "Style layouts, animations, and responsive interfaces.", percent: 85 },
  { icon: <FaBootstrap />, name: "Bootstrap", description: "Build responsive UI quickly with components and utilities.", percent: 88 },
  { icon: <FaJs />, name: "JavaScript", description: "Add interactive behavior and dynamic features to websites.", percent: 75 },
  { icon: <FaReact />, name: "React", description: "Create reusable components and interactive interfaces.", percent: 80 },
  { icon: <SiNextdotjs />, name: "Next.js", description: "Build modern React applications with routing and framework features.", percent: 70 },
  { icon: <SiMongodb />, name: "MongoDB", description: "Work with collections, documents, and flexible data structures.", percent: 65 },
  { icon: <SiSupabase />, name: "InsForge", description: "Explore backend services for app data and authentication workflows.", percent: 65 },
  { icon: <SiSupabase />, name: "Supabase", description: "Use hosted database, auth, and backend tools in applications.", percent: 70 },
  { icon: <FaGitAlt />, name: "Git", description: "Track changes and manage development history with version control.", percent: 80 },
  { icon: <FaGitAlt />, name: "GitHub", description: "Host repositories and collaborate through commits and pull requests.", percent: 85 },
];

const stats = [
  { value: 1000, suffix: "+", label: "Hours of hands-on coding", decimals: 0 },
  { value: 8, suffix: "", label: "Featured web projects", decimals: 0 },
  { value: 20, suffix: "+", label: "Practice projects completed", decimals: 0 },
  { value: 1.5, suffix: " yrs", label: "Front-end development journey", decimals: 1 },
];

function AnimatedCounter({ value, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(prefersReducedMotion ? value : 0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setCount(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCount(latest),
    });
    return () => controls.stop();
  }, [isInView, prefersReducedMotion, value]);

  const formatted = count.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return <strong ref={ref}>{formatted}{suffix}</strong>;
}

const projects = [
  { title: "Savar Dental Care", href: "https://doctors-dental.netlify.app/", description: "A welcoming, straightforward website concept for a dental clinic.", image: "/images/projectImg/dant-care.png", tags: ["HTML", "CSS", "JavaScript"] },
  { title: "Weather App", href: "https://rajiur-weather.netlify.app/", description: "A focused weather experience for checking current conditions.", image: "/images/projectImg/weather-img.png", tags: ["JavaScript", "API", "CSS"] },
  { title: "Todo List", href: "https://rajiur-todo.netlify.app/", description: "A lightweight task manager built around a clear daily workflow.", image: "/images/projectImg/todo-Img.png", tags: ["React", "JavaScript", "CSS"] },
  { title: "Quiz App", href: "https://rajiur-quiz.netlify.app/", description: "An interactive quiz app for learning and testing knowledge.", image: "/images/projectImg/quiz-app.webp", tags: ["React", "JavaScript", "CSS"] },
  { title: "Portfolio UI/UX", href: "https://rajiur-portfolio.netlify.app/", description: "A personal portfolio showcasing selected design and development work.", image: "/images/projectImg/portfolio-Img.png", tags: ["HTML", "CSS", "JavaScript"] },
  { title: "Bangladesh Liberation War 1971", href: "https://rajiur-developer.github.io/LiberationWar/", description: "An informational experience centered on an important part of history.", image: "/images/projectImg/Lebaretion-Img.png", tags: ["HTML", "CSS", "Bootstrap 5"] },
  { title: "Agriculture Hub", href: "https://rajiur-developer.github.io/agriHub/", description: "A digital space for sharing useful agriculture resources and information.", image: "/images/projectImg/Agri-Img.png", tags: ["React", "CSS", "JavaScript"] },
  { title: "Resturent", href: "https://rajiur-developer.github.io/resturent/", description: "A polished web concept for a contemporary dining brand.", image: "/images/projectImg/resturent.png", tags: ["HTML", "CSS", "Bootstrap 5"] },
];

export function Intro() {
  return (
    <section id="about" className="section section-band">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-copy">
            <span className="eyebrow">A little about me</span>
            <h2>Building useful things for the web.</h2>
            <p>I build responsive and interactive web interfaces using HTML, CSS, Bootstrap, JavaScript, React, and Next.js. I focus on clean code, practical functionality, and user-friendly design.</p>
            <p>I also work with MongoDB, Supabase, InsForge, Git, and GitHub, alongside WordPress customization and graphic design. I keep improving through hands-on projects and continuous learning.</p>
          </Reveal>
          <Reveal className="about-image">
            <img src="/images/profile.png" alt="Rajiur Rahman working on a laptop" loading="lazy" />
          </Reveal>
        </div>
        <div className="stats" aria-label="Experience and project highlights">
          {stats.map((stat, index) => (
            <Reveal as="div" className="stat" key={stat.label} delay={index * 0.07}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section container">
      <Reveal className="section-heading">
        <span className="eyebrow">What I work with</span>
        <h2>Skills &amp; capabilities</h2>
        <p>My development toolkit, skill by skill.</p>
      </Reveal>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Reveal as="article" className="skill" key={skill.name} delay={index * 0.04} whileHover={{ y: -4 }}>
            <div className="skill-topline">
              <h3>{skill.icon}{skill.name}</h3>
              <span className="skill-percent">{skill.percent}%</span>
            </div>
            <p className="skill-description">{skill.description}</p>
            <div className="skill-meter" role="progressbar" aria-label={skill.name} aria-valuenow={skill.percent} aria-valuemin="0" aria-valuemax="100">
              <span style={{ width: `${skill.percent}%` }} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
export function Projects() {
  return (
    <section id="projects" className="section section-band">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Selected work</span>
          <h2>Projects I&apos;ve explored</h2>
          <p>A selection of practice and client-focused work across web applications, personal sites, and digital experiences.</p>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal as="article" className="project" key={project.title} delay={index * 0.07} whileHover={{ y: -4 }}>
              <div className="project-preview" aria-hidden="true">
                <div className="preview-window">
                  <div className="preview-content project-preview-content">
                    <img className="project-preview-image" src={project.image} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {project.href ? (
                  <a className="btn btn-secondary btn-small project-button mt-2" href={project.href} target="_blank" rel="noreferrer">View Project <FaArrowRight /></a>) : (
                  <button className="btn btn-secondary btn-small project-button" type="button" disabled title="Project URL not provided">View Project <FaArrowRight /></button>
                )}
                <a className="project-link" href="#contact">Discuss a similar project <FaArrowRight /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Details() {
  return (
    <section id="experience" className="section container">
      <div className="experience-layout">
        <Reveal className="experience-intro">
          <span className="eyebrow">Experience &amp; growth</span>
          <h2>Curiosity, craft, and continuous learning.</h2>
          <p>I turn ideas into clean, responsive web applications.</p>
          <div className="story-note">I keep growing through hands-on projects, thoughtful collaboration, and continuous learning.</div>
        </Reveal>
        <div className="timeline">
          <Reveal as="article" className="timeline-item">
            <div className="timeline-heading">
              <div>
                <h3>Frontend Developer Intern</h3>
                <h4>European IT Institute</h4>
              </div>
              <span className="timeline-date">Dates not specified</span>
            </div>
            <ul>
              <li>Built responsive interfaces with React and Bootstrap.</li>
              <li>Integrated APIs in collaboration with the backend team.</li>
              <li>Worked with teammates using Git and GitHub.</li>
            </ul>
          </Reveal>
          <Reveal as="article" className="timeline-item">
            <div className="timeline-heading">
              <div>
                <h3>Independent projects &amp; learning</h3>
                <h4>Front-End Development</h4>
              </div>
              <span className="timeline-date">Ongoing</span>
            </div>
            <ul>
              <li>Build web experiences with HTML, CSS, JavaScript, React, and Next.js.</li>
              <li>Practice responsive design and reusable interface development.</li>
              <li>Explore backend services, authentication, and databases.</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
