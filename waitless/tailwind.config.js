/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    colors:{
      'footer': '#04AA6D',
      'footer_hover': '#3e8e41',
      'footer_active': '#3e8e41',
      'background': '#e4e1e1',
      'div': '#f3f0f0',
      'header': '#423d3d',
    }
  },
  plugins: [],
}
