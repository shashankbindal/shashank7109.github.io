'use client';

import React, { useEffect, useRef, useState } from 'react';

/* ─── Data ──────────────────────────────────────────────────────────────── */

interface WorkExperience {
  id: number;
  index: string;
  role: string;
  company: string;
  period: string;
  location: string;
  projectName: string;
  projectUrl: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  bullets: string[];
}

interface Project {
  id: number;
  index: string;
  title: string;
  subtitle: string;
  url: string;
  displayUrl: string;
  period: string;
  stack: string[];
  gradient: string;
  patternColor: string;
  image: string;
  logoBg: string;
  bullets: string[];
}

const workExperience: WorkExperience[] = [
  {
    id: 1,
    index: '01',
    role: 'Software Engineering Intern — Full-Stack',
    company: 'Myschord · QuizerAI',
    period: 'Dec 2025 – Present',
    location: 'Remote',
    projectName: 'QuizerAI — AI Quiz & Classroom SaaS',
    projectUrl: 'https://quizerai.com',
    stack: ['Next.js', 'FastAPI', 'AWS Bedrock', 'AWS Lambda', 'DynamoDB', 'LangChain', 'Redis', 'Docker', 'JWT'],
    metrics: [
      { value: '500+', label: 'Concurrent Users' },
      { value: '40%', label: 'Lower Latency' },
      { value: '60%', label: 'Faster API' },
      { value: '90%', label: 'Fewer Env Bugs' },
    ],
    bullets: [
      'Architected a multi-tenant RBAC engine (Student, Teacher, Admin) with subscription gating (Free, Go, Pro), enforcing quota controls and assignment lifecycle management.',
      'Designed and deployed a RAG pipeline using LangChain and AWS Bedrock with vector-indexed retrieval on serverless Lambda nodes, scaling to 500+ concurrent users at 40% lower inference latency.',
      'Executed MySQL → DynamoDB migration improving API response time by 60%; containerized services via Docker reducing environment bugs by 90% across dev, staging, and production.',
      'Integrated OAuth 2.0 and JWT authentication; built Recharts dashboards for real-time quiz analytics, subscription KPIs, and engagement tracking.',
    ],
  },
];

