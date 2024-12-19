/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Add a custom monitor screen size
        'xxl': '1920px', // Customize as needed
      },
      colors: {
        purple: {
          500: '#6B46C1',
          600: '#553C9A',
        },
        indigo: {
          600: '#5A67D8',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Add Poppins as the default sans-serif font
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        resolve: {
          fullySpecified: false, // Disable fully specified imports for .mjs
        },
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules\/(fast-copy|contentful-sdk-core)/,
        use: 'source-map-loader',
      },
    ],
  },
  plugins: [],
};
