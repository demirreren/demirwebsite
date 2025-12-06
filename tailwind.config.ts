import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0c0a09',
          secondary: '#1c1917',
          tertiary: '#292524',
          elevated: '#44403c',
        },
        foreground: {
          DEFAULT: '#fafaf9',
          secondary: '#a8a29e',
          tertiary: '#78716c',
          muted: '#57534e',
        },
        // Warm terracotta/rust orange
        accent: {
          DEFAULT: '#c2410c',
          light: '#ea580c',
          warm: '#f97316',
          muted: '#c2410c30',
        },
        // Secondary sage
        sage: {
          DEFAULT: '#84cc16',
          muted: '#84cc1620',
        },
        border: {
          DEFAULT: '#292524',
          light: '#44403c',
        },
      },
      fontFamily: {
        // Fraunces - distinctive, warm, slightly quirky serif
        display: ['Fraunces', 'Georgia', 'serif'],
        // General Sans for body - clean but has character
        sans: ['General Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 10vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '900' }],
        'display-lg': ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
        'heading': ['1.125rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.7' }],
        'body': ['0.9375rem', { lineHeight: '1.7' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'draw-line': 'drawLine 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
