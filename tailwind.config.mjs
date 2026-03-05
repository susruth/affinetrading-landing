/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary palette — deep, dark foundation
        midnight: {
          950: '#06080C',
          900: '#0A0E14',
          800: '#111820',
          700: '#1A222E',
          600: '#242E3C',
        },
        // Accent — refined teal/cyan that reads "precision"
        accent: {
          DEFAULT: '#3ECFB4',
          light: '#6EDBC8',
          dark: '#2BA78F',
          muted: 'rgba(62, 207, 180, 0.12)',
        },
        // Neutral text and border tones
        steel: {
          50: '#F5F7FA',
          100: '#E4E8EE',
          200: '#C8CED8',
          300: '#A3ACBA',
          400: '#7D8899',
          500: '#5E6B7C',
          600: '#4A5568',
          700: '#374152',
          800: '#252E3D',
          900: '#1A2030',
        },
      },
      fontFamily: {
        heading: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'h1': ['3.5rem', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.75rem', { lineHeight: '1.3' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.06em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      maxWidth: {
        'content': '72rem',
        'narrow': '48rem',
      },
      borderColor: {
        DEFAULT: 'rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
