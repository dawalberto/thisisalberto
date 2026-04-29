import sitemap from '@astrojs/sitemap'
import tailwind from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://thisisalberto.dev',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwind()],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const url = new URL(item.url)
        const path = url.pathname.replace(/\/$/, '') || '/'

        if (path === '/' || path === '/es') {
          item.priority = 1.0
          item.changefreq = 'weekly'
        } else if (path.endsWith('/projects')) {
          item.priority = 0.9
          item.changefreq = 'monthly'
        } else if (path.endsWith('/career')) {
          item.priority = 0.8
          item.changefreq = 'monthly'
        } else if (path.endsWith('/contact')) {
          item.priority = 0.6
          item.changefreq = 'yearly'
        }
        return item
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
