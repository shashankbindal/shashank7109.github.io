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
  image?: string;
  monogram?: string;
  logoBg: string;
  bullets: string[];
}

interface Achievement {
  id: number;
  index: string;
  title: string;
  detail: string;
  category: string;
}

const workExperience: WorkExperience[] = [
  {
    id: 1,
    index: '01',
    role: 'Research Intern',
    company: 'IIT (BHU) Varanasi',
    period: 'May 2026 – Present',
    location: 'Varanasi, Uttar Pradesh · Hybrid',
    projectName: 'Indian Institute of Technology (BHU) Varanasi',
    projectUrl: 'https://iitbhu.ac.in',
    stack: ['Deep Learning', 'Computer Vision', 'Python', 'PyTorch', 'NLP', 'Research'],
    metrics: [
      { value: 'IIT', label: 'Institution' },
      { value: 'CV', label: 'Computer Vision' },
      { value: 'DL', label: 'Deep Learning' },
      { value: '2026', label: 'Year' },
    ],
    bullets: [
      'Conducting research in Deep Learning and Computer Vision at one of India\'s premier technical institutes, IIT (BHU) Varanasi.',
      'Working on applied research problems spanning image understanding, feature extraction, and model optimisation under faculty supervision.',
    ],
  },
  {
    id: 2,
    index: '02',
    role: 'Summer Research Intern',
    company: 'NIT Kurukshetra · T&P Cell',
    period: 'May 2026 – Present',
    location: 'Kurukshetra, Haryana · Hybrid',
    projectName: 'Training and Placement Cell, NIT Kurukshetra',
    projectUrl: 'https://nitkkr.ac.in',
    stack: ['Deep Learning', 'Project Management', 'Python', 'Research', 'Data Analysis'],
    metrics: [
      { value: 'NIT', label: 'Institution' },
      { value: 'DL', label: 'Deep Learning' },
      { value: 'PM', label: 'Project Mgmt' },
      { value: '2026', label: 'Year' },
    ],
    bullets: [
      'Selected for summer research internship at NIT Kurukshetra, working under the Training and Placement Cell on Deep Learning-focused research projects.',
      'Applying project management and deep learning skills across structured research initiatives and cross-functional collaboration with faculty and research teams.',
    ],
  },
  {
    id: 3,
    index: '03',
    role: 'Building — Founder',
    company: 'Quelltest · Self-employed',
    period: 'Apr 2026 – Present',
    location: 'Remote',
    projectName: 'quelltest.com — Open-Source Python CLI',
    projectUrl: 'https://quelltest.com',
    stack: ['Python', 'AST', 'libcst', 'LangChain', 'Typer', 'pytest', 'PyPI', 'CI/CD'],
    metrics: [
      { value: '17K+', label: 'Total Downloads' },
      { value: '16', label: 'Releases' },
      { value: '8', label: 'Constraint Types' },
      { value: '5', label: 'Quality Gates' },
    ],
    bullets: [
      'Built and shipped an open-source Python CLI on PyPI that reads production code via AST, detects untested guard clauses, and generates verified failing tests — no LLM API key required.',
      'Engineered a five-gate verification pipeline and shipped 16 releases, reaching 17K+ downloads without paid distribution.',
      'Offline rule-based synthesis for 8 constraint types; optional LLM fix suggestions via Anthropic, OpenAI, or Ollama; CI threshold scoring and GitHub PR analysis mode.',
    ],
  },
  {
    id: 4,
    index: '04',
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
    title: 'QuellTest',
    subtitle: 'Open-Source Python Testing CLI · 17K+ Downloads',
    url: 'https://quelltest.com',
    period: '2026 – Present',
    stack: ['Python', 'AST', 'libcst', 'Typer', 'pytest', 'FastAPI', 'MCP', 'OAuth'],
    displayUrl: 'quelltest.com',
    gradient: 'linear-gradient(135deg, #080808 0%, #0d0d0d 40%, #111111 100%)',
    patternColor: 'rgba(200,255,0,0.05)',
    image: '/assets/images/quelltest_logo.png',
    logoBg: 'var(--bg-secondary)',
    bullets: [
      'Built an AST-driven Python testing CLI with 17K+ downloads that detects untested edge cases and validates generated tests through five quality gates.',
      'Shipped Production Readiness scoring, CI enforcement, cloud sync, a Next.js dashboard, and an OAuth PKCE MCP connector exposing eight tools.',
    ],
  },
  {
    id: 2,
    index: '02',
    title: 'Nexus / Vault',
    subtitle: 'Gamified Council Platform · Full-Stack Systems',
    url: 'https://github.com/shashankbindal/nexus_frontend',
    period: '2026 – Present',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'OAuth', 'Pytest'],
    displayUrl: 'github.com/shashankbindal/nexus_frontend',
    gradient: 'linear-gradient(135deg, #05090d 0%, #07131b 45%, #0b202a 100%)',
    patternColor: 'rgba(80,210,255,0.08)',
    monogram: 'V',
    logoBg: '#07131b',
    bullets: [
      'Built a React/TypeScript and FastAPI/PostgreSQL platform spanning events, clubs, quests, rewards, rotating QR check-ins, certificates, appeals, and analytics.',
      'Implemented domain-restricted OAuth with PKCE, offline scan replay, integrity auditing, 22 end-to-end tests, and an isolated Locust load-test harness.',
    ],
  },
  {
    id: 3,
    index: '03',
    title: 'Assistive Vision Research',
    subtitle: 'IIT (BHU) · Recognition-Supervised Image Restoration',
    url: 'https://github.com/shashankbindal/iitbhu_research',
    period: '2026',
    stack: ['Python', 'PyTorch', 'OpenCV', 'OCR', 'ONNX', 'Computer Vision'],
    displayUrl: 'github.com/shashankbindal/iitbhu_research',
    gradient: 'linear-gradient(135deg, #09060f 0%, #140b1f 45%, #211034 100%)',
    patternColor: 'rgba(180,110,255,0.08)',
    monogram: 'CV',
    logoBg: '#140b1f',
    bullets: [
      'Trained a 0.44M-parameter image restorer that reached 0.462 OCR CER versus 0.455 for a 5.85M-parameter baseline—comparable readability with 13× fewer parameters.',
      'Built a frozen evaluation benchmark, real-photo smoke tests, ONNX export, and a reproducible experimental record that includes diagnosed negative results.',
    ],
  },
  {
    id: 4,
    index: '04',
    title: 'AIChE SRC 2026',
    subtitle: 'Production Conference & Event Platform',
    url: 'https://viplav26.vercel.app',
    period: '2026',
    stack: ['React', 'Express.js', 'MongoDB', 'Cloudinary', 'PDFKit', 'JWT', 'OAuth'],
    displayUrl: 'viplav26.vercel.app',
    gradient: 'linear-gradient(135deg, #0b0802 0%, #161005 45%, #241a08 100%)',
    patternColor: 'rgba(255,190,70,0.08)',
    monogram: 'SRC',
    logoBg: '#181106',
    bullets: [
      'Built the full-stack AIChE India Student Regional Conference platform with attendee accounts, conference and event registration, submissions, announcements, and administration.',
      'Implemented secure uploads, Google OAuth, rate limiting, transactional email, PDF certificates with QR verification, and CSV/Excel exports.',
    ],
  },
  {
    id: 5,
    index: '05',
    title: 'AlertyAI',
    subtitle: 'Google Play AI Productivity App',
    url: 'https://play.google.com/store/apps/details?id=com.alertyai.app',
    period: '2026 – Present',
    stack: ['Kotlin', 'Jetpack Compose', 'FastAPI', 'MongoDB', 'Room', 'STT', 'OCR'],
    displayUrl: 'Google Play · com.alertyai.app',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #0f1a0a 40%, #1a2d0a 70%, #0d1f05 100%)',
    patternColor: 'rgba(200,255,0,0.07)',
    image: '/assets/images/alertyAi_logo.png',
    logoBg: '#ffffff',
    bullets: [
      'Published an Android productivity app with voice, image, and natural-language task capture, scheduling, reminders, subtasks, and team workflows.',
      'Built the Jetpack Compose client with MVVM, Room, Hilt, Retrofit, Google Sign-In, backend sync, Sarvam voice transcription, and ML Kit OCR.',
    ],
  },
  {
    id: 6,
    index: '06',
    title: 'RGIPT T&P Platform',
    subtitle: 'Institutional Placement Operations System',
    url: 'https://github.com/shashankbindal/TNP_RGIPT',
    period: '2026 – Present',
    stack: ['Next.js', 'TypeScript', 'Express.js', 'PostgreSQL', 'Prisma', 'Cloudflare R2', 'Argon2'],
    displayUrl: 'github.com/shashankbindal/TNP_RGIPT',
    gradient: 'linear-gradient(135deg, #050912 0%, #081426 45%, #0b2340 100%)',
    patternColor: 'rgba(70,150,255,0.08)',
    monogram: 'T&P',
    logoBg: '#081426',
    bullets: [
      'Built a typed monorepo for student, recruiter, admin, and super-admin placement workflows using Next.js, Express, Prisma, and PostgreSQL.',
      'Implemented institutional-email identity parsing, OTP authentication, HttpOnly JWT sessions, role-based permissions, S3-compatible uploads, database migrations, and API tests.',
    ],
  },
];

