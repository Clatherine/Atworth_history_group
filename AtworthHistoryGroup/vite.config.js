import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import SitemapPlugin from 'vite-plugin-sitemap';
import viteImagemin from 'vite-plugin-imagemin';
import imageminWebp from 'imagemin-webp';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    SitemapPlugin({
      hostname: 'https://atworthhistorygroup.netlify.app',
      // You can add more options here if needed
    }),
    viteImagemin({
      // WebP conversion configuration
      plugins: [
        imageminWebp({
          quality: 75,
        }),
      ],
    }),
  ],
});