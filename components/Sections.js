import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaDatabase,
  FaWordpress,
  FaArrowRight,
} from "react-icons/fa";
import { SiNextdotjs, SiSupabase, SiMongodb } from "react-icons/si";
import Reveal from "./Reveal";

const skills = [
  { icon: <FaHtml5 />, name: "HTML", description: "Semantic, accessible page structure.", capabilities: ["Semantic HTML", "Accessibility", "SEO basics"] },
  { icon: <FaCss3Alt />, name: "CSS", description: "Responsive layouts and refined UI styling.", capabilities: ["Responsive design", "CSS animation", "UI styling"] },
  { icon: <FaBootstrap />, name: "Bootstrap", description: "Consistent, mobile-first component layouts.", capabilities: ["Bootstrap 5", "Grid system", "Components"] },
  { icon: <FaJs />, name: "JavaScript", description: "Interactive, data-driven front-end features.", capabilities: ["ES6+", "Async / Fetch", "DOM & APIs"] },
  { icon: <FaReact />, name: "React", description: "Reusable components and stateful interfaces.", capabilities: ["Hooks & state", "Reusable UI", "API integration"] },
  { icon: <SiNextdotjs />, name: "Next.js", description: "Production-ready React applications.", capabilities: ["App Router", "Server components", "SEO"] },
  { icon: <FaDatabase />, name: "Insforge", description: "Backend services for modern web applications.", capabilities: ["Database", "Authentication", "Storage"] },
  { icon: <SiSupabase />, name: "Supabase", description: "Postgres-powered app backend and APIs.", capabilities: ["PostgreSQL", "Auth", "Realtime"] },
  { icon: <SiMongodb />, name: "MongoDB", description: "Flexible document databases and data models.", capabilities: ["Document models", "CRUD", "Atlas"] },
  { icon: <FaWordpress />, name: "WordPress", description: "Flexible, content-focused websites.", capabilities: ["Theme updates", "Plugin setup", "Site management"] },
  { icon: <FaGitAlt />, name: "Git & GitHub", description: "Clear, collaborative version control.", capabilities: ["Git workflows", "Pull requests", "Collaboration"] },
];

const stats = [
  ["1,000+", "Hours of coding practice"],
  ["8", "Real-world mini projects"],
  ["20+", "Small projects built"],
  ["1.5 yrs", "Learning web development"],
];

const projects = [
  { title: "Weather App", href: "", description: "A focused weather experience for checking current conditions.", mark: "☼", tags: ["JavaScript", "API", "CSS"] },
  { title: "Todo List", href: "", description: "A lightweight task manager built around a clear daily workflow.", mark: "✓", tags: ["React", "JavaScript", "CSS"] },
  { title: "Portfolio UI/UX", href: "", description: "A personal portfolio showcasing selected design and development work.", mark: "R", tags: ["HTML", "CSS", "JavaScript"] },
  { title: "Bangladesh Liberation War 1971", href: "", description: "An informational experience centered on an important part of history.", mark: "1971", tags: ["HTML", "CSS", "Bootstrap 5"] },
  { title: "Agriculture Hub", href: "", description: "A digital space for sharing useful agriculture resources and information.", mark: "⌁", tags: ["React", "CSS", "JavaScript"] },
  { title: "The Gilded Olive", href: "", description: "A polished web concept for a contemporary dining brand.", mark: "G", tags: ["HTML", "CSS", "Bootstrap 5"] },
  { title: "Savar Dental Care", href: "", description: "A welcoming, straightforward website concept for a dental clinic.", mark: "+", tags: ["HTML", "CSS", "JavaScript"] },
];

export function Intro() {
  return (
    <section id="about" className="section section-band">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-copy">
            <span className="eyebrow">A little about me</span>
            <h2>Building useful things for the web.</h2>
            <p>I&apos;m a front-end developer focused on creating responsive, thoughtful user interfaces. I work across HTML, CSS, JavaScript, and React, and enjoy bringing designs to life with clean, maintainable code.</p>
            <p>My experience includes WordPress customization, graphic design, and collaborating with teams to deliver polished web experiences. I&apos;m continuing to grow my skills through hands-on projects and learning.</p>
          </Reveal>
          <Reveal className="about-image">
            <img src="/images/profile.png" alt="Rajiur Rahman working on a laptop" loading="lazy" />
          </Reveal>
        </div>
        <div className="stats" aria-label="Experience and project highlights">
          {stats.map(([value, label], index) => (
              <Reveal as="div" className="stat" key={label} delay={index * 0.07}>
              <strong>{value}</strong>
              <span>{label}</span>
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
        <p>A practical toolkit for designing, building, and improving modern web experiences.</p>
      </Reveal>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Reveal as="article" className="skill" key={skill.name} delay={index * 0.06} whileHover={{ y: -4 }}>
            <h3>{skill.icon}{skill.name}</h3>
            <p>{skill.description}</p>
            <ul>{skill.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
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
                  <div className="preview-bar"><i /><i /><i /></div>
                  <div className="preview-content">
                    <div className="preview-lines"><i /><i /><i /></div>
                    <div className="preview-graphic">{project.mark}</div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {project.href ? (
                  <a className="btn btn-secondary btn-small project-button" href={project.href} target="_blank" rel="noreferrer">View Project <FaArrowRight /></a>
                ) : (
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
