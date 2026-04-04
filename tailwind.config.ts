import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101828',
        navy: '#0B2545',
        sky: '#EAF2FF',
        accent: '#1D4ED8'
      },
      boxShadow: {
        premium: '0 8px 30px rgba(2, 12, 27, 0.08)'
      }
    },
  },
  plugins: [],
};

export default config;
