'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const contactLinks = [
    {
      label: 'Professional',
      title: 'LinkedIn',
      subtitle: '/in/shashankbindal07',
      href: 'https://linkedin.com/in/shashankbindal07',
      delay: 'delay-200',
    },
    {
      label: 'Code',
      title: 'GitHub',
      subtitle: '/shashankbindal',
      href: 'https://github.com/shashankbindal',
      delay: 'delay-300',
    },
    {
      label: 'Twitter / X',
      title: '@isshshank',
      subtitle: 'Thoughts & builds',
      href: 'https://twitter.com/isshshank',
      delay: 'delay-350',
    },
    {
      label: 'Email',
      title: 'bindalshashank.89@gmail.com',
      subtitle: 'Drop me a message',
      href: 'mailto:bindalshashank.89@gmail.com',
      delay: 'delay-400',
    },
    {
      label: 'Phone',
      title: '+91 8923695717',
      subtitle: 'Available for calls',
      href: 'tel:+918923695717',
      delay: 'delay-500',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 md:py-40 px-8 md:px-12"
      aria-label="Contact"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <span
              className="reveal-up block text-[10px] font-display font-600 uppercase tracking-[0.25em] mb-6"
              style={{ color: 'var(--fg-muted)' }}
            >
              Contact
            </span>
            <h2
              className="reveal-up delay-100 font-display font-800"
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 5rem)',
                letterSpacing: '-0.04em',
                lineHeight: '0.92',
                color: 'var(--fg)',
              }}
            >
              Let's build
              <br />
              something
              <br />
              <span style={{ color: 'var(--fg-subtle)' }}>real.</span>
            </h2>

            <p
              className="reveal-up delay-200 font-body text-base leading-relaxed mt-8 max-w-sm"
              style={{ color: 'var(--fg-muted)' }}
            >
              Open to internships, freelance work, open source collaboration, and
              helping startups figure out their engineering challenges.
            </p>

            <div
              className="reveal-up delay-300 mt-6 flex items-center gap-2"
              style={{ color: 'var(--accent)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              <span className="text-[10px] font-display font-600 uppercase tracking-[0.15em]">
                Currently available
              </span>
            </div>
          </div>

          {/* Right: Links */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`reveal-up ${link.delay} group flex items-center justify-between p-6 md:p-7 rounded-2xl cursor-none transition-all duration-400`}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                  (e.currentTarget as HTMLElement).style.background = '#161616';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--bg-card)';
                }}
              >
                <div>
                  <span
                    className="block text-[9px] font-display font-600 uppercase tracking-[0.2em] mb-2"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    {link.label}
                  </span>
                  <span
                    className="font-display font-700"
                    style={{ fontSize: 'clamp(0.9rem, 2vw, 1.25rem)', letterSpacing: '-0.02em', color: 'var(--fg)' }}
                  >
                    {link.title}
                  </span>
                  <span
                    className="block text-[11px] font-body mt-1"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    {link.subtitle}
                  </span>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <Icon
                    name="ArrowUpRightIcon"
                    size={16}
                    className="transition-colors"
                    style={{ color: 'var(--fg-muted)' }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}