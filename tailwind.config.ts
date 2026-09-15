import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#111111', signal: '#C8102E', paper: '#FFFFFF' }, fontFamily: { sans: ['Arial', 'Helvetica', 'sans-serif'], display: ['Arial', 'Helvetica', 'sans-serif'] }, letterSpacing: { tightest: '-0.07em' } } },
  plugins: []
};
export default config;
