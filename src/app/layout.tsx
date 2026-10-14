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
  weight: ['400', '500', '600'],
});

const siteUrl = 'https://surya-pratap.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Surya Pratap Singh Rathod | Full-Stack Developer',
    template: '%s | Surya Pratap Singh Rathod',
  },
  description:
    'Full-stack developer and Computer Science student at Bennett University building practical software across web applications, databases, and applied AI systems.',
  keywords: [
    'Surya Pratap Singh Rathod',
    'Full-Stack Developer',
    'Software Engineer',
    'Bennett University',
    'Campus Eats',
    'Bhoomi Sanket',
    'Samadhan',
    'Next.js',
    'TypeScript',
    'PostgreSQL',
  ],
  authors: [{ name: 'Surya Pratap Singh Rathod' }],
  creator: 'Surya Pratap Singh Rathod',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Surya Pratap Singh Rathod',
    title: 'Surya Pratap Singh Rathod | Full-Stack Developer',
    description:
      'Full-stack developer and Computer Science student at Bennett University building practical software across web applications, databases, and applied AI systems.',
    images: [
      {
        url: '/images/surya-portrait.jpg',
        width: 768,
        height: 1024,
        alt: 'Surya Pratap Singh Rathod',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surya Pratap Singh Rathod | Full-Stack Developer',
    description:
      'Full-stack developer and Computer Science student at Bennett University building practical software across web applications, databases, and applied AI systems.',
    images: ['/images/surya-portrait.jpg'],
  },
  robots: {
    index: true,
    follow: true,
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
  ],
  jobTitle: 'Full-Stack Developer',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Bennett University',
    url: 'https://bennett.edu.in',
  },
  knowsAbout: [
    'Full-Stack Development',
    'Next.js',
    'TypeScript',
    'PostgreSQL',
    'Supabase',
    'FastAPI',
    'Flask',
    'Applied AI',
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
      <body className="antialiased bg-[#F7F7F4] text-[#17191D]">
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
