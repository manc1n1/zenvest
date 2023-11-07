import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		open: true,
		proxy: {
			// Uncomment the following code once you have built the queries and mutations in the client folder
			// '/graphql': {
			// Comment out the following code once you have built the queries and mutations in the client folder
			'/api': {
				target: 'http://localhost:3001',
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
