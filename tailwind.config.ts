import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: '#0AA0EA',
      darkBlue: '#091926',
beige: '#efeae8',
mustard: '#d4a373',
// grey: '#635b54',
greyBrown: '#635b54',
darkBrown: '#44312e',
lightBrown: '#566d44',
lightGrey: '#cfccc9',
lighterGrey: '#F4F5F8',
black: '#000',
white:'#fff',
dimBlue: '#0aa0ea70',
transparent: '#00000000'
    },
    screens: {
      '4xl': '1600px',
      '3xl': { max: '1535px' },
      
      '2xl': { max: '1400px' },
      xl: { max: '1279px' },
      

      lg: { max: '1023px' },
      

      md: { max: '767px' },
      

      sm: { max: '639px' },
      xs: { max: '575px' },
      dxs: { max: '500px' },
      '2xs': { max: '400px' },
      
  },
    extend: {},
  },
  plugins: [],
};
export default config;
