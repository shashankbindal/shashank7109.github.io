'use client';

import React, { useEffect, useRef } from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  score: string;
  location: string;
  period: string;
}

const education: EducationItem[] = [
  {
    institution: 'Rajiv Gandhi Institute of Petroleum Technology (RGIPT)',
    degree: 'B.Tech in Information Technology',
    score: '',
    location: 'Amethi, Uttar Pradesh',
    period: 'Aug 2024 – Present',
  },
];

interface TechItem {
  name: string;
  icon: string;
}

const row1: TechItem[] = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
];

const row2: TechItem[] = [
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
];

const row3: TechItem[] = [
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'LangChain', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
];

const row4: TechItem[] = [
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'DynamoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
];


interface MarqueeRowProps {
  items: TechItem[];
  direction?: 'left' | 'right';
  speed?: number;
}

function MarqueeRow({ items, direction = 'left', speed = 30 }: MarqueeRowProps) {
  const doubled = [...items, ...items, ...items];
  const animName = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div className="relative overflow-hidden w-full" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `${animName} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="tech-card group flex flex-col items-center justify-center gap-2 px-5 py-4 rounded-xl cursor-none"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              minWidth: '90px',
              transition: 'border-color 0.3s ease, background 0.3s ease, transform 0.3s ease',
            }}
          >
            <img
              src={item.icon}
              alt={item.name}
              width={36}
              height={36}
              className="tech-logo"
              style={{
                width: '36px',
                height: '36px',
                filter: 'grayscale(100%) brightness(0.7)',
                transition: 'filter 0.35s ease, transform 0.35s ease',
                objectFit: 'contain',
              }}
            />
            <span
              className="text-[10px] font-display font-600 uppercase tracking-[0.12em] whitespace-nowrap"
              style={{ color: 'var(--fg-muted)', transition: 'color 0.35s ease' }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
            if (lineRef.current) lineRef.current.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="pt-24 pb-16 md:pt-36 md:pb-20 px-8 md:px-12"
      aria-label="About Shashank"
    >
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .tech-card:hover {
          background: color-mix(in srgb, var(--fg) 4%, var(--bg-card)) !important;
          border-color: var(--border-hover) !important;
          transform: scale(1.08);
        }
        .tech-card:hover .tech-logo {
          filter: grayscale(0%) brightness(1) !important;
          transform: scale(1.1);
        }
        .tech-card:hover span {
          color: var(--fg) !important;
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 md:mb-20">
          <div ref={lineRef} className="section-line w-12" style={{ maxWidth: '48px' }} />
          <span
            className="reveal-up text-[10px] font-display font-600 uppercase tracking-[0.25em]"
            style={{ color: 'var(--fg-muted)' }}
          >
            About
          </span>
        </div>

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-20 items-start mb-24 md:mb-32">
          <div className="lg:col-span-5">
            <h2
              className="reveal-up font-display font-800 mb-8"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                letterSpacing: '-0.03em',
                lineHeight: '1.0',
                color: 'var(--fg)',
              }}
            >
              Engineering at
              <br />
              <span style={{ color: 'var(--fg-subtle)' }}>the intersection.</span>
            </h2>
            <p
              className="reveal-up delay-100 font-body text-base leading-relaxed mb-6"
              style={{ color: 'var(--fg-muted)' }}
            >
              I'm Shashank — a B.Tech IT student at RGIPT, building across the full stack.
              From pixel-perfect web interfaces to production-grade AI pipelines, I care about the craft at every layer.
            </p>
            <p
              className="reveal-up delay-200 font-body text-base leading-relaxed"
              style={{ color: 'var(--fg-subtle)' }}
            >
              Currently interning at Myschord (QuizerAI) and shipping cross-platform
              products. I believe good engineering is invisible — it just works.
            </p>
          </div>

          {/* Education */}
          <div className="lg:col-span-7">
            <span
              className="reveal-up block text-[10px] font-display font-600 uppercase tracking-[0.25em] mb-8"
              style={{ color: 'var(--fg-muted)' }}
            >
              Education
            </span>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="reveal-up bento-card p-6"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3
                        className="font-display font-700"
                        style={{ fontSize: '1rem', letterSpacing: '-0.02em', color: 'var(--fg)' }}
                      >
                        {edu.institution}
                      </h3>
                      <p
                        className="font-body text-sm mt-1"
                        style={{ color: 'var(--fg-muted)' }}
                      >
                        {edu.degree}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span
                        className="block text-[10px] font-body"
                        style={{ color: 'var(--fg-subtle)' }}
                      >
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-[10px] font-display font-500 uppercase tracking-[0.12em]"
                    style={{ color: 'var(--fg-subtle)' }}
                  >
                    {edu.location}
                  </p>
                </div>
              ))}

              {/* Resume Download */}
              <div className="reveal-up pt-2">
                <a
                  href="/assets/resume/Shashank_resume_new.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 cursor-none"
                  aria-label="Open Resume in browser"
                >
                  <span
                    className="text-[11px] font-display font-600 uppercase tracking-[0.2em] transition-colors duration-300"
                    style={{ color: 'var(--accent)' }}
                  >
                    Open Résumé
                  </span>
                  <div
                    className="h-[1px] w-6 group-hover:w-12 transition-all duration-400"
                    style={{ background: 'var(--accent)' }}
                  />
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                    style={{ color: 'var(--accent)' }}
                  >
                    <path d="M6 1v7M3 5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Marquee */}
        <div>
          <div className="flex items-center justify-between mb-10">
            <span
              className="reveal-up block text-[10px] font-display font-600 uppercase tracking-[0.25em]"
              style={{ color: 'var(--fg-muted)' }}
            >
              Tech Stack
            </span>
            <span
              className="reveal-up text-[10px] font-display font-500 uppercase tracking-[0.15em]"
              style={{ color: 'var(--fg-subtle)' }}
            >
              Hover to reveal color
            </span>
          </div>

          <div className="space-y-3 -mx-8 md:-mx-12">
            {/* Row 1 — Languages → left */}
            <MarqueeRow items={row1} direction="left" speed={35} />
            {/* Row 2 — Frameworks → right */}
            <MarqueeRow items={row2} direction="right" speed={28} />
            {/* Row 3 — AI/ML & Cloud → left */}
            <MarqueeRow items={row3} direction="left" speed={32} />
            {/* Row 4 — Databases & Tools → right */}
            <MarqueeRow items={row4} direction="right" speed={38} />
          </div>
        </div>

      </div>
    </section>
  );
}
