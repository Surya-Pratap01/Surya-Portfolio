import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://surya-pratap.vercel.app/sitemap.xml', // [NEEDS VERIFICATION]
  };
}
