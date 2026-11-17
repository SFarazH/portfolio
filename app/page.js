"use client";
import { useEffect, useRef, useState } from "react";
import { JOBS, SKILLS, PROJECTS, FILTERS, BINGO, FREE, TICK } from "./data";

const ROLES = ["software engineer", "founder, CliniSync", "ML enthusiast", "chai enthusiast;"];
const LINES = ["Ahh. Adrak wali.", "Careful, it's hot.", "Half glass left. Classic cutting.", "Last sip. Make it count.", "Empty. Tap again for a refill."];
const EMAIL = "syedfarazhasan1@gmail.com";
const WINS = [];
for (let i = 0; i < 4; i++) WINS.push([0, 1, 2, 3].map((k) => i * 4 + k), [0, 1, 2, 3].map((k) => k * 4 + i));
WINS.push([0, 5, 10, 15], [3, 6, 9, 12]);

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function confetti(cv) {
  if (reduced()) return;
  const x = cv.getContext("2d"), W = (cv.width = innerWidth), H = (cv.height = innerHeight);
  const cols = ["#FFC72C", "#D6245F", "#0C8F80", "#1C1848", "#fff"];
  const ps = Array.from({ length: 150 }, (_, i) => ({
    x: W / 2 + (Math.random() - 0.5) * W * 0.3, y: H * 0.55,
    vx: (Math.random() - 0.5) * 16, vy: -Math.random() * 17 - 5,
    s: Math.random() * 8 + 5, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, c: cols[i % 5],
  }));
  const t0 = performance.now();
  (function f(t) {
    x.clearRect(0, 0, W, H);
    ps.forEach((p) => {
      p.vy += 0.42; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      x.save(); x.translate(p.x, p.y); x.rotate(p.r); x.fillStyle = p.c;
      x.fillRect(-p.s / 2, -p.s / 3, p.s, p.s * 0.66); x.restore();
    });
    if (t - t0 < 3200) requestAnimationFrame(f); else x.clearRect(0, 0, W, H);
  })(t0);
}

function Nav({ dark, onBrew }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#top">faraz<b>;</b></a>
        <button className="brew" type="button" aria-pressed={dark} title="Switch between light and dark" onClick={onBrew}>
          brew: {dark ? "kadak" : "light"}
        </button>
        <button className="menu-btn" type="button" aria-expanded={open} aria-controls="links" onClick={() => setOpen(!open)}>
          {open ? "close" : "menu"}
        </button>
        <nav className={"links" + (open ? " open" : "")} id="links" aria-label="Sections" onClick={(e) => e.target.tagName === "A" && setOpen(false)}>
          <a href="#work">work</a>
          <a href="#skills">skills</a>
          <a href="#projects">projects</a>
          <a href="#extras">extras</a>
          <a href="#hire">hire me</a>
          <a href="https://drive.google.com/file/d/1EC_eZv5WPSzCCEONFPvfl5vg8dwWQXTm/view?usp=sharing" target="_blank" rel="noopener">resume ↗</a>
        </nav>
      </div>
    </header>
  );
}

