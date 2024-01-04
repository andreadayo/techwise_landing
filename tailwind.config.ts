const withMT = require("@material-tailwind/react/utils/withMT");
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#030C13',
        gray: '#6E7A84',
        lightgray: '#DDDDDD',
        white: '#F5F5F5',
        darkgreen: '#1B6D53',
        green: '#20B486',
        lightgreen: '#D3F0E8',
      },
      transitionProperty: {
          'height': 'height'
      },
    },
  },
  plugins: [],
};

module.exports = withMT(config);
