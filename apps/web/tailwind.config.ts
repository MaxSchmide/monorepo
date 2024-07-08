import type { Config } from 'tailwindcss'

const config = {
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
