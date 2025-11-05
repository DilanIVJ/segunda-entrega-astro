
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        soda: { ink: '#0f172a', sky: '#38bdf8', sand: '#e2e8f0' }
      }
    }
  },
  plugins: []
};
