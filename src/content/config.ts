import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(), // Short description for the card
    tags: z.array(z.string()),
    image: image().optional(),
    repo: z.string().optional(),
    demo: z.string().optional(),
    order: z.number().default(0),
  }),
});

const careerCollection = defineCollection({
  type: 'data',
  schema: z.object({
    institution: z.string(),
    title: z.string(),
    period: z.string(),
    description: z.string(),
    place: z.string(),
    mode: z.string().optional(),
    type: z.enum(['job', 'study']),
    order: z.number(),
  }),
});

const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
  career: careerCollection,
  about: aboutCollection,
};
