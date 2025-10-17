const { Noto_Serif, Roboto } = require('next/font/google')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize:{
        logoText: "34px",
        pg: "14px"
      },
      spacing: {
        xPadding: "7.6%",
        yPadding: "100px"
      },
      colors: {
        primary1: '#E6E1DB',
        fadePrimary: "rgba(239, 238, 234, 0.85)",
        primary2: "rgba(239, 238, 234, 1)",
        fw: "rgba(255, 255, 255, 0.1)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        body: ["Roboto", "sans"],
        serif: ['"Noto Serif Display"'],
        marker: ['"Permanent Marker"', "cursive"],
      },
      screens: {
        'lt': { 'max' : '500px'},
        'sm': { 'max': "400px" },
        'sm1': { 'max': "840px" },
        'md': { 'max': "800px" },
        'md1': { 'max': "850px"},
        'lg': { 'min': "2300px" },
        'xl': { 'max': "1280px" },
        "2xl": { 'max': "1536px" },
      },
    },
  },
  plugins: [],
}
