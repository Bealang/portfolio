import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import purgecss from 'astro-purgecss';

export default defineConfig({
  site: 'https://web2sell.pl',
  build: {
    inlineStylesheets: 'never',
  },
  redirects: {
    '/oferta-dla-przewoznikow': '/uslugi/oferta-dla-przewoznikow',
  },
  integrations: [
    sitemap(),
    purgecss({
      safelist: {
        standard: [
          'reveal--visible',
          'is-dragging',
          'is-open',
          'zamow-hero--active',
          'htl-step--visible',
          'loaded',
          'is-active',
          'active',
          'hidden',
          'aos-init',
          'aos-animate',
          'is-sticky',
          'unsticky-animating',
          'top-header-entrance',
          'menu-open'
        ],
        greedy: [
          /^aos-/,
          /^reveal-/,
          /^htl-step-/
        ]
      }
    })
  ],
});