const achievements: Achievement[] = [
  {
    id: 1,
    index: '01',
    title: 'Flipkart Grid 6.0 Semifinalist',
    detail: 'Advanced to the semifinal round of Flipkart\'s national-level technology competition.',
    category: 'National',
  },
  {
    id: 2,
    index: '02',
    title: '2nd Runner-Up — Exergy',
    detail: 'Placed third at the Exergy Technical Fest hosted by IIT Kanpur.',
    category: 'IIT Kanpur',
  },
  {
    id: 3,
    index: '03',
    title: 'Top 8 — Startup Pitch',
    detail: 'Finished among the top eight teams at Azeotropy, IIT Bombay.',
    category: 'IIT Bombay',
  },
  {
    id: 4,
    index: '04',
    title: 'IMO Level 2 Qualified',
    detail: 'Qualified for Level 2 of the International Mathematics Olympiad.',
    category: 'Olympiad',
  },
  {
    id: 5,
    index: '05',
    title: 'JEE Main & Advanced Qualified',
    detail: 'Qualified both stages of India\'s national engineering entrance examination.',
    category: 'National Exam',
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
          {project.image ? (
            <img
              src={project.image}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '12px',
                filter: hovered ? 'brightness(1)' : 'brightness(0.75) grayscale(20%)',
                transition: 'filter 0.5s ease',
              }}
            />
          ) : (
            <span
              aria-hidden="true"
              className="font-display font-800"
              style={{
                color: 'var(--fg)',
                fontSize: project.monogram && project.monogram.length > 2 ? '1.25rem' : '2rem',
                letterSpacing: '-0.04em',
                opacity: hovered ? 1 : 0.72,
                transition: 'opacity 0.4s ease',
              }}
            >
              {project.monogram ?? project.title.slice(0, 2).toUpperCase()}
            </span>
          )}
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
      aria-label="Work Experience, Projects, and Achievements"
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

        {/* ── Achievements ─────────────────────────────────────────────── */}
        <div className="mt-28 md:mt-40">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span
                className="reveal-up block text-[10px] font-display font-600 uppercase tracking-[0.28em] mb-5"
                style={{ color: 'var(--fg-muted)' }}
              >
                Achievements
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
                Recognition that
                <br />
                <span style={{ color: 'var(--fg-subtle)' }}>marks the journey.</span>
              </h2>
            </div>

            <div
              className="reveal-up delay-200 shrink-0 flex items-center gap-3 self-start sm:self-end"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '100px',
                padding: '10px 18px',
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              <span
                className="text-[11px] font-display font-600 uppercase tracking-[0.16em]"
                style={{ color: 'var(--fg-muted)' }}
              >
                {achievements.length} distinctions
              </span>
            </div>
          </div>

          <div style={{ borderBottom: '1px solid var(--border)' }}>
            {achievements.map((achievement, i) => (
              <article
                key={achievement.id}
                className="reveal-up group grid grid-cols-[32px_1fr] md:grid-cols-[48px_1fr_auto] gap-x-5 md:gap-x-8 items-start md:items-center py-7 md:py-8"
                style={{
                  borderTop: '1px solid var(--border)',
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <span
                  className="font-display text-[11px] font-600 tracking-[0.14em] pt-1 md:pt-0 transition-colors duration-300 group-hover:text-[var(--accent)]"
                  style={{ color: 'var(--fg-subtle)' }}
                >
                  {achievement.index}
                </span>

                <div>
                  <h3
                    className="font-display font-700"
                    style={{
                      color: 'var(--fg)',
                      fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {achievement.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed mt-1.5 max-w-[680px]"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    {achievement.detail}
                  </p>
                  <span
                    className="md:hidden inline-block text-[9px] font-display font-600 uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mt-4"
                    style={{
                      color: 'var(--fg-muted)',
                      border: '1px solid var(--border)',
                      background: 'var(--bg-card)',
                    }}
                  >
                    {achievement.category}
                  </span>
                </div>

                <span
                  className="hidden md:inline-block text-[9px] font-display font-600 uppercase tracking-[0.12em] px-3 py-1.5 rounded-full"
                  style={{
                    color: 'var(--fg-muted)',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-card)',
                  }}
                >
                  {achievement.category}
                </span>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
