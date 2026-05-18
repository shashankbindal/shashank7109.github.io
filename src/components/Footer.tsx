import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="footer-minimal py-8 px-8 md:px-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Logo + copyright */}
        <div className="flex items-center gap-3">
          <AppLogo size={22} />
          <span className="font-display text-[11px] font-500 tracking-[0.06em] uppercase" style={{ color: 'var(--fg-subtle)' }}>
            © 2026 Shashank Bindal
          </span>
        </div>

        {/* Right: Legal */}
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/shashankbindal07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-display font-500 uppercase tracking-[0.08em] hover:opacity-80 transition-opacity duration-300"
            style={{ color: 'var(--fg-subtle)' }}
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/isshshank"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-display font-500 uppercase tracking-[0.08em] hover:opacity-80 transition-opacity duration-300"
            style={{ color: 'var(--fg-subtle)' }}
          >
            Twitter
          </a>
          <a
            href="https://github.com/shashankbindal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-display font-500 uppercase tracking-[0.08em] hover:opacity-80 transition-opacity duration-300"
            style={{ color: 'var(--fg-subtle)' }}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}