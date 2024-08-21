import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import SitemapPlugin from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    SitemapPlugin({
      hostname: 'https://atworthhistorygroup.netlify.app',
      // You can add more options here if needed
    })
  ],
});