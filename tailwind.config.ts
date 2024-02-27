import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        darkblue: '#234568',
        lightblue: '#016D98',
        greyblue: '#ABB8C3'
      },
      dropShadow: {
        'xl': '0 4px 4px rgba(0,0,0,0.25)'
      }
    },
  },
  plugins: [],
}
export default config
