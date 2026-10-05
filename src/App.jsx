import { useEffect, useRef, useState } from "react";
import {
  profile, technical, soft, education, projects, experience,
  creativeSkills, designs, languages,
} from "./data.js";

const links = [
  ["home", "Home"], ["about", "About"], ["skills", "Skills"], ["education", "Education"],
  ["projects", "Projects"], ["experience", "Experience"], ["creative", "Design"], ["contact", "Contact"],
];

/* Image with graceful fallback when the file is not added yet */
function Img({ src, alt, fallback, className }) {
  const [ok, setOk] = useState(true);
  return ok ? (
    <img className={className} src={src} alt={alt} onError={() => setOk(false)} />
  ) : (
    <div className={`${className || ""} img-fallback`} aria-label={alt}>{fallback}</div>
  );
}

/* Fade in when scrolled into view */
function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShow(true), io.disconnect()), { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${show ? "in" : ""} ${className}`}>{children}</div>;
}

function Section({ id, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="wrap">
        <Reveal>
          <h2>{title}</h2>
          {intro && <p className="intro">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" className="logo">Asra<span>.</span></a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <i /><i /><i />
        </button>
        <nav className={open ? "open" : ""}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

const roles = ["Web Developer", "Graphic Designer", "HNDIT Undergraduate"];

function Typer() {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  useEffect(() => {
    const done = n === roles[i].length;
    const t = setTimeout(() => {
      if (done) { setN(0); setI((i + 1) % roles.length); } else setN(n + 1);
    }, done ? 1400 : 70);
    return () => clearTimeout(t);
  }, [n, i]);
  return <><span>{roles[i].slice(0, n)}</span><b className="caret" /></>;
}

function ScrollBar() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const f = () => setW((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return <div className="progress" style={{ width: `${w}%` }} />;
}

function Marquee() {
  const items = [...technical, ...creativeSkills];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">{[...items, ...items].map((s, i) => <span key={i}>{s}</span>)}</div>
    </div>
  );
}

function Hero() {
  const parts = profile.name.split(" ");
  const last = parts.pop();
  const spot = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const stats = [[projects.length, "Web projects"], [technical.length, "Technical skills"], [languages.length, "Languages"]];
  return (
    <section id="home" className="hero" onMouseMove={spot}>
      <div className="wrap hero-in">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>
          <h1><span>{parts.join(" ")}</span><span className="outline">{last}</span></h1>
          <p className="role"><Typer /></p>
          <p className="tagline">{profile.tagline}</p>
          <p className="lead">
            I build web applications with HTML, CSS, JavaScript, PHP and MySQL, and design posters and social media
            graphics that get noticed.
          </p>
          <div className="btns">
            <a className="btn primary" href="#projects">View My Projects</a>
            <a className="btn" href={profile.cv} download>Download CV</a>
            <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="stats">
            {stats.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}
          </div>
        </div>
        <div className="hero-photo">
          <div className="arch"><Img src={profile.photo} alt={profile.name} fallback="AP" className="photo" /></div>
          <svg className="spin" viewBox="0 0 120 120" aria-hidden="true">
            <defs><path id="circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
            <text><textPath href="#circ">WEB DEVELOPER • GRAPHIC DESIGNER • </textPath></text>
          </svg>
          <div className="chip c1">&lt;/&gt; Code</div>
          <div className="chip c2">Design</div>
        </div>
      </div>
    </section>
  );
}

const Badge = ({ children, tone }) => <span className={`badge ${tone || ""}`}>{children}</span>;

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid2">
        <Reveal className="card">
          <h3>Technical</h3>
          <div className="badges">{technical.map((s) => <Badge key={s}>{s}</Badge>)}</div>
        </Reveal>
        <Reveal className="card">
          <h3>Soft skills</h3>
          <div className="badges">{soft.map((s) => <Badge key={s} tone="soft">{s}</Badge>)}</div>
        </Reveal>
      </div>
    </Section>
  );
}

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((it) => (
        <Reveal key={it.title} className="t-item">
          <span className="dot" />
          <p className="period">{it.period}</p>
          <h3>{it.title}</h3>
          <p className="place">{it.place}</p>
          {it.details.length > 0 && (
            <div className="badges">{it.details.map((d) => <Badge key={d} tone="soft">{d}</Badge>)}</div>
          )}
        </Reveal>
      ))}
    </div>
  );
}

function ProjectCard({ p }) {
  return (
    <Reveal className="card project">
      <h3>{p.title}</h3>
      <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
      <div className="badges">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
      {(p.liveUrl || p.githubUrl) && (
        <div className="btns">
          {p.liveUrl && <a className="btn primary sm" href={p.liveUrl} target="_blank" rel="noreferrer">Live Demo</a>}
          {p.githubUrl && <a className="btn sm" href={p.githubUrl} target="_blank" rel="noreferrer">GitHub</a>}
        </div>
      )}
    </Reveal>
  );
}

function Creative() {
  return (
    <section id="creative" className="section creative">
      <div className="wrap">
        <Reveal>
          <h2>Creative &amp; Graphic Design</h2>
          <p className="intro">Beyond code, I create promotional posters and social media designs for real customers.</p>
          <div className="badges">{creativeSkills.map((s) => <Badge key={s} tone="pink">{s}</Badge>)}</div>
        </Reveal>
        <div className="pins">
          {designs.map((d, i) => (
            <Reveal key={d.title} className={`pin r${i % 3}`}>
              <Img src={d.img} alt={d.title} fallback="Add design" className="pin-img" />
              <p><b>{d.title}</b><small>{d.type}</small></p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
    ["Email", profile.email, `mailto:${profile.email}`],
    ["Location", profile.location, null],
    ["GitHub", "github.com/asra1206/asra", profile.github],
  ];
  return (
    <Section id="contact" title="Contact" intro="I'm looking for an industrial training placement. Let's talk.">
      <div className="grid4">
        {items.map(([k, v, href]) => (
          <Reveal key={k} className="card contact">
            <small>{k}</small>
            {href ? <a href={href} target={k === "GitHub" ? "_blank" : undefined} rel="noreferrer">{v}</a> : <p>{v}</p>}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <>
      <ScrollBar />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Section id="about" title="About me">
          <Reveal><p className="about">{profile.summary}</p></Reveal>
        </Section>
        <Skills />
        <Section id="education" title="Education"><Timeline items={education} /></Section>
        <Section id="projects" title="Projects" intro="Web systems built with my HNDIT studies.">
          <div className="grid2">{projects.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
        </Section>
        <Section id="experience" title="Work experience">
          <Timeline items={[{ title: experience.role, place: experience.company, period: experience.period, details: [] }]} />
          <Reveal className="card exp-points">
            <ul>{experience.points.map((x) => <li key={x}>{x}</li>)}</ul>
          </Reveal>
        </Section>
        <Creative />
        <Section id="languages" title="Languages">
          <div className="grid3">
            {languages.map((l) => (
              <Reveal key={l.name} className="card">
                <h3>{l.name}</h3>
                <p className="place">{l.level}</p>
                <div className="bar"><i style={{ width: `${l.pct}%` }} /></div>
              </Reveal>
            ))}
          </div>
        </Section>
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap">
          <p>&copy; {new Date().getFullYear()} {profile.name}. Built with React.</p>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </>
  );
}
