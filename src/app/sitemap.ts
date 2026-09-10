import { MetadataRoute } from 'next';
import { projects } from '@/content/projects';

const siteUrl = 'https://surya-pratap.vercel.app'; // [NEEDS VERIFICATION]

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...projectRoutes,
  ];
}
