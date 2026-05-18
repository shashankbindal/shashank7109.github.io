'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ROLES = ['Full-Stack Engineer', 'AI-ML Builder', 'Open Source Contributor'];

export default function HeroSection() {
  const imageCardRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef({ x: 0, y: 0 });
  const [heroVisible, setHeroVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Hero entrance
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 60);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 35);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const card = imageCardRef.current;
    if (!card) return;
    let frameId = 0;

    const applyTilt = () => {
      const targetX = tiltRef.current.x;
      const targetY = tiltRef.current.y;
      card.style.transform = `perspective(900px) rotateX(${targetX}deg) rotateY(${targetY}deg) translateY(0) scale(1)`;
      frameId = requestAnimationFrame(applyTilt);
    };

    const resetTilt = () => {
      tiltRef.current = { x: 0, y: 0 };
    };

    applyTilt();
    card.addEventListener('mouseleave', resetTilt);

    return () => {
      cancelAnimationFrame(frameId);
      card.removeEventListener('mouseleave', resetTilt);
    };
  }, []);

  const handleImageMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = imageCardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    tiltRef.current = {
      x: -(y * 4.5),
      y: x * 5.5,
    };
  };

  return (
    <>
      {/* Hero section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        aria-label="Hero"
        style={{ background: 'var(--bg)' }}
      >
        {/* Animated grain/noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            opacity: 0.045,
            animation: 'grainShift 0.5s steps(1) infinite',
          }}
          aria-hidden="true"
        />

        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 65% 50%, rgba(200,255,0,0.04) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Main content — split layout */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-14 lg:px-20 pt-28 pb-24 flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-12">

          {/* LEFT — Text content */}
          <div className="flex-1 flex flex-col justify-center max-w-[720px]">

            {/* Eyebrow tag */}
            <div
              className={`flex items-center gap-3 mb-10 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              <span
                className="text-[10px] font-display font-600 uppercase tracking-[0.25em]"
                style={{ color: 'var(--fg-muted)' }}
              >
                Available for collaboration
              </span>
            </div>

            {/* Name — pixel display */}
            <h1
              className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <span
                className="block font-pixel"
                style={{
                  fontSize: 'clamp(2.8rem, 7.5vw, 7.2rem)',
                  letterSpacing: '0.02em',
                  lineHeight: '1.05',
                  background: 'linear-gradient(170deg, color-mix(in srgb, var(--fg) 100%, transparent) 0%, color-mix(in srgb, var(--fg) 78%, transparent) 45%, color-mix(in srgb, var(--fg) 24%, transparent) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Shashank
              </span>
              {/* Accent dot */}
              <span
                className="inline-block w-2 h-2 md:w-2.5 md:h-2.5 rounded-full mt-3"
                style={{ background: 'var(--accent)', display: 'block' }}
              />
            </h1>

            {/* Horizontal rule */}
            <div
              className={`mt-10 mb-8 h-[1px] transition-all duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{
                background: 'linear-gradient(90deg, color-mix(in srgb, var(--fg) 16%, transparent) 0%, color-mix(in srgb, var(--fg) 6%, transparent) 60%, transparent 100%)',
                transitionDelay: '0.35s',
                width: heroVisible ? '100%' : '0%',
              }}
            />

            {/* Typewriter roles */}
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.4s', minHeight: '2rem' }}
            >
              <span
                className="text-sm md:text-base font-display font-500 tracking-wide"
                style={{ color: 'var(--fg-muted)' }}
              >
                <span style={{ color: 'var(--accent)' }}>/ </span>
                {displayText}
                <span
                  className="inline-block w-[2px] h-[1.1em] ml-[2px] align-middle"
                  style={{
                    background: 'var(--accent)',
                    animation: 'blink 1.1s step-end infinite',
                    verticalAlign: 'middle',
                  }}
                />
              </span>
            </div>

            {/* Description */}
            <p
              className={`max-w-md font-body text-sm md:text-base leading-relaxed transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ color: 'var(--fg-muted)', transitionDelay: '0.5s', lineHeight: '1.75' }}
            >
              Full-stack &amp; AI engineer shipping RAG pipelines, voice AI, and{' '}
              <span style={{ color: 'var(--accent)' }}>open-source</span>
              {' '}tools. SWE intern @ QuizerAI · PyPI author · B.Tech IT @ RGIPT Amethi.
            </p>

            {/* CTA row */}
            <div
              className={`mt-10 flex items-center gap-8 flex-wrap transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0.62s' }}
            >
              <a
                href="https://github.com/shashankbindal"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 cursor-none"
                data-cursor
              >
                <span className="text-[10px] font-display font-600 uppercase tracking-[0.18em] transition-colors duration-300" style={{ color: 'var(--fg-muted)' }}>
                  GitHub
                </span>
                <div className="h-[1px] w-6 transition-all duration-500 group-hover:w-12" style={{ background: 'var(--fg-muted)' }} />
              </a>
              <a
                href="https://twitter.com/isshshank"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 cursor-none"
                data-cursor
              >
                <span className="text-[10px] font-display font-600 uppercase tracking-[0.18em] transition-colors duration-300" style={{ color: 'var(--fg-muted)' }}>
                  Twitter
                </span>
                <div className="h-[1px] w-6 transition-all duration-500 group-hover:w-12" style={{ background: 'var(--fg-muted)' }} />
              </a>
              <a
                href="https://linkedin.com/in/shashankbindal07"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 cursor-none"
                data-cursor
              >
                <span className="text-[10px] font-display font-600 uppercase tracking-[0.18em] transition-colors duration-300" style={{ color: 'var(--fg-muted)' }}>
                  LinkedIn
                </span>
                <div className="h-[1px] w-6 transition-all duration-500 group-hover:w-12" style={{ background: 'var(--fg-muted)' }} />
              </a>
              <a
                href="/assets/resume/Shashank_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 cursor-none"
                data-cursor
              >
                <span className="text-[10px] font-display font-600 uppercase tracking-[0.18em] transition-colors duration-300" style={{ color: 'var(--fg-muted)' }}>
                  Résumé
                </span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="transition-transform duration-300 group-hover:translate-y-0.5" style={{ color: 'var(--fg-muted)' }}>
                  <path d="M5 1v6M2 5l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className={`w-full lg:w-[420px] xl:w-[480px] flex-shrink-0 flex justify-center lg:justify-end transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.55s' }}
          >
            <div
              ref={imageCardRef}
              onMouseMove={handleImageMove}
              className="relative w-full max-w-[360px] aspect-[4/5] rounded-[24px] overflow-hidden border shadow-[0_24px_70px_rgba(15,23,42,0.14)] will-change-transform"
              style={{
                borderColor: 'var(--border)',
                background: 'var(--bg-card)',
                transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)',
                transformStyle: 'preserve-3d',
                transition: 'transform 280ms cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease',
                cursor: 'none',
              }}
              data-cursor
            >
              <Image
                src="/assets/images/shashank_image.png"
                alt="Shashank Bindal portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  filter: 'grayscale(20%) contrast(1.06) brightness(0.94)',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(8,8,8,0.35) 0%, transparent 48%)',
                  pointerEvents: 'none',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.035) 4px)',
                  opacity: 0.18,
                  pointerEvents: 'none',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: '-18px',
                  background: 'radial-gradient(ellipse at center, rgba(15,118,110,0.16) 0%, transparent 68%)',
                  filter: 'blur(14px)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

            </div>
          </div>
        </div>

        {/* Scroll indicator — bottom center */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1s' }}
          aria-hidden="true"
        >
          <div
            style={{
              width: '1px',
              height: '56px',
              position: 'relative',
              overflow: 'hidden',
              background: 'color-mix(in srgb, var(--fg) 12%, transparent)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '45%',
                background: 'rgba(200,255,0,0.5)',
                animation: 'scrollLine 2s ease-in-out infinite',
              }}
            />
          </div>
          <span
            className="text-[8px] font-display font-500 uppercase tracking-[0.25em]"
            style={{ color: 'var(--fg-subtle)' }}
          >
            scroll
          </span>
        </div>

        <style jsx>{`
          @keyframes scrollLine {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(300%); }
          }
          @keyframes grainShift {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-1%, -1%); }
            20% { transform: translate(1%, 0); }
            30% { transform: translate(0, 1%); }
            40% { transform: translate(-1%, 1%); }
            50% { transform: translate(1%, -1%); }
            60% { transform: translate(0, 0); }
            70% { transform: translate(-1%, 0); }
            80% { transform: translate(1%, 1%); }
            90% { transform: translate(0, -1%); }
          }
        `}</style>
      </section>
    </>
  );
}