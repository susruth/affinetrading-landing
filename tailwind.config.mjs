/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#050709',
          900: '#0A0D12',
          800: '#0F1318',
          700: '#161B22',
          600: '#1E242D',
        },
        accent: {
          DEFAULT: '#3ECFB4',
          light: '#6EDBC8',
          dark: '#2BA78F',
          muted: 'rgba(62, 207, 180, 0.08)',
        },
        steel: {
          50: '#F7F8FA',
          100: '#E8EBF0',
          200: '#CDD2DA',
          300: '#9CA5B4',
          400: '#6B7688',
          500: '#4D5869',
          600: '#3A4452',
          700: '#2A313D',
          800: '#1C222B',
          900: '#12161D',
        },
      },
      fontFamily: {
        heading: ['"DM Serif Display"', 'Georgia', '"Times New Roman"', 'serif'],
        body: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(3rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'h1': ['clamp(2.5rem, 4.5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'h2': ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h3': ['clamp(1.5rem, 2vw, 1.875rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h4': ['1.25rem', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.75' }],
        'body-sm': ['0.875rem', { lineHeight: '1.65' }],
        'caption': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '48': '12rem',
      },
      maxWidth: {
        'content': '76rem',
        'narrow': '42rem',
      },
    },
  },
  plugins: [],
};
