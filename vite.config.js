import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',  // Ensures the '@' alias points to your 'src' directory.
    },
  },
  server: {
    historyApiFallback: true, // Helps handle client-side routing in a single-page app
  },
});
