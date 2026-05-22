import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Github, Linkedin, Mail, Code2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anshika Goel — ML & Systems Portfolio" },
      { name: "description", content: "CS undergrad at IIT Mandi building ML systems & AI products that feel almost human." },
      { property: "og:title", content: "Anshika Goel — ML & Systems Portfolio" },
      { property: "og:description", content: "Building ML systems & AI products that feel almost human." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800;900&family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap" },
      { rel: "icon", type: "image/svg+xml", href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>✨</text></svg>" },
    ],
  }),
  component: Index,
});

const skills = ["Machine Learning", "Reinforcement Learning", "Distributed Systems", "Web Development", "AI Agents", "Information Retrieval", "Algorithms"];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Toolkit />
      <Wins />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="text-2xl font-extrabold tracking-tight">
          anshika<span className="text-coral">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[["Work","#work"],["About","#about"],["Skills","#skills"],["Wins","#wins"],["Contact","#contact"]].map(([l,h]) => (
            <a key={h} href={h} className="text-muted-foreground hover:text-foreground transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="inline-flex items-center gap-1 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition">
          Say hi <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="mt-8 text-6xl md:text-8xl font-black leading-[0.95]">
          Anshika
          <br />
          <span className="font-serif-italic text-coral font-normal">Goel<span className="text-coral">.</span></span>
        </h1>
        <p className="mt-8 max-w-md text-lg text-muted-foreground leading-relaxed">
          Building ML systems & AI products that feel almost human.
        </p>
        <p className="mt-3 max-w-md text-base text-muted-foreground/90">
          Currently CS Undergrad · ML / Systems / Full-stack — turning research papers into shipped products.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-coral text-white px-6 py-3 font-medium hover:translate-y-[-2px] transition shadow-card">
            See my work <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/80 px-6 py-3 font-medium hover:bg-foreground hover:text-background transition">
            Download résumé
          </a>
        </div>

      </div>

      <div className="relative h-[480px] flex items-center justify-center">
        <div className="absolute w-80 h-80 rounded-3xl bg-coral rotate-6 float-slow" />
        <div className="absolute w-80 h-80 rounded-3xl bg-amber-accent rotate-[-4deg] translate-x-6 translate-y-4" />
        <div className="relative w-80 h-80 rounded-3xl bg-card shadow-card p-7 flex flex-col">
          <div className="flex items-center justify-between text-[10px] tracking-widest text-muted-foreground">
            NOW PLAYING <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
          </div>
          <div className="mt-8 text-3xl font-extrabold leading-tight">
            Building <span className="font-serif-italic font-normal">things</span> that
            <br /><span className="text-coral">think<span className="text-coral">.</span></span>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">ML · Systems · Design</div>
          <div className="mt-auto flex gap-2">
            {["py","fastapi","rl"].map(t => (
              <span key={t} className="px-3 py-1.5 rounded-full bg-secondary text-xs font-medium uppercase">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="border-y border-border/60 py-5 bg-card/40 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {[...skills, ...skills, ...skills].map((s, i) => (
          <span key={i} className="mx-8 text-sm font-semibold tracking-widest uppercase text-muted-foreground">
            {s} <span className="text-coral mx-2">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return <div className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">{n} · {label}</div>;
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionLabel n="01" label="about" />
      <h2 className="mt-4 text-5xl md:text-7xl font-black leading-[1]">
        A short
        <br /><span className="font-serif-italic font-normal text-coral">self-portrait<span className="text-coral">.</span></span>
      </h2>

      <div className="mt-14 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-2xl md:text-3xl font-semibold leading-snug">
            I build <span className="text-coral">quiet, useful things</span> — from <span className="font-serif-italic font-normal">recommender engines</span> to AI website generators that ship in 30 seconds.
          </p>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>I am a second-year Computer Science undergraduate at IIT Mandi, fascinated by the intersection of machine learning, distributed systems, and the small design details that make software feel alive.</p>
          <p>I spend my days building hyper-personalized recommenders, prototyping AI agents that ship working websites in under thirty seconds, and turning satellite data into something a high-schooler can read in one glance. When I am not in front of a terminal, I am probably choreographing for the campus dance club or refining a CP solution at 2 AM.</p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-4">
        {[
          ["4+", "Projects shipped"],
          ["2", "Hackathons"],
          ["1", "Research project"],
        ].map(([n, l]) => (
          <div key={n} className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="text-5xl md:text-6xl font-black text-coral">{n}</div>
            <div className="mt-2 text-sm text-muted-foreground">{l}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-border bg-card p-8">
        <div className="text-xs tracking-widest uppercase text-muted-foreground">Currently</div>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-2xl font-bold">B.Tech in Computer Science</div>
            <div className="text-muted-foreground">Indian Institute of Technology, Mandi</div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-coral">8.63 / 10</div>
            <div className="text-sm text-muted-foreground">2024 — 2028</div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Design of Algorithms","Mathematical Foundations of CS","Intro to Data Science & Python","Probability and Statistics","Computer Organization"].map(c => (
            <span key={c} className="px-3 py-1.5 rounded-full bg-secondary text-xs font-medium">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    n: "01", name: "HieraOSG", tag: "Egocentric video temporal grounding — \"when did I last see my keys?\"",
    desc: "Given a natural language query and an egocentric video, localize the exact temporal window containing the answer. A unified architecture combining HieraMamba's O(T) Mamba backbone with two new modules — ObjectFusionModule and ShotContrastiveLoss — to reason jointly about what objects appear, where the camera is looking, and when the answer occurs.",
    bullets: [
      "ObjectFusionModule: gated cross-attention fusing Co-DETR object detections (LVIS 1200+ categories) into video features, covering 99.6% of NLQ queries — gate initialized to zero so training begins as pure HieraMamba and object influence grows gradually.",
      "ShotContrastiveLoss: InfoNCE loss over LAVILA narration-derived shot boundaries, pulling same-shot clips together and pushing cross-shot clips apart for camera-aware temporal regularization.",
      "Full ablation across 5 configurations — object supervision alone yielded +6.86 avg recall; full model hit R@1=17.52, R@5=38.77 on Ego4D NLQ v1.",
    ],
    stack: ["PyTorch","Mamba-SSM","Co-DETR","EgoVLP","LMDB","NVIDIA A6000"],
    url: "https://github.com/anshika-goel/hieraosg",
    color: "var(--coral)",
  },
  {
    n: "02", name: "NARC", tag: "Hyper-personalized news recommendation engine",
    desc: "A 5,000 → 10 article funnel powered by mood and archetype pre-filtering, BGE cross-encoder reranking, and LinUCB contextual bandits over a 46-dimensional context vector — serving personalized feeds at under 2 ms latency.",
    bullets: [
      "Modeled session-level user intent via 6-axis mood sliders, location, timestamp and behavioral archetype for effective cold-start before any interaction.",
      "Dual-loop updates: per-interaction EMA user-vector drift + hourly stable profile consolidation with position-discounted reward over 5 signals.",
    ],
    stack: ["Python","Reinforcement Learning","BGE Reranker","FastAPI"],
    url: "https://github.com/anshika-goel/narc",
    color: "var(--amber-accent)",
  },
  {
    n: "03", name: "PixelForge", tag: "AI website generator — prompt to live preview in 30s",
    desc: "A sequential 4-agent pipeline that turns natural language prompts into functional websites in under 30 seconds, with a real-time interactive preview system on top of FastAPI and Firebase.",
    bullets: [
      "Orchestrated planner → generator → validator → renderer agents using Generative AI for cohesive output.",
      "KrackHack Hackathon project — judged on speed, generation quality and live edit experience.",
    ],
    stack: ["Python","JavaScript","Generative AI","Firebase"],
    url: "https://github.com/anshika-goel/pixelforge",
    color: "var(--coral-soft)",
  },
  {
    n: "04", name: "CleanSkies", tag: "AQI prediction platform using NASA TEMPO data",
    desc: "An air quality prediction platform for 10+ regions, blending NASA TEMPO satellite data with real-time weather APIs to produce pollutant trends and short-term forecasts you can actually read.",
    bullets: [
      "Unified heterogeneous data sources to produce pollutant trends and short-term air quality forecasts.",
      "Designed an interactive interface featuring live AQI maps and region-specific analytics — built during NASA Space Apps Hackathon.",
    ],
    stack: ["Python","TypeScript","FastAPI","MongoDB","NASA TEMPO"],
    url: "https://github.com/anshika-goel/cleanskies",
    color: "var(--coral)",
  },
];

function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionLabel n="02" label="selected work" />
      <h2 className="mt-4 text-5xl md:text-7xl font-black leading-[1]">
        Things I made <span className="font-serif-italic font-normal text-coral">recently<span className="text-coral">.</span></span>
      </h2>
      <p className="mt-6 max-w-2xl text-muted-foreground">
        Four projects spanning egocentric video research, recommender systems, generative AI, and satellite data — each shipped end to end, from idea to deployed UI.
      </p>

      <div className="mt-16 space-y-8">
        {projects.map((p) => (
          <article key={p.name} className="group relative rounded-[2rem] border border-border bg-card overflow-hidden">
            <div className="grid md:grid-cols-[1fr_1.3fr] gap-8 p-8 md:p-12">
              <div className="relative">
                <div className="rounded-2xl aspect-square w-full max-w-xs" style={{ background: p.color }}>
                  <div className="h-full w-full flex items-end p-6">
                    <div className="text-background/90 font-black text-5xl mix-blend-overlay">{p.name}</div>
                  </div>
                </div>
                <div className="mt-4 text-xs tracking-widest uppercase text-muted-foreground">{p.n} · project</div>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-black">{p.name}</h3>
                <p className="mt-2 text-lg font-medium text-coral">{p.tag}</p>
                <p className="mt-5 text-muted-foreground leading-relaxed">{p.desc}</p>
                <ul className="mt-5 space-y-2">
                  {p.bullets.map(b => (
                    <li key={b} className="flex gap-3 text-sm text-muted-foreground"><span className="text-coral mt-1">→</span>{b}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map(t => (
                    <span key={t} className="px-3 py-1.5 rounded-full bg-secondary text-xs font-semibold">{t}</span>
                  ))}
                </div>
                <a href={p.url} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 font-semibold border-b-2 border-foreground pb-0.5 hover:gap-3 transition-all">
                  View repository <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const toolkit = [
  { n: "01", title: "Languages", items: ["Python","C++","JavaScript","TypeScript","Bash","HTML/CSS"] },
  { n: "02", title: "Core CS", items: ["Data Structures & Algorithms","DBMS","Machine Learning","Web Development","Computer Organization","Probability & Stats"] },
  { n: "03", title: "Tools & Frameworks", items: ["FastAPI","Flask","PostgreSQL","MongoDB","Docker","Pandas","NumPy","scikit-learn","OpenCV","Git","Linux"] },
];

function Toolkit() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionLabel n="03" label="toolkit" />
      <h2 className="mt-4 text-5xl md:text-7xl font-black leading-[1]">
        What I build <span className="font-serif-italic font-normal text-coral">with<span className="text-coral">.</span></span>
      </h2>
      <p className="mt-6 max-w-2xl text-muted-foreground">A snapshot of the languages, frameworks and ideas I reach for first. Always growing, often refactoring.</p>

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {toolkit.map(t => (
          <div key={t.title} className="rounded-3xl border border-border bg-card p-7">
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-bold">{t.title}</h3>
              <span className="text-xs text-muted-foreground tracking-widest">{t.n}</span>
            </div>
            <ul className="mt-6 space-y-2">
              {t.items.map(i => (
                <li key={i} className="flex items-center gap-3 text-foreground/90">
                  <Code2 className="w-3.5 h-3.5 text-coral" /> {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const achievements = [
  ["01", "2nd Runner-Up · Utkarsh Robotics Challenge", "Annual tech fest · 2024"],
  ["02", "1st position among girls · Freshers' Coding Contest", "Institute level · 2024"],
  ["03", "JEE Advanced — AIR 6667", "Top percentile entrance to IITs"],
  ["04", "JEE Main — AIR 8000", "Joint Entrance Examination"],
];

const leadership = [
  ["Co-Coordinator · Dance Club", "Cultural board", "Organized workshops and choreographed at institute-level cultural performances."],
  ["Media Head · Xpecto Technical Fest", "Tech fest team", "Led media and outreach with a team of juniors — promotions, social, and event communications."],
  ["Core Member · ACM-W", "Student chapter", "Conducted coding contests and mentored peers in algorithms and C++."],
];

function Wins() {
  return (
    <section id="wins" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionLabel n="04" label="proof of work" />
      <h2 className="mt-4 text-5xl md:text-7xl font-black leading-[1]">
        Wins & <span className="font-serif-italic font-normal text-coral">small adventures<span className="text-coral">.</span></span>
      </h2>
      <p className="mt-6 max-w-2xl text-muted-foreground">Some are competitive, some are creative. Together they shape how I think about teamwork, deadlines and shipping things people use.</p>

      <div className="mt-14 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-6">Achievements</h3>
          <ul className="space-y-4">
            {achievements.map(([n, t, s]) => (
              <li key={n} className="flex gap-5 rounded-2xl border border-border bg-card p-5">
                <span className="text-3xl font-black text-coral leading-none">{n}</span>
                <div>
                  <div className="font-semibold">{t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6">Leadership & Activities</h3>
          <ul className="space-y-4">
            {leadership.map(([t, p, d]) => (
              <li key={t} className="rounded-2xl border border-border bg-card p-5">
                <div className="font-semibold">{t}</div>
                <div className="text-sm text-coral mt-0.5">{p}</div>
                <div className="text-sm text-muted-foreground mt-2">{d}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const socials = [
  ["Email", "anshigoel0906@gmail.com", "mailto:anshigoel0906@gmail.com", Mail],
  ["LinkedIn", "in/anshgoel98", "https://www.linkedin.com/in/anshgoel98/", Linkedin],
  ["GitHub", "@anshika476", "https://github.com/anshika476", Github],
] as const;

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <SectionLabel n="05" label="let's talk" />
      <h2 className="mt-4 text-5xl md:text-8xl font-black leading-[0.95]">
        Let's <span className="font-serif-italic font-normal text-coral">build</span>
        <br /> something<span className="text-coral">.</span>
      </h2>
      <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
        Hiring for an internship, collaborating on a paper, or just want to chat about reinforcement learning over coffee? My inbox is open.
      </p>

      <a href="mailto:anshigoel0906@gmail.com" className="mt-10 inline-flex items-center gap-3 text-2xl md:text-4xl font-bold border-b-4 border-coral pb-2 hover:gap-5 transition-all">
        <span>anshigoel0906@gmail.com</span>
        <ArrowUpRight className="w-8 h-8 text-coral" />
      </a>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-3">
        {socials.map(([l, h, u, Icon]) => (
          <a key={l} href={u} target="_blank" rel="noreferrer" className="group rounded-2xl border border-border bg-card p-5 hover:border-coral transition">
            <Icon className="w-5 h-5 text-coral" />
            <div className="mt-3 font-semibold">{l}</div>
            <div className="text-xs text-muted-foreground mt-1 truncate">{h}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <div>© 2026 Anshika Goel — designed and built with care.</div>
        <div>Last updated · Dec 2025</div>
      </div>
    </footer>
  );
}
