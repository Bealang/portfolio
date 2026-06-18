import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

export async function GET({ props }) {
  const { post } = props;
  
  const markdown = `---
title: "${post.data.title}"
description: "${post.data.description}"
pubDate: "${post.data.pubDate.toISOString()}"
author: "${post.data.author || 'web2sell'}"
---

${post.body}`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
    },
  });
}
