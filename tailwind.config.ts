import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '900px',
        'lg': '1440px',
      },
      colors: {
        'theme': {
          'bg': 'var(--bg)',
          'bg2': 'var(--bg2)',
          'bg3': 'var(--bg3)',
          'accent': 'var(--accent)',
          'accent2': 'var(--accent2)',
          'text': 'var(--text)',
          'muted': 'var(--muted)',
        },
      },
      fontFamily: {
        'title': 'var(--font-title)',
        'body': "'Cormorant Garamond', Georgia, serif",
      },
      animation: {
        'glitch': 'glitch 9s infinite 2s',
        'fadeUp': 'fadeUp 1s ease both',
        'pulse': 'pulse 2.5s infinite',
        'panelIn': 'panelIn 0.22s ease both',
        'faqOpen': 'faqOpen 0.3s ease both',
        'mobileNavIn': 'mobileNavIn 0.3s ease both',
      },
    },
  },
  plugins: [],
} satisfies Config
