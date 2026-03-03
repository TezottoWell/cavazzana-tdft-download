import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark_red: {
          DEFAULT: '#7f1d1d',
          100: '#2a0606',
          200: '#530c0c',
          300: '#7f1d1d',
          400: '#991b1b',
          500: '#b91c1c',
          600: '#dc2626',
          700: '#ef4444',
          800: '#f87171',
          900: '#fecaca'
        },
        deep_black: {
          DEFAULT: '#0b0b0c',
          100: '#000000',
          200: '#111111',
          300: '#1a1a1a',
          400: '#222222',
          500: '#2b2b2b',
          600: '#3a3a3a',
          700: '#555555',
          800: '#777777',
          900: '#aaaaaa'
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 300ms ease-out forwards',
        'fade-in-up-delay-1': 'fadeInUp 300ms ease-out 50ms forwards',
        'fade-in-up-delay-2': 'fadeInUp 300ms ease-out 100ms forwards',
        'fade-in-up-delay-3': 'fadeInUp 300ms ease-out 150ms forwards',
        'fade-in-up-delay-4': 'fadeInUp 300ms ease-out 200ms forwards',
        'spin': 'spin 1s linear infinite'
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(6px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      }
    }
  },
  plugins: []
}

export default config