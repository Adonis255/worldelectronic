import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          products: path.resolve(__dirname, 'products.html'),
          productDetail: path.resolve(__dirname, 'product-detail.html'),
          about: path.resolve(__dirname, 'about.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          blogSingle: path.resolve(__dirname, 'blog-single.html'),
          order: path.resolve(__dirname, 'order.html'),
          reviews: path.resolve(__dirname, 'reviews.html'),
          contact: path.resolve(__dirname, 'contact.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