const projects: Project[] = [
  {
    id: 1,
    index: '01',
    title: 'quelltest',
    subtitle: 'Open-Source Python CLI · PyPI · 11K+ Downloads',
    url: 'https://pypi.org/project/quelltest/',
    period: '2025 – Present',
    stack: ['Python', 'AST', 'libcst', 'LangChain', 'Typer', 'pytest', 'PyPI'],
    displayUrl: 'pypi.org/project/quelltest',
    gradient: 'linear-gradient(135deg, #080808 0%, #0d0d0d 40%, #111111 100%)',
    patternColor: 'rgba(200,255,0,0.05)',
    image: '/assets/images/logo.png',
    logoBg: 'var(--bg-secondary)',
    bullets: [
      'Built and shipped an open-source Python CLI on PyPI that reads production code via Abstract Syntax Tree (AST), detects untested guard clauses (boundary, null, enum, auth checks), and generates verified failing tests with no LLM API key required.',
      'Engineered a two-phase verification engine: tests must fail on current code (proves gap is real) and pass after fix (proves fix works); 11K+ total downloads, 6.2K last week across 16 releases with zero paid distribution.',
      'Offline rule-based synthesis covering 8 constraint types; optional LLM fix suggestions via Anthropic, OpenAI, or Ollama; CI mode with threshold scoring and GitHub Pull Request analysis.',
    ],
  },
  {
    id: 2,
    index: '02',
    title: 'Lekha',
    subtitle: 'AI Meeting Transcription, Minutes & Voice Cloning',
    url: 'https://lekha.shashankbindal.me',
    period: '2025 – Present',
    stack: ['Python', 'FastAPI', 'Next.js', 'NLP', 'STT', 'Voice Cloning', 'LangChain'],
    displayUrl: 'lekha.shashankbindal.me',
    gradient: 'linear-gradient(135deg, #05050f 0%, #080818 40%, #0a0a22 70%, #06061a 100%)',
    patternColor: 'rgba(120,100,255,0.06)',
    image: '/assets/images/logo.png',
    logoBg: 'var(--bg-secondary)',
    bullets: [
      'AI platform that captures meeting audio, converts it to searchable transcripts, auto-generates structured meeting minutes, and clones speaker voices for replay.',
      'Designed end-to-end speech-to-text pipeline with NLP post-processing for speaker diarisation, action-item extraction, and summary generation.',
    ],
  },
  {
    id: 3,
    index: '03',
    title: 'Bhagavad Gita Platform',
    subtitle: 'AI Certification Platform · ISKCON · gitaforyouth.com',
    url: 'https://gitaforyouth.com',
    period: 'Jan 2025 – Present',
    stack: ['Next.js', 'FastAPI', 'AWS Bedrock', 'AWS Lambda', 'MongoDB', 'LangChain', 'Redis', 'Recharts'],
    displayUrl: 'gitaforyouth.com',
    gradient: 'linear-gradient(135deg, #0d0800 0%, #1a1000 40%, #241600 70%, #1a0e00 100%)',
    patternColor: 'rgba(255,180,0,0.05)',
    image: '/assets/images/logo.png',
    logoBg: 'var(--bg-secondary)',
    bullets: [
      'Launched a full-stack certification platform with chapter-gated quiz progression and an AWS Lambda-orchestrated PDF ingestion pipeline processing 18 chapters at 95%+ parse accuracy into MongoDB.',
      'Designed an ontology-driven NLP purport classifier with token-optimized semantic chunking, cutting AWS Bedrock token costs by 35%.',
      'Implemented a Redis TTL cache layer reducing redundant LLM inference calls by 70% and delivered Recharts dashboards tracking certification conversion and cohort engagement.',
    ],
  },
  {
    id: 4,
    index: '04',
    title: 'AlertyAI',
    subtitle: 'Cross-Platform AI Task & Voice Scheduler',
    url: 'https://alertyai.com',
    period: 'Jan 2026 – Present',
    stack: ['FastAPI', 'MongoDB', 'Next.js', 'Flutter', 'Kotlin', 'Sarvam AI', 'OCR'],
    displayUrl: 'alertyai.com',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #0f1a0a 40%, #1a2d0a 70%, #0d1f05 100%)',
    patternColor: 'rgba(200,255,0,0.07)',
    image: '/assets/images/alertyAi_logo.png',
    logoBg: '#ffffff',
    bullets: [
      'Engineered a cross-platform AI productivity app with Flutter/Kotlin Android client and Next.js web frontend; sub-2-second voice-to-task conversion using Sarvam AI STT/TTS.',
      'Designed NLP-based task decomposition and automated reminder engine reducing planning overhead by 50% and task creation friction by 60%.',
    ],
  },
  {
    id: 5,
    index: '05',
    title: 'IEEE RGIPT',
    subtitle: 'Official Student Chapter Platform',
    url: 'https://ieeergipt.in',
    period: 'Aug 2025 – Present',
    stack: ['Next.js', 'Three.js', 'Express.js', 'MongoDB', 'SendGrid', 'Canvas API', 'JWT'],
    displayUrl: 'ieeergipt.in',
    gradient: 'linear-gradient(135deg, #050510 0%, #070b1a 40%, #0a1030 70%, #050c22 100%)',
    patternColor: 'rgba(80,140,255,0.06)',
    image: '/assets/images/logo.png',
    logoBg: 'var(--bg-secondary)',
    bullets: [
      'Deployed the official RGIPT IEEE chapter platform with event registration, admin CMS, Canvas API dynamic ID card generation, and SendGrid email pipeline; 90 confirmed registrations, 1,000+ total visitors.',
    ],
  },
];

/* ─── Work Accordion Item ────────────────────────────────────────────────── */

