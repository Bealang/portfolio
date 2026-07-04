import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map((project) => ({
    params: { slug: project.id },
    props: { project },
  }));
}

export async function GET({ props }: any) {
  const { project } = props;
  
  const markdown = `---
title: "${project.data.title}"
date: "${project.data.date}"
url: "${project.data.url || ''}"
thumbnailAlt: "${project.data.thumbnailAlt}"
---

${project.body}`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
