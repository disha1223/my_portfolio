/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#FFF6F9',
        panel: '#FFE3ED',
        rose: {
          DEFAULT: '#E85D9C',
          dark: '#C43E7E',
          light: '#FF8CBB',
        },
        ink: '#1A1523',
        muted: '#8B7D96',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        bob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drop: {
          '0%': { transform: 'translateY(-14px) scale(0.9)', opacity: '0' },
          '60%': { transform: 'translateY(2px) scale(1.03)', opacity: '1' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '80%': { transform: 'scale(1.8)', opacity: '0' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      animation: {
        bob: 'bob 5s ease-in-out infinite',
        drop: 'drop 0.7s cubic-bezier(0.34,1.56,0.64,1) both',
        fadeUp: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both',
        pulseRing: 'pulseRing 2.2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
}
