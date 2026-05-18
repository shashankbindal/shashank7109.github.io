import React from 'react';
import CustomCursor from '@/components/CustomCursor';
import type { Metadata, Viewport } from 'next';
import { Manrope, DM_Sans, Pixelify_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-pixel',
  display: 'swap',
});
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me';

// Geo coordinates for RGIPT, Amethi, Uttar Pradesh, India
const GEO_LATITUDE  = '26.1518';
const GEO_LONGITUDE = '81.8045';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),

  // ── Core identity ─────────────────────────────────────────────────────────
  title: {
    default: 'Shashank Bindal | Full-Stack & AI Engineer',
    template: '%s | Shashank Bindal',
  },
  description:
    'Shashank Bindal — Full-Stack & AI/ML Software Engineer building web, mobile, and AI products. ' +
    'B.Tech IT at RGIPT, Amethi. Specializing in RAG pipelines, LangChain, AWS Bedrock, Next.js, FastAPI, Flutter, and scalable cloud systems.',
  keywords: [
    // Identity
    'Shashank Bindal', 'Shashank Bindal RGIPT', 'Shashank Bindal Software Engineer',
    'Shashank Bindal Portfolio', 'Shashank Bindal LinkedIn', 'Shashank Bindal GitHub',
    'Shashank Bindal AI engineer', 'Shashank Bindal full stack', 'Shashank Bindal developer India',
    // Role
    'Software Engineer', 'Full Stack Developer', 'AI ML Engineer',
    'Next.js Developer', 'FastAPI Developer', 'React Developer', 'Flutter Developer',
    'AI Builder India', 'RAG developer India', 'LangChain developer India',
    // Tech
    'LangChain', 'RAG Pipeline', 'AWS Bedrock', 'AWS Lambda', 'DynamoDB',
    'Python Developer', 'TypeScript', 'Node.js', 'Docker', 'Kubernetes',
    'NLP engineer India', 'vector search', 'semantic search',
    // Education / location
    'RGIPT', 'Rajiv Gandhi Institute of Petroleum Technology', 'Amethi', 'Uttar Pradesh',
    'RGIPT Amethi developer', 'Kode Club RGIPT',
    // AI/ML
    'Machine Learning', 'NLP', 'Vector Search', 'Semantic Chunking',
    'generative AI developer', 'AI products India',
    // DB / infra
    'MongoDB', 'PostgreSQL', 'Redis', 'WebSockets', 'GraphQL',
    // Projects
    'QuizerAI', 'AlertyAI', 'Myschord',
    // Opportunity signals
    'research internship India', 'software engineering internship India', 'open to work',
  ],
  authors: [
    { name: 'Shashank Bindal', url: 'https://linkedin.com/in/shashankbindal07' },
  ],
  creator:   'Shashank Bindal',
  publisher: 'Shashank Bindal',

  // ── Crawl / indexing ──────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },

  // ── OpenGraph — profile type for profile search appearance ────────────────
  openGraph: {
    type: 'profile',                     // ← profile type signals this is a person page
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Shashank Bindal — Software Engineer',
    title: 'Shashank Bindal | Full-Stack & AI Engineer',
    description:
      'Full-Stack & AI/ML Engineer building web, mobile, and AI products. ' +
      'RAG pipelines, LangChain, AWS Bedrock, Next.js, FastAPI, Flutter. Open to global internships.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shashank Bindal — Full-Stack & AI Engineer',
      },
    ],
  },

  // ── Twitter Card ──────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@isshshank',
    creator: '@isshshank',
    title: 'Shashank Bindal | Full-Stack & AI Engineer',
    description:
      'Full-Stack & AI/ML Engineer building web, mobile, and AI products. ' +
      'RAG pipelines, LangChain, AWS Bedrock, Next.js, FastAPI, Flutter. Open to internships.',
    images: ['/og-image.png'],
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },

  // ── Verification ──────────────────────────────────────────────────────────
  // Domain property in GSC is verified via DNS TXT record — no HTML meta tag needed.

  // ── Geo meta tags — for geo / local search appearance ────────────────────
  // These map to <meta name="ICBM" />, <meta name="geo.position" />, etc.
  other: {
    // Standard ICBM / W3C Geo
    'ICBM':             `${GEO_LATITUDE}, ${GEO_LONGITUDE}`,
    'geo.position':     `${GEO_LATITUDE};${GEO_LONGITUDE}`,
    'geo.region':       'IN-UP',          // ISO 3166-2: India – Uttar Pradesh
    'geo.placename':    'Amethi, Uttar Pradesh, India',
    // OpenGraph profile fields
    'profile:first_name': 'Shashank',
    'profile:last_name':  'Bindal',
    'profile:username':   'shashank7109',
    'profile:gender':     'male',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable} ${pixelifySans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('portfolio-theme');var theme=(saved==='light'||saved==='dark')?saved:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',theme);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        {/* ── 1. ProfilePage + enriched Person schema ──────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfilePage',
              '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me'}/#profilepage`,
              name: 'Shashank Bindal — Software Engineer Portfolio',
              url:  process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me',
              description:
                'Portfolio of Shashank Bindal, a Full-Stack & AI/ML Software Engineer based in Amethi, Uttar Pradesh, India.',
              inLanguage: 'en',
              dateModified: new Date().toISOString().split('T')[0],
              mainEntity: {
                '@type': 'Person',
                '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me'}/#person`,
                name:        'Shashank Bindal',
                givenName:   'Shashank',
                familyName:  'Bindal',
                jobTitle:    'Full-Stack & AI/ML Software Engineer',
                email:       'bindalshashank.89@gmail.com',
                telephone:   '+91-8923695717',
                description:
                  'Full-Stack & AI/ML Software Engineer building web, mobile, and AI products. ' +
                  'B.Tech IT student at RGIPT, Amethi. Specializing in RAG pipelines, LangChain, ' +
                  'AWS Bedrock, Next.js, FastAPI, and Flutter. Open to global research internships.',
                url:   process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me',
                image: {
                  '@type':     'ImageObject',
                  url:         `${process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me'}/assets/images/shashank_image.png`,
                  width:       800,
                  height:      1000,
                  contentUrl:  `${process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me'}/assets/images/shashank_image.png`,
                  description: 'Shashank Bindal — Software Engineer portrait',
                },
                // ── Open-to-work signal for AI engines ────────────────────────
                seeks: {
                  '@type': 'Demand',
                  name: 'Software Engineering Internship / Research Role',
                  description:
                    'Open to software engineering internships, research collaborations, and startup engineering roles globally.',
                },
                // ── Current work ──────────────────────────────────────────────
                worksFor: {
                  '@type': 'Organization',
                  name:    'Myschord (QuizerAI)',
                  url:     'https://myschord.com',
                },
                hasOccupation: {
                  '@type':              'Occupation',
                  name:                 'Software Engineer',
                  occupationLocation: {
                    '@type': 'Country',
                    name:    'India',
                  },
                  skills:
                    'Next.js, React, FastAPI, Python, LangChain, RAG, AWS, Flutter, TypeScript, Docker, Kubernetes, NLP, Machine Learning',
                },
                // ── Social / authoritative profiles (sameAs) ──────────────────
                sameAs: [
                  'https://linkedin.com/in/shashankbindal07',
                  'https://github.com/shashankbindal',
                  'https://twitter.com/isshshank',
                  'https://pypi.org/user/shashankbindal/',
                  process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me',
                ],
                // ── Location / Geo ─────────────────────────────────────────────
                homeLocation: {
                  '@type': 'Place',
                  name:    'Amethi, Uttar Pradesh, India',
                  address: {
                    '@type':            'PostalAddress',
                    addressLocality:    'Amethi',
                    addressRegion:      'Uttar Pradesh',
                    addressCountry:     'IN',
                    postalCode:         '227405',
                  },
                  geo: {
                    '@type':    'GeoCoordinates',
                    latitude:    26.1518,
                    longitude:   81.8045,
                  },
                },
                // ── Skills ────────────────────────────────────────────────────
                knowsAbout: [
                  'Full-Stack Web Development', 'Artificial Intelligence', 'Machine Learning',
                  'RAG Pipelines', 'LangChain', 'AWS Bedrock', 'Generative AI',
                  'Next.js', 'React', 'FastAPI', 'Flutter', 'Python', 'TypeScript',
                  'Node.js', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL',
                  'Natural Language Processing', 'Vector Search', 'Semantic Search',
                ],
                // ── Education ─────────────────────────────────────────────────
                alumniOf: [
                  {
                    '@type': 'EducationalOrganization',
                    name:    'Rajiv Gandhi Institute of Petroleum Technology',
                    alternateName: 'RGIPT',
                    url:     'https://www.rgipt.ac.in',
                    address: {
                      '@type':         'PostalAddress',
                      addressLocality: 'Amethi',
                      addressRegion:   'Uttar Pradesh',
                      addressCountry:  'IN',
                    },
                  },
                ],
                nationality: { '@type': 'Country', name: 'India' },
              },
            }).replace(/</g, '\\u003c'),
          }}
        />

        {/* ── 2. WebSite schema with SearchAction (Sitelinks search box) ──── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me'}/#website`,
              name: 'Shashank Bindal',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me',
              description:
                'Personal portfolio and blog of Shashank Bindal — Full-Stack & AI Engineer.',
              inLanguage: 'en',
              author: {
                '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://shashankbindal.me'}/#person`,
              },
            }).replace(/</g, '\\u003c'),
          }}
        />

        {/* ── 3. FAQ schema — answers common AI engine queries ─────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Who is Shashank Bindal?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Shashank Bindal is a Full-Stack and AI/ML Software Engineer and B.Tech IT student at Rajiv Gandhi Institute of Petroleum Technology (RGIPT), Amethi, India. He builds web, mobile, and AI products using Next.js, FastAPI, LangChain, AWS Bedrock, and Flutter. He is currently interning at Myschord (QuizerAI) and is open to global research and engineering internships.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What does Shashank Bindal build?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Shashank Bindal builds AI-powered products including RAG (Retrieval-Augmented Generation) pipelines, cross-platform mobile apps using Flutter, full-stack web applications using Next.js and FastAPI, and cloud-native systems on AWS. His notable projects include QuizerAI, AlertyAI, and Myschord.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Where does Shashank Bindal study?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Shashank Bindal studies B.Tech in Information Technology at Rajiv Gandhi Institute of Petroleum Technology (RGIPT), Amethi, Uttar Pradesh, India.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How can I contact Shashank Bindal?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'You can contact Shashank Bindal via email at bindalshashank.89@gmail.com, on LinkedIn at linkedin.com/in/shashankbindal07, or on GitHub at github.com/shashank7109.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is Shashank Bindal open to internships?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Yes. Shashank Bindal is actively open to software engineering internships, research collaborations, and startup engineering roles globally. He is particularly interested in AI/ML, full-stack development, and research-oriented positions.',
                  },
                },
              ],
            }).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body>
        <CustomCursor />
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fshashankpo8729back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.17" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}