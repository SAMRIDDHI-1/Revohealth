import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #ff7eb3, #ff758c, #ff4d4d)',
        'gradient-dark': 'linear-gradient(135deg, #1a202c, #2d3748, #4a5568)',
      },
      borderRadius: {
        lg: '16px',
        md: '12px',
        sm: '8px',
        xl: '24px',
      },
      colors: {
        background: {
          DEFAULT: '#f8f9fa',
          dark: '#1a202c',
        },
        foreground: {
          DEFAULT: '#212529',
          dark: '#f8f9fa',
        },
        card: {
          DEFAULT: '#ffffff',
          dark: '#2d3748',
        },
        primary: {
          DEFAULT: '#ff4d4d',
          dark: '#ff758c',
        },
        secondary: {
          DEFAULT: '#6c63ff',
          dark: '#a29bfe',
        },
        accent: {
          DEFAULT: '#ffb347',
          dark: '#ffcc80',
        },
        muted: {
          DEFAULT: '#ced4da',
          dark: '#4a5568',
        },
        border: {
          DEFAULT: 'hsl(210, 16%, 82%)',
          dark: 'hsl(210, 22%, 26%)',
        },
        input: {
          DEFAULT: 'hsl(210, 16%, 96%)',
          dark: 'hsl(210, 22%, 26%)',
        },
        ring: {
          DEFAULT: 'hsl(210, 22%, 36%)',
          dark: 'hsl(210, 22%, 76%)',
        },
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', opacity: '0.9' },
          '50%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideIn: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        bounce: 'bounce 1s infinite',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground.DEFAULT'),
            h1: { color: theme('colors.primary.DEFAULT') },
            h2: { color: theme('colors.secondary.DEFAULT') },
            a: { color: theme('colors.accent.DEFAULT'), textDecoration: 'none' },
            strong: { color: theme('colors.foreground.DEFAULT') },
          },
        },
        dark: {
          css: {
            color: theme('colors.foreground.dark'),
            h1: { color: theme('colors.primary.dark') },
            h2: { color: theme('colors.secondary.dark') },
            a: { color: theme('colors.accent.dark'), textDecoration: 'none' },
            strong: { color: theme('colors.foreground.dark') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
};

export default config;
