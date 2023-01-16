module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#c23033',
        secondary: '#131313',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#c23033',

          secondary: '#131313',

          accent: '#1FB2A6',

          neutral: '#FDFEFF',

          'base-100': '#2A303C',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },

  // add daisyUI plugin
  plugins: [require('daisyui')],
};
