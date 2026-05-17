import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    color: z.string(),
    accent: z.string(),
    url: z.string().optional(),
    thumbnail: z.string(),
    thumbnailAlt: z.string(),
    gallery: z.array(z.string()).min(1),
    order: z.number(),
  }),
});

export const collections = { projects };
