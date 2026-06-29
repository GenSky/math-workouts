/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brutalist dark palette
        ink: '#0a0a0b',        // near-black background
        coal: '#141417',       // raised surfaces
        slate: '#1d1d22',      // cards
        border: '#2c2c34',     // hard borders
        ghost: '#8a8a99',      // muted text
        chalk: '#f4f4f5',      // primary text
        // Accents — high contrast, electric
        lime: '#c6ff3a',       // primary / correct / Max
        electric: '#5b8cff',   // links / info
        flame: '#ff5e3a',      // streak / danger
        gold: '#ffc83a',       // badges / xp
        violet: '#b06bff',     // secondary accent
      },
      fontFamily: {
        display: ['"Archivo Black"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        brutal: '6px 6px 0 0 #000',
        'brutal-sm': '3px 3px 0 0 #000',
        'brutal-lime': '6px 6px 0 0 #c6ff3a',
        'brutal-flame': '6px 6px 0 0 #ff5e3a',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '60%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        flicker: {
          '0%, 100%': { transform: 'scale(1) rotate(-2deg)' },
          '50%': { transform: 'scale(1.12) rotate(2deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.4s ease-in-out',
        pop: 'pop 0.3s ease-out',
        flicker: 'flicker 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