function Hero({ sips, setSips, toast }) {
  const [typed, setTyped] = useState(ROLES[0]);
  const [level, setLevel] = useState(0);
  const [bubble, setBubble] = useState("Cutting chai. Tap me for a sip.");
  const svg = useRef();

  useEffect(() => {
    if (reduced()) return;
    let ri = 0, ci = ROLES[0].length, del = true, t;
    const type = () => {
      if (del) { ci--; if (ci <= 0) { del = false; ri = (ri + 1) % ROLES.length; } }
      else { ci++; if (ci >= ROLES[ri].length) { del = true; setTyped(ROLES[ri]); t = setTimeout(type, 1900); return; } }
      setTyped(ROLES[ri].slice(0, ci));
      t = setTimeout(type, del ? 35 : 70);
    };
    type();
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const move = (e) => {
      const box = svg.current.getBoundingClientRect(), s = box.width / 160;
      svg.current.querySelectorAll(".pupil").forEach((p) => {
        const cx = box.left + +p.getAttribute("cx") * s, cy = box.top + +p.getAttribute("cy") * s;
        const a = Math.atan2(e.clientY - cy, e.clientX - cx);
        p.style.transform = `translate(${Math.cos(a) * 5}px,${Math.sin(a) * 5}px)`;
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const sip = () => {
    if (level >= 5) { setLevel(0); setBubble("Refilled. On the house."); return; }
    setBubble(LINES[level]); setLevel(level + 1); setSips(sips + 1);
    if (sips + 1 === 10) toast("Two cups in. You're basically a regular.");
  };
  const drop = { transform: `translateY(${level * 24}px)` };
  const row = (word) => (
    <span className="row" aria-hidden="true">
      {word.split("").map((c, i) => <span key={i} className={"l" + (c === ";" ? " semi" : "")}>{c}</span>)}
    </span>
  );

  return (
    <div className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow"><span>{typed}</span><span className="caret" aria-hidden="true" /></p>
          <h1 className="name" aria-label="Faraz Hasan">{row("Faraz")}{row("Hasan;")}</h1>
          <p className="lede">I build <b>fintech and healthcare software</b>, now at <b>Joveo</b>, founded <b>CliniSync</b>. Scalable Node backends, clean React, code quality over quantity.</p>
          <div className="cta">
            <a className="btn hot" href="#hire">Play hire-me bingo</a>
            <a className="btn" href="#projects">See projects</a>
            <a className="btn" href="https://github.com/SFarazH" target="_blank" rel="noopener">GitHub ↗</a>
          </div>
        </div>
        <div className="visual">
          <div className="photo"><img src="/img/me.jpg" alt="Faraz Hasan standing outdoors, looking to the side" width="640" height="720" /><span>somewhere without wifi</span></div>
          <button className="cup" type="button" aria-label="Sip the chai" onClick={sip}>
            <svg ref={svg} viewBox="0 0 160 210" aria-hidden="true">
              <g className="steam"><path d="M56 40c-10-10 10-16 0-28" /><path d="M82 40c-10-10 10-16 0-28" /><path d="M108 40c-10-10 10-16 0-28" /></g>
              <defs><clipPath id="glass"><path d="M28 56h104l-13 132q-1 12-13 12H54q-12 0-13-12z" /></clipPath></defs>
              <path d="M28 56h104l-13 132q-1 12-13 12H54q-12 0-13-12z" fill="#fff" fillOpacity=".55" />
              <g clipPath="url(#glass)"><rect id="tea" style={drop} x="0" y="72" width="160" height="140" fill="#C07A35" /><rect style={drop} x="0" y="72" width="160" height="8" fill="#E2A968" /></g>
              <path d="M28 56h104l-13 132q-1 12-13 12H54q-12 0-13-12z" fill="none" stroke="#1C1848" strokeWidth="5" strokeLinejoin="round" />
              <path d="M50 70l8 118M110 70l-8 118" stroke="#1C1848" strokeWidth="2" opacity=".25" />
              <g><circle cx="62" cy="118" r="13" fill="#fff" stroke="#1C1848" strokeWidth="3" /><circle cx="98" cy="118" r="13" fill="#fff" stroke="#1C1848" strokeWidth="3" /><circle className="pupil" cx="62" cy="118" r="5.5" fill="#1C1848" /><circle className="pupil" cx="98" cy="118" r="5.5" fill="#1C1848" /></g>
              <path d="M68 146q12 12 24 0" fill="none" stroke="#1C1848" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </button>
          <p className="bubble" aria-live="polite">{bubble}</p>
        </div>
      </div>
    </div>
  );
}

function Jobs() {
  return (
    <section id="work" className="band-deep">
      <div className="wrap">
        <div className="sec-head"><h2>{"Where I've worked"}</h2><p className="mono">Four stops so far. Two are running right now.</p></div>
        <div className="jobs">
          {JOBS.map((j) => (
            <article className="job" key={j.role + j.co}>
              <div>
                <span className="tag">{j.when}</span><h3>{j.role}</h3><p className="co">{j.co}</p>
                <div className="nums">{j.nums.map((n) => <span className="num" key={n}>{n}</span>)}</div>
              </div>
              <div>
                <ul>{j.top.map((x) => <li key={x}>{x}</li>)}</ul>
                {j.more.length > 0 && <details><summary>more from this role</summary><ul>{j.more.map((x) => <li key={x}>{x}</li>)}</ul></details>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chip({ name, icon }) {
  const ref = useRef();
  const m = useRef({ x: 0, y: 0, sx: 0, sy: 0, on: false });
  useEffect(() => {
    ref.current._reset = () => {
      const c = ref.current;
      m.current.x = m.current.y = 0;
      c.classList.add("back");
      c.style.setProperty("--x", "0px"); c.style.setProperty("--y", "0px"); c.style.removeProperty("--rot");
    };
  }, []);
  const end = () => {
    if (!m.current.on) return;
    m.current.on = false;
    ref.current.classList.remove("drag");
    ref.current.style.setProperty("--rot", (Math.random() * 14 - 7).toFixed(1) + "deg");
  };
  return (
    <span
      ref={ref}
      className="chip"
      onPointerDown={(e) => {
        const c = ref.current, s = m.current;
        s.on = true; s.sx = e.clientX - s.x; s.sy = e.clientY - s.y;
        c.classList.remove("back"); c.classList.add("drag");
        try { c.setPointerCapture(e.pointerId); } catch (_) {}
      }}
      onPointerMove={(e) => {
        const s = m.current;
        if (!s.on) return;
        s.x = e.clientX - s.sx; s.y = e.clientY - s.sy;
        ref.current.style.setProperty("--x", s.x + "px"); ref.current.style.setProperty("--y", s.y + "px");
      }}
      onPointerUp={end}
      onPointerCancel={end}
    >
      <i><img src={`/icons/${icon}.svg`} alt="" /></i>{name}
    </span>
  );
}

function Skills() {
  const jars = useRef();
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <h2>What I work with</h2>
          <p>
            <span className="mono">These are stickers. Drag them wherever you like.</span><br />
            <button className="btn small sun" type="button" style={{ marginTop: 10 }} onClick={() => jars.current.querySelectorAll(".chip").forEach((c) => c._reset())}>Tidy up</button>
          </p>
        </div>
        <div className="jars" ref={jars}>
          {SKILLS.map(([group, items]) => (
            <div className="jar" key={group}>
              <h3>{group}</h3>
              <div className="chips">{items.map(([name, icon]) => <Chip key={name} name={name} icon={icon} />)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Project({ p, hidden }) {
  const tilt = (e) => {
    if (!window.matchMedia("(hover:hover)").matches || reduced()) return;
    const el = e.currentTarget, r = el.getBoundingClientRect();
    el.style.setProperty("--ry", ((e.clientX - r.left) / r.width - 0.5) * 8 + "deg");
    el.style.setProperty("--rx", -((e.clientY - r.top) / r.height - 0.5) * 8 + "deg");
  };
  const flat = (e) => { e.currentTarget.style.setProperty("--rx", "0deg"); e.currentTarget.style.setProperty("--ry", "0deg"); };
  return (
    <article className="proj" hidden={hidden} onPointerMove={tilt} onPointerLeave={flat}>
      {p.img
        ? <div className="shot"><img src={`/img/${p.img}.jpg`} alt={`Screenshot of ${p.t}`} /></div>
        : <div className={"shot art " + (p.cls || "")} aria-hidden="true" dangerouslySetInnerHTML={{ __html: p.art }} />}
      <div className="body">
        <h3>{p.t}</h3><p>{p.d}</p>
        <div className="tech">{p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
        <div className="go">
          {p.live && <a className="btn small sun" href={p.live} target="_blank" rel="noopener">Live ↗</a>}
          {p.gh && <a className="btn small" href={p.gh} target="_blank" rel="noopener">Code ↗</a>}
          {!p.live && !p.gh && <span className="mono" style={{ color: "var(--muted)" }}>private repo</span>}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  return (
    <section id="projects" className="band-deep">
      <div className="wrap">
        <div className="sec-head"><h2>{"Things I've built"}</h2><p className="mono">Side projects, from job trackers to stock pickers. Filter by stack.</p></div>
        <div className="filters" role="group" aria-label="Filter projects by technology">
          {FILTERS.map((f) => <button key={f} type="button" aria-pressed={f === filter} onClick={() => setFilter(f)}>{f}</button>)}
        </div>
        <div className="projects">
          {PROJECTS.map((p) => <Project key={p.t} p={p} hidden={filter !== "All" && !p.tech.includes(filter)} />)}
        </div>
      </div>
    </section>
  );
}

function Extras() {
  return (
    <section id="extras">
      <div className="wrap">
        <div className="sec-head"><h2>Also on record</h2><p className="mono">Outside the job description.</p></div>
        <div className="badges">
          <div className="badge"><b>SIH</b><h3>Smart India Hackathon 2022 finalist</h3><p>Team shortlisted for the finals in Mangalore.</p></div>
          <div className="badge"><b>ML</b><h3>Amazon ML Summer School 2023</h3><p>Selected participant.</p></div>
          <div className="badge"><b>#1</b><h3>President, Compusys</h3><p>Ran the CSE student body in 2023-24. People, deadlines, events.</p></div>
          <div className="badge"><b>2×</b><h3>Published research papers</h3><p>Image matching with LoFTR and skin cancer detection with ResNet, presented at DAPCOM 2024 and AITC 2024.</p></div>
        </div>
      </div>
    </section>
  );
}

function Hire({ canvas }) {
  const [on, setOn] = useState(() => BINGO.map((_, i) => i === FREE));
  const [copy, setCopy] = useState("Copy address");
  const won = useRef(false), mail = useRef(), email = useRef();

  const apply = (next) => {
    setOn(next);
    if (!WINS.some((w) => w.every((k) => next[k]))) { won.current = false; return; }
    if (won.current) return;
    won.current = true;
    confetti(canvas.current);
    const m = mail.current;
    m.classList.remove("pop"); void m.offsetWidth; m.classList.add("pop"); // restart the animation
  };
  const hit = WINS.filter((w) => w.every((k) => on[k]));
  const lit = new Set(hit.flat());
  const n = on.filter(Boolean).length;
  const status = hit.length
    ? (n === 16 ? "Full house. I think you need a Faraz." : "BINGO. Looks like a match. Say hi below.")
    : `${n} of 16 ticked.` + (n < 4 ? " The chai square is free." : " Keep going.");

  const copyMail = () => {
    const done = () => { setCopy("Copied"); setTimeout(() => setCopy("Copy address"), 1600); };
    const select = () => {
      const r = document.createRange(); r.selectNodeContents(email.current);
      const s = getSelection(); s.removeAllRanges(); s.addRange(r);
      setCopy("Selected, press copy");
    };
    try { navigator.clipboard.writeText(EMAIL).then(done, select); } catch (e) { select(); }
  };

  return (
    <section id="hire" className="band-rani">
      <div className="wrap">
        <div className="sec-head"><h2>Hire-me bingo</h2><p className="mono">Tick what your team needs. Four in a row and we should talk.</p></div>
        <div className="hire-grid">
          <div className="pitch">
            <p>Hi, I&apos;m Faraz. Since May 2026 I&apos;m a <mark>Frontend Engineer</mark> at Joveo. Before that I spent close to two years as a <mark>Software Engineer</mark> at Pertinent Healthcare / USA Dental Solutions, working across the stack on finance and healthcare products.</p>
            <p>At Pertinent I connected around 100 bank accounts through <mark>Plaid</mark> with webhook sync, built payments on Worldpay and Prahsys, cut response times by up to <mark>50%</mark>, and <mark>led a team of four</mark> developers.</p>
            <p>In 2025 I founded <mark>CliniSync</mark>, a multi-tenant clinic management platform now running at 3 clinics, with a calendar scheduler, prescriptions with printing, lab work, invoices, analytics, role-based access and WhatsApp reminders.</p>
            <p>Before that: a full stack internship at OneBigBit, a B.Tech in CSE with Honors in Data Science (9.05 CGPA), and two published ML papers.</p>
            <p>I&apos;m happiest where product sense and solid engineering meet. If that sounds useful, my inbox is below.</p>
          </div>
          <div>
            <div className="board-wrap">
              <div className="board-top"><span className="letters">B·I·N·G·O</span><button className="btn small" type="button" onClick={() => apply(BINGO.map((_, i) => i === FREE))}>Clear board</button></div>
              <div className="board" role="group" aria-label="Bingo board of things Faraz has done">
                {BINGO.map((t, i) => (
                  <button key={t} type="button" className={"cell" + (lit.has(i) ? " win" : "")} aria-pressed={on[i]} onClick={() => apply(on.map((v, k) => (k === i ? !v : v)))}>{t}</button>
                ))}
              </div>
              <p className={"status" + (hit.length ? " won" : "")} aria-live="polite">{status}</p>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="c" ref={mail}><small>Email</small><strong ref={email}>{EMAIL}</strong><button className="copy" type="button" onClick={copyMail}>{copy}</button></div>
          <a className="c" href="https://www.linkedin.com/in/syed-faraz-hasan" target="_blank" rel="noopener"><small>LinkedIn ↗</small><strong>in/syed-faraz-hasan</strong></a>
          <a className="c" href="https://github.com/SFarazH" target="_blank" rel="noopener"><small>GitHub ↗</small><strong>SFarazH</strong></a>
          <a className="c" href="https://twitter.com/farazz02" target="_blank" rel="noopener"><small>Twitter ↗</small><strong>@farazz02</strong></a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);
  const [sips, setSips] = useState(0);
  const [msg, setMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const timer = useRef(), canvas = useRef();

  const toast = (m) => {
    setMsg(m); setShowMsg(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setShowMsg(false), 2400);
  };

  useEffect(() => {
    try { if (localStorage.getItem("brew") === "kadak") setDark(true); } catch (e) {}
  }, []);
  useEffect(() => { document.documentElement.dataset.brew = dark ? "kadak" : "light"; }, [dark]);

  const onBrew = () => {
    const k = !dark;
    setDark(k);
    try { localStorage.setItem("brew", k ? "kadak" : "light"); } catch (e) {}
    toast(k ? "Kadak: strong, dark, no sugar." : "Light: extra milk.");
  };

  return (
    <>
      <Nav dark={dark} onBrew={onBrew} />
      <main id="top">
        <Hero sips={sips} setSips={setSips} toast={toast} />
        <div className="ticker" aria-hidden="true">
          <div>{[0, 1].flatMap((d) => TICK.map((t) => <span key={d + t}><i>✳</i> {t}</span>))}</div>
        </div>
        <Jobs />
        <Skills />
        <Projects />
        <Extras />
        <Hire canvas={canvas} />
      </main>
      <footer><div className="wrap"><span>faraz; built with chai and care</span><span>cups sipped on this visit: {(sips / 5).toFixed(1)}</span></div></footer>
      <canvas id="confetti" ref={canvas} aria-hidden="true" />
      <div className={"toast" + (showMsg ? " on" : "")} role="status">{msg}</div>
    </>
  );
}
