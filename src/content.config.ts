import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    icon: z.string().optional(),
    image: z.string().optional(),
    techStack: z.array(z.string()),
    githubLink: z.string().url().optional(),
    liveLink: z.string().url().optional(),
    media: z.array(z.object({
      type: z.enum(['image', 'video']),
      url: z.string(),
      alt: z.string().optional()
    })).optional()
  })
});

export const collections = {
  'projects': projectsCollection,
};
