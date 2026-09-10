import type { Metadata } from 'next';
import { Instrument_Serif, Plus_Jakarta_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const display = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
});

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

const siteUrl = 'https://surya-pratap.vercel.app'; // [NEEDS VERIFICATION] update with real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Surya Pratap Singh Rathod — Computer Science Student & Full-Stack Developer',
    template: '%s | Surya Pratap Singh Rathod',
  },
  description:
    'Portfolio of Surya Pratap Singh Rathod, a Computer Science student at Bennett University building full-stack and applied-AI projects, and Vice Captain of the university volleyball team.',
  keywords: [
    'Surya Pratap Singh Rathod',
    'full-stack developer',
    'applied AI',
    'Bennett University',
    'Next.js',
    'TypeScript',
    'computer science student',
    'Nexus-AI',
    'TradeVision',
  ],
  authors: [{ name: 'Surya Pratap Singh Rathod' }],
  creator: 'Surya Pratap Singh Rathod',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Surya Pratap Singh Rathod',
    title: 'Surya Pratap Singh Rathod — Computer Science Student & Full-Stack Developer',
    description:
      'Portfolio of Surya Pratap Singh Rathod, a Computer Science student at Bennett University building full-stack and applied-AI projects, and Vice Captain of the university volleyball team.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Surya Pratap Singh Rathod — Full-Stack Developer & Applied AI Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surya Pratap Singh Rathod — Computer Science Student & Full-Stack Developer',
    description:
      'Portfolio of Surya Pratap Singh Rathod, a Computer Science student at Bennett University building full-stack and applied-AI projects.',
    images: ['/og-image.png'],
    creator: '@rathoresurya01',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Surya Pratap Singh Rathod',
  url: siteUrl,
  sameAs: [
    'https://github.com/Surya-Pratap01',
    'https://www.linkedin.com/in/surya-pratap-a5a855312/',
    'https://x.com/rathoresurya01',
    'https://www.instagram.com/rathore_surya_pratap_singh',
  ],
  jobTitle: 'Computer Science Student & Full-Stack Developer',
  description:
    'B.Tech Computer Science & Engineering student at Bennett University, building full-stack and applied-AI projects.',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Bennett University',
    url: 'https://bennett.edu.in',
  },
  knowsAbout: [
    'Full-Stack Development',
    'Applied AI',
    'Next.js',
    'TypeScript',
    'Python',
    'FastAPI',
    'LangGraph',
    'Google Gemini',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-bg-deep text-text-primary">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navigation />
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
