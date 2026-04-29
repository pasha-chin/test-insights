import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    server: {
        proxy: {
            '/api/v1': 'http://localhost:3000'
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
                        return 'vendor';
                    }
                    if (id.includes('node_modules/chart.js') || id.includes('node_modules/react-chartjs-2')) {
                        return 'charts';
                    }
                    if (id.includes('node_modules/react-router-dom')) {
                        return 'router';
                    }
                }
            }
        }
    }
})
