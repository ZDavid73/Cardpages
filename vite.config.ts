import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://apitcg.com', // Redirigir las solicitudes a la API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Reescribe el prefijo '/api'
      },
    },
  },
});