function WorkItem({ job, index }: { job: WorkExperience; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="reveal-up border-t cursor-none"
      style={{
        borderColor: open ? 'rgba(200,255,0,0.3)' : 'var(--border)',
        transitionDelay: `${index * 0.09}s`,
        transition: 'border-color 0.4s ease',
      }}
    >
      {/* Accordion header */}
      <button
        className="w-full text-left py-7 md:py-9 flex items-start md:items-center gap-6 md:gap-10 group cursor-none"
        onClick={() => setOpen((o) => !o)}
      >
        {/* Index */}
        <span
          className="font-display font-300 shrink-0 mt-0.5 md:mt-0"
          style={{
            fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)',
            color: open ? 'var(--accent)' : 'var(--fg-subtle)',
            letterSpacing: '0.12em',
            transition: 'color 0.3s ease',
            minWidth: '28px',
          }}
        >
          {job.index}
        </span>

        {/* Role + Company */}
        <div className="flex-1 min-w-0">
          <h3
            className="font-display font-700 leading-tight transition-colors"
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.45rem)',
              letterSpacing: '-0.025em',
              color: 'var(--fg)',
            }}
          >
            {job.role}
          </h3>
          <p
            className="font-body text-sm mt-1 hidden md:block"
            style={{ color: 'var(--fg-muted)' }}
          >
            {job.company}
          </p>
        </div>

        {/* Period + Location */}
        <div className="shrink-0 text-right hidden sm:block">
          <span
            className="block text-[10px] font-display font-600 uppercase tracking-[0.14em]"
            style={{ color: open ? 'var(--accent)' : 'var(--fg-muted)' }}
          >
            {job.period}
          </span>
          <span
            className="block text-[10px] font-body mt-0.5"
            style={{ color: 'var(--fg-subtle)' }}
          >
            {job.location}
          </span>
        </div>

        {/* Chevron */}
        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-400"
          style={{
            border: `1px solid ${open ? 'rgba(200,255,0,0.4)' : 'var(--border-hover)'}`,
            background: open ? 'rgba(200,255,0,0.08)' : 'var(--bg-card)',
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            style={{
              transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
              color: open ? 'var(--accent)' : 'var(--fg-muted)',
            }}
          >
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </button>

      {/* Accordion body */}
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? '900px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.6s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div className="pb-8 md:pb-10 pl-0 md:pl-[58px]">

          {/* Company (mobile) */}
          <p className="font-body text-sm mb-6 md:hidden" style={{ color: 'var(--fg-muted)' }}>
            {job.company}
          </p>

          {/* Metrics strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {job.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl p-4"
                style={{
                  background: 'color-mix(in srgb, var(--accent) 6%, var(--bg-card))',
                  border: '1px solid color-mix(in srgb, var(--accent) 18%, var(--border))',
                }}
              >
                <span
                  className="block font-display font-800"
                  style={{
                    fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                    color: 'var(--accent)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {m.value}
                </span>
                <span
                  className="block text-[10px] font-display font-500 uppercase tracking-[0.1em] mt-1.5"
                  style={{ color: 'var(--fg-subtle)' }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Project link */}
          <a
            href={job.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 mb-7 cursor-none"
          >
            <span
              className="text-[10px] font-display font-600 uppercase tracking-[0.18em] transition-colors duration-300"
              style={{ color: 'var(--fg-muted)' }}
            >
              {job.projectName}
            </span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: 'var(--fg-muted)' }}>
              <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Bullets */}
          <ul className="space-y-3.5 mb-8">
            {job.bullets.map((bullet, bi) => (
              <li key={bi} className="flex items-start gap-4">
                <div
                  className="w-[3px] rounded-full shrink-0 mt-1.5"
                  style={{ height: '14px', background: 'rgba(200,255,0,0.5)' }}
                />
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--fg-muted)', maxWidth: '680px' }}>
                  {bullet}
                </p>
              </li>
            ))}
          </ul>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {job.stack.map((s) => (
              <span
                key={s}
                className="text-[9px] font-display font-600 uppercase tracking-[0.12em] px-3 py-1.5 rounded-full"
                style={{
                  background: 'var(--bg-secondary)',
                  color: 'var(--fg-muted)',
                  border: '1px solid var(--border)',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Project Card — Minimal Interactive ────────────────────────────────── */

function ProjectFeatureCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    const glow = glowRef.current;
    if (!el || !glow) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
  };

  return (
    <div
      ref={cardRef}
      className="reveal-up relative overflow-hidden cursor-none"
      style={{
        transitionDelay: `${index * 0.1}s`,
        borderTop: '1px solid var(--border)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Mouse-tracking radial glow */}
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
          opacity: hovered ? 1 : 0,
          zIndex: 0,
        }}
      />

      {/* Left accent bar */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'var(--accent)',
          transform: hovered ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'top',
          transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
          zIndex: 1,
        }}
      />

      {/* Main row */}
      <div
        className="relative flex items-center gap-6 md:gap-10 py-8 md:py-10 pl-6 md:pl-8 pr-4 md:pr-6"
        style={{ zIndex: 2 }}
      >
        {/* Logo */}
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '18px',
            overflow: 'hidden',
            flexShrink: 0,
            background: project.logoBg,
            border: `1px solid ${hovered ? 'var(--border-hover)' : 'var(--border)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'border-color 0.4s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              padding: '12px',
              filter: hovered ? 'brightness(1)' : 'brightness(0.75) grayscale(20%)',
              transition: 'filter 0.5s ease',
            }}
          />
        </div>

        {/* Title + subtitle */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3
              className="font-display font-700"
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.55rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'var(--fg)',
                transition: 'letter-spacing 0.4s ease',
              }}
            >
              {project.title}
            </h3>
            <span
              className="font-body text-sm hidden md:block"
              style={{ color: 'var(--fg-subtle)' }}
            >
              —
            </span>
            <span
              className="font-body text-sm hidden md:block"
              style={{ color: 'var(--fg-muted)' }}
            >
              {project.subtitle}
            </span>
          </div>

          {/* URL — always visible */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none inline-flex items-center gap-1.5 mt-1.5"
            onClick={(e) => e.stopPropagation()}
          >
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ color: 'var(--fg-subtle)', flexShrink: 0 }}>
              <path d="M1 8L8 1M3 1h5v5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span
              className="font-body text-[11px] transition-colors duration-300"
              style={{ color: hovered ? 'var(--fg-muted)' : 'var(--fg-subtle)', letterSpacing: '0.01em' }}
            >
              {project.displayUrl}
            </span>
          </a>

          {/* Stack — visible on hover */}
          <div
            className="flex flex-wrap gap-2 mt-3 overflow-hidden"
            style={{
              maxHeight: hovered ? '60px' : '0px',
              opacity: hovered ? 1 : 0,
              transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',
            }}
          >
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-[9px] font-display font-600 uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                style={{
                  background: 'var(--bg-secondary)',
                  color: 'var(--fg-muted)',
                  border: '1px solid var(--border)',
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right meta */}
        <div className="flex items-center gap-5 shrink-0">
          {/* Period */}
          <span
            className="text-[10px] font-display font-500 uppercase tracking-[0.14em] hidden sm:block"
            style={{ color: 'var(--fg-subtle)' }}
          >
            {project.period}
          </span>

          {/* Expand toggle */}
          <button
            className="cursor-none"
            onClick={() => setExpanded((v) => !v)}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: `1px solid ${expanded ? 'rgba(200,255,0,0.4)' : 'var(--border-hover)'}`,
              background: expanded ? 'rgba(200,255,0,0.07)' : 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              style={{
                color: expanded ? 'var(--accent)' : 'var(--fg-muted)',
                transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), color 0.3s ease',
              }}
            >
              <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Visit link */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid var(--border)',
              background: hovered ? 'var(--bg-secondary)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s ease',
              flexShrink: 0,
            }}
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              style={{
                color: 'var(--fg-muted)',
                transform: hovered ? 'translate(1px,-1px)' : 'translate(0,0)',
                transition: 'transform 0.3s ease',
              }}
            >
              <path d="M1.5 9.5L9.5 1.5M3.5 1.5h6v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Expanded detail panel */}
      <div
        style={{
          maxHeight: expanded ? '400px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.55s cubic-bezier(0.16,1,0.3,1)',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <div
          className="pl-6 md:pl-8 pr-4 md:pr-6 pb-8"
          style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}
        >
          {/* Subtitle on mobile */}
          <p className="font-body text-sm mb-5 md:hidden" style={{ color: 'var(--fg-muted)' }}>
            {project.subtitle}
          </p>

          {/* Bullets */}
          <ul className="space-y-3 max-w-[700px]">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-4">
                <div
                  style={{
                    width: '3px',
                    height: '14px',
                    borderRadius: '2px',
                    background: 'rgba(200,255,0,0.45)',
                    flexShrink: 0,
                    marginTop: '5px',
                  }}
                />
                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                  {b}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ───────────────────────────────────────────────────────── */

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 70);
            });
          }
        });
      },
      { threshold: 0.04, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="pt-16 pb-28 md:pt-20 md:pb-40 px-8 md:px-12"
      aria-label="Work Experience and Projects"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* ── Work Experience ──────────────────────────────────────────── */}
        <div className="mb-28 md:mb-40">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-6">
            <div>
              <span
                className="reveal-up block text-[10px] font-display font-600 uppercase tracking-[0.28em] mb-5"
                style={{ color: 'var(--fg-muted)' }}
              >
                Work Experience
              </span>
              <h2
                className="reveal-up delay-100 font-display font-800"
                style={{
                  fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
                  letterSpacing: '-0.04em',
                  lineHeight: '0.95',
                  color: 'var(--fg)',
                }}
              >
                Things I&apos;ve
                <br />
                <span style={{ color: 'var(--fg-subtle)' }}>shipped.</span>
              </h2>
            </div>

            {/* Count badge */}
            <div
              className="reveal-up delay-200 shrink-0 flex items-center gap-3 self-start sm:self-end"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '100px',
                padding: '10px 18px',
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
              <span
                className="text-[11px] font-display font-600 uppercase tracking-[0.16em]"
                style={{ color: 'var(--fg-muted)' }}
              >
                {workExperience.length} roles
              </span>
            </div>
          </div>

          {/* Accordion list */}
          <div>
            {workExperience.map((job, i) => (
              <WorkItem key={job.id} job={job} index={i} />
            ))}
            {/* Bottom border */}
            <div className="border-t" style={{ borderColor: 'var(--border)' }} />
          </div>
        </div>

        {/* ── Projects ─────────────────────────────────────────────────── */}
        <div>

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span
                className="reveal-up block text-[10px] font-display font-600 uppercase tracking-[0.28em] mb-5"
                style={{ color: 'var(--fg-muted)' }}
              >
                Projects
              </span>
              <h2
                className="reveal-up delay-100 font-display font-800"
                style={{
                  fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
                  letterSpacing: '-0.04em',
                  lineHeight: '0.95',
                  color: 'var(--fg)',
                }}
              >
                Things I&apos;ve
                <br />
                <span style={{ color: 'var(--fg-subtle)' }}>built.</span>
              </h2>
            </div>

            <a
              href="https://github.com/shashankbindal"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-up delay-200 group flex items-center gap-3 cursor-none self-start sm:self-end"
            >
              <span
                className="text-[10px] font-display font-600 uppercase tracking-[0.18em] transition-colors duration-300"
                style={{ color: 'var(--fg-muted)' }}
              >
                All on GitHub
              </span>
              <div
                className="h-[1px] w-8 group-hover:w-14 transition-all duration-500"
                style={{ background: 'var(--fg-muted)' }}
              />
            </a>
          </div>

          {/* Project cards */}
          <div style={{ borderBottom: '1px solid var(--border)' }}>
            {projects.map((project, i) => (
              <ProjectFeatureCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
