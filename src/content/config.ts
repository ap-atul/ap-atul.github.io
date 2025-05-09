import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      keywords: z.string().default(""),
      tags: z.array(z.string()).default([]),
      image: image().optional(),
      draft: z.boolean().optional(),
    }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    url: z.string().url(),
  }),
});

const projects = defineCollection({
  loader: file("./src/content/projects/index.json"),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      title: z.string(),
      description: z.string(),
      draft: z.boolean().optional(),
      icon: image(),
      links: z.array(
        z.object({
          title: z.string(),
          url: z.string().url(),
        }),
      ),
    }),
});

export const collections = { blog, work, projects };
